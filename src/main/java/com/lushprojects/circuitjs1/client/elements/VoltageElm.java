/*    
    Copyright (C) Paul Falstad and Iain Sharp
    
    This file is part of CircuitJS1.

    CircuitJS1 is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 2 of the License, or
    (at your option) any later version.

    CircuitJS1 is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with CircuitJS1.  If not, see <http://www.gnu.org/licenses/>.
*/

package com.lushprojects.circuitjs1.client.elements;

import com.google.gwt.user.client.Window;
import com.lushprojects.circuitjs1.client.CirSim;
import com.lushprojects.circuitjs1.client.support.CircuitElementSupport;
import com.lushprojects.circuitjs1.client.support.StringTokenizer;
import com.lushprojects.circuitjs1.client.ui.Choice;
import com.lushprojects.circuitjs1.client.ui.Color;
import com.lushprojects.circuitjs1.client.ui.EditInfo;
import com.lushprojects.circuitjs1.client.ui.Graphics;
import com.lushprojects.circuitjs1.client.ui.Point;

public class VoltageElm extends CircuitElm {
    static final int FLAG_COS = 2;
    static final int FLAG_PULSE_DUTY = 4;
    int waveform;
    static final int WF_DC = 0;
    static final int WF_AC = 1;
    static final int WF_SQUARE = 2;
    static final int WF_TRIANGLE = 3;
    static final int WF_SAWTOOTH = 4;
    static final int WF_PULSE = 5;
    static final int WF_VAR = 6;
    double frequency, maxVoltage, freqTimeZero, bias, phaseShift, dutyCycle;

    static final double defaultPulseDuty = 1 / (2 * Math.PI);

    VoltageElm(int xx, int yy, int wf) {
	super(xx, yy);
	waveform = wf;
	maxVoltage = 5;
	frequency = 40;
	dutyCycle = .5;
	reset();
    }

    public VoltageElm(int xa, int ya, int xb, int yb, int f, StringTokenizer st) {
	super(xa, ya, xb, yb, f);
	maxVoltage = 5;
	frequency = 40;
	waveform = WF_DC;
	dutyCycle = .5;
	try {
	    waveform = new Integer(st.nextToken()).intValue();
	    frequency = new Double(st.nextToken()).doubleValue();
	    maxVoltage = new Double(st.nextToken()).doubleValue();
	    bias = new Double(st.nextToken()).doubleValue();
	    phaseShift = new Double(st.nextToken()).doubleValue();
	    dutyCycle = new Double(st.nextToken()).doubleValue();
	} catch (Exception e) {
	}
	if ((flags & FLAG_COS) != 0) {
	    flags &= ~FLAG_COS;
	    phaseShift = pi / 2;
	}

	// old circuit files have the wrong duty cycle for pulse waveforms (wasn't
	// configurable in the past)
	if ((flags & FLAG_PULSE_DUTY) == 0 && waveform == WF_PULSE) {
	    dutyCycle = defaultPulseDuty;
	}

	reset();
    }

    int getDumpType() {
	return 'v';
    }

    public String dump() {
	// set flag so we know if duty cycle is correct for pulse waveforms
	if (waveform == WF_PULSE)
	    flags |= FLAG_PULSE_DUTY;
	else
	    flags &= ~FLAG_PULSE_DUTY;

	return super.dump() + " " + waveform + " " + frequency + " " + maxVoltage + " " + bias + " " + phaseShift + " "
		+ dutyCycle;
	// VarRailElm adds text at the end
    }

    public void reset() {
	freqTimeZero = 0;
	curcount = 0;
    }

    double triangleFunc(double x) {
	if (x < pi)
	    return x * (2 / pi) - 1;
	return 1 - (x - pi) * (2 / pi);
    }

    public void stamp() {
	if (waveform == WF_DC)
	    sim.stampVoltageSource(nodes[0], nodes[1], voltSource, getVoltage());
	else
	    sim.stampVoltageSource(nodes[0], nodes[1], voltSource);
    }

    public void doStep() {
	if (waveform != WF_DC)
	    sim.updateVoltageSource(nodes[0], nodes[1], voltSource, getVoltage());
    }

    double getVoltage() {
	double w = 2 * pi * (sim.t - freqTimeZero) * frequency + phaseShift;
	switch (waveform) {
	case WF_DC:
	    return maxVoltage + bias;
	case WF_AC:
	    return Math.sin(w) * maxVoltage + bias;
	case WF_SQUARE:
	    return bias + ((w % (2 * pi) > (2 * pi * dutyCycle)) ? -maxVoltage : maxVoltage);
	case WF_TRIANGLE:
	    return bias + triangleFunc(w % (2 * pi)) * maxVoltage;
	case WF_SAWTOOTH:
	    return bias + (w % (2 * pi)) * (maxVoltage / pi) - maxVoltage;
	case WF_PULSE:
	    return ((w % (2 * pi)) < (2 * pi * dutyCycle)) ? maxVoltage + bias : bias;
	default:
	    return 0;
	}
    }

    final int circleSize = 17;

    public void setPoints() {
	super.setPoints();
	calcLeads((waveform == WF_DC || waveform == WF_VAR) ? 8 : circleSize * 2);
    }

    public void draw(Graphics g) {
	setBbox(x, y, x2, y2);
	draw2Leads(g);
	if (waveform == WF_DC) {
	    setPowerColor(g, false);
	    setVoltageColor(g, volts[0]);
	    CircuitElementSupport.interpPoint2(lead1, lead2, sim.ps1, sim.ps2, 0, 10);
	    CircuitElementSupport.drawThickLine(g, sim.ps1, sim.ps2);
	    setVoltageColor(g, volts[1]);
	    int hs = 16;
	    setBbox(point1, point2, hs);
	    CircuitElementSupport.interpPoint2(lead1, lead2, sim.ps1, sim.ps2, 1, hs);
	    CircuitElementSupport.drawThickLine(g, sim.ps1, sim.ps2);
	} else {
	    setBbox(point1, point2, circleSize);
	    CircuitElementSupport.interpPoint(lead1, lead2, sim.ps1, .5);
	    drawWaveform(g, sim.ps1);
	    String inds;
	    if (bias > 0 || (bias == 0 && waveform == WF_PULSE))
		inds = "+";
	    else
		inds = "*";
	    g.setColor(Color.white);
	    g.setFont(sim.unitsFont);
	    Point plusPoint = CircuitElementSupport.interpPoint(point1, point2, (dn / 2 + circleSize + 4) / dn, 10 * dsign);
	    plusPoint.y += 4;
	    int w = (int) g.context.measureText(inds).getWidth();
	    ;
	    g.drawString(inds, plusPoint.x - w / 2, plusPoint.y);
	}
	updateDotCount();
	if (sim.dragElm != this) {
	    if (waveform == WF_DC)
		drawDots(g, point1, point2, curcount);
	    else {
		drawDots(g, point1, lead1, curcount);
		drawDots(g, point2, lead2, -curcount);
	    }
	}
	drawPosts(g);
    }

    void drawWaveform(Graphics g, Point center) {
	g.setColor(needsHighlight() ? sim.selectColor : Color.gray);
	setPowerColor(g, false);
	int xc = center.x;
	int yc = center.y;
	CircuitElementSupport.drawThickCircle(g, xc, yc, circleSize);
	int wl = 8;
	adjustBbox(xc - circleSize, yc - circleSize, xc + circleSize, yc + circleSize);
	int xc2;
	switch (waveform) {
	case WF_DC: {
	    break;
	}
	case WF_SQUARE:
	    xc2 = (int) (wl * 2 * dutyCycle - wl + xc);
	    xc2 = CircuitElementSupport.max(xc - wl + 3, CircuitElementSupport.min(xc + wl - 3, xc2));
	    CircuitElementSupport.drawThickLine(g, xc - wl, yc - wl, xc - wl, yc);
	    CircuitElementSupport.drawThickLine(g, xc - wl, yc - wl, xc2, yc - wl);
	    CircuitElementSupport.drawThickLine(g, xc2, yc - wl, xc2, yc + wl);
	    CircuitElementSupport.drawThickLine(g, xc + wl, yc + wl, xc2, yc + wl);
	    CircuitElementSupport.drawThickLine(g, xc + wl, yc, xc + wl, yc + wl);
	    break;
	case WF_PULSE:
	    yc += wl / 2;
	    CircuitElementSupport.drawThickLine(g, xc - wl, yc - wl, xc - wl, yc);
	    CircuitElementSupport.drawThickLine(g, xc - wl, yc - wl, xc - wl / 2, yc - wl);
	    CircuitElementSupport.drawThickLine(g, xc - wl / 2, yc - wl, xc - wl / 2, yc);
	    CircuitElementSupport.drawThickLine(g, xc - wl / 2, yc, xc + wl, yc);
	    break;
	case WF_SAWTOOTH:
	    CircuitElementSupport.drawThickLine(g, xc, yc - wl, xc - wl, yc);
	    CircuitElementSupport.drawThickLine(g, xc, yc - wl, xc, yc + wl);
	    CircuitElementSupport.drawThickLine(g, xc, yc + wl, xc + wl, yc);
	    break;
	case WF_TRIANGLE: {
	    int xl = 5;
	    CircuitElementSupport.drawThickLine(g, xc - xl * 2, yc, xc - xl, yc - wl);
	    CircuitElementSupport.drawThickLine(g, xc - xl, yc - wl, xc, yc);
	    CircuitElementSupport.drawThickLine(g, xc, yc, xc + xl, yc + wl);
	    CircuitElementSupport.drawThickLine(g, xc + xl, yc + wl, xc + xl * 2, yc);
	    break;
	}
	case WF_AC: {
	    int i;
	    int xl = 10;
	    g.context.beginPath();
	    g.context.setLineWidth(3.0);

	    for (i = -xl; i <= xl; i++) {
		int yy = yc + (int) (.95 * Math.sin(i * pi / xl) * wl);
		if (i == -xl)
		    g.context.moveTo(xc + i, yy);
		else
		    g.context.lineTo(xc + i, yy);
	    }
	    g.context.stroke();
	    g.context.setLineWidth(1.0);
	    break;
	}
	}
	if (sim.showValuesCheckItem.getState()) {
	    String s = CircuitElementSupport.getShortUnitText(frequency, "Hz");
	    if (dx == 0 || dy == 0)
		drawValues(g, s, circleSize);
	}
    }

    public int getVoltageSourceCount() {
	return 1;
    }

    double getPower() {
	return -getVoltageDiff() * current;
    }

    double getVoltageDiff() {
	return volts[1] - volts[0];
    }

    public void getInfo(String arr[]) {
	switch (waveform) {
	case WF_DC:
	case WF_VAR:
	    arr[0] = "voltage source";
	    break;
	case WF_AC:
	    arr[0] = "A/C source";
	    break;
	case WF_SQUARE:
	    arr[0] = "square wave gen";
	    break;
	case WF_PULSE:
	    arr[0] = "pulse gen";
	    break;
	case WF_SAWTOOTH:
	    arr[0] = "sawtooth gen";
	    break;
	case WF_TRIANGLE:
	    arr[0] = "triangle gen";
	    break;
	}
	arr[1] = "I = " + CircuitElementSupport.getCurrentText(getCurrent());
	arr[2] = ((this instanceof RailElm) ? "V = " : "Vd = ") + CircuitElementSupport.getVoltageText(getVoltageDiff());
	if (waveform != WF_DC && waveform != WF_VAR) {
	    arr[3] = "f = " + CircuitElementSupport.getUnitText(frequency, "Hz");
	    arr[4] = "Vmax = " + CircuitElementSupport.getVoltageText(maxVoltage);
	    int i = 5;
	    if (waveform == WF_AC && bias == 0)
		arr[i++] = "V(rms) = " + CircuitElementSupport.getVoltageText(maxVoltage / 1.41421356);
	    if (bias != 0)
		arr[i++] = "Voff = " + CircuitElementSupport.getVoltageText(bias);
	    else if (frequency > 500)
		arr[i++] = "wavelength = " + CircuitElementSupport.getUnitText(2.9979e8 / frequency, "m");
	    arr[i++] = "P = " + CircuitElementSupport.getUnitText(getPower(), "W");
	}
	if (waveform == WF_DC && current != 0 && sim.showResistanceInVoltageSources) {
	    arr[3] = "(R = " + CircuitElementSupport.getUnitText(maxVoltage / current, CirSim.ohmString) + ")";
	    arr[4] = "P = " + CircuitElementSupport.getUnitText(getPower(), "W");
	}
    }

    public EditInfo getEditInfo(int n) {
	if (n == 0)
	    return new EditInfo(waveform == WF_DC ? "Voltage" : "Max Voltage", maxVoltage, -20, 20);
	if (n == 1) {
	    EditInfo ei = new EditInfo("Waveform", waveform, -1, -1);
	    ei.choice = new Choice();
	    ei.choice.add("D/C");
	    ei.choice.add("A/C");
	    ei.choice.add("Square Wave");
	    ei.choice.add("Triangle");
	    ei.choice.add("Sawtooth");
	    ei.choice.add("Pulse");
	    ei.choice.select(waveform);
	    return ei;
	}
	if (waveform == WF_DC)
	    return null;
	if (n == 2)
	    return new EditInfo("Frequency (Hz)", frequency, 4, 500);
	if (n == 3)
	    return new EditInfo("DC Offset (V)", bias, -20, 20);
	if (n == 4)
	    return new EditInfo("Phase Offset (degrees)", phaseShift * 180 / pi, -180, 180).setDimensionless();
	if (n == 5 && (waveform == WF_PULSE || waveform == WF_SQUARE))
	    return new EditInfo("Duty Cycle", dutyCycle * 100, 0, 100).setDimensionless();
	return null;
    }

    public void setEditValue(int n, EditInfo ei) {
	if (n == 0)
	    maxVoltage = ei.value;
	if (n == 3)
	    bias = ei.value;
	if (n == 2) {
	    // adjust time zero to maintain continuity ind the waveform
	    // even though the frequency has changed.
	    double oldfreq = frequency;
	    frequency = ei.value;
	    double maxfreq = 1 / (8 * sim.timeStep);
	    if (frequency > maxfreq) {
		if (Window.confirm(CirSim.LS("Adjust timestep to allow for higher frequencies?")))
		    sim.timeStep = 1 / (32 * frequency);
		else
		    frequency = maxfreq;
	    }
	    freqTimeZero = sim.t - oldfreq * (sim.t - freqTimeZero) / frequency;
	}
	if (n == 1) {
	    int ow = waveform;
	    waveform = ei.choice.getSelectedIndex();
	    if (waveform == WF_DC && ow != WF_DC) {
		ei.newDialog = true;
		bias = 0;
	    } else if (waveform != ow)
		ei.newDialog = true;

	    // change duty cycle if we're changing to or from pulse
	    if (waveform == WF_PULSE && ow != WF_PULSE)
		dutyCycle = defaultPulseDuty;
	    else if (ow == WF_PULSE && waveform != WF_PULSE)
		dutyCycle = .5;

	    setPoints();
	}
	if (n == 4)
	    phaseShift = ei.value * pi / 180;
	if (n == 5)
	    dutyCycle = ei.value * .01;
    }
}
