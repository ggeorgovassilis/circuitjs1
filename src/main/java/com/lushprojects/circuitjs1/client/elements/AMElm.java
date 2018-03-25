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

import com.lushprojects.circuitjs1.client.support.StringTokenizer;
import com.lushprojects.circuitjs1.client.ui.Color;
import com.lushprojects.circuitjs1.client.ui.EditInfo;
import com.lushprojects.circuitjs1.client.ui.Font;
import com.lushprojects.circuitjs1.client.ui.Graphics;
import com.lushprojects.circuitjs1.client.ui.Point;

// contributed by Edward Calver

public class AMElm extends CircuitElm {
    static final int FLAG_COS = 2;
    double carrierfreq, signalfreq, maxVoltage, freqTimeZero;

    public AMElm(int xx, int yy) {
	super(xx, yy);
	maxVoltage = 5;
	carrierfreq = 1000;
	signalfreq = 40;
	reset();
    }

    public AMElm(int xa, int ya, int xb, int yb, int f, StringTokenizer st) {
	super(xa, ya, xb, yb, f);
	carrierfreq = new Double(st.nextToken()).doubleValue();
	signalfreq = new Double(st.nextToken()).doubleValue();
	maxVoltage = new Double(st.nextToken()).doubleValue();
	if ((flags & FLAG_COS) != 0) {
	    flags &= ~FLAG_COS;
	}
	reset();
    }

    int getDumpType() {
	return 200;
    }

    public String dump() {
	return super.dump() + " " + carrierfreq + " " + signalfreq + " " + maxVoltage;
    }
    /*
     * void setCurrent(double c) { current = c; System.out.print("v current set to "
     * + c + "\n"); }
     */

    public void reset() {
	freqTimeZero = 0;
	curcount = 0;
    }

    public int getPostCount() {
	return 1;
    }

    public void stamp() {
	sim.stampVoltageSource(0, nodes[0], voltSource);
    }

    public void doStep() {
	sim.updateVoltageSource(0, nodes[0], voltSource, getVoltage());
    }

    double getVoltage() {
	double w = 2 * pi * (sim.t - freqTimeZero);
	return ((Math.sin(w * signalfreq) + 1) / 2) * Math.sin(w * carrierfreq) * maxVoltage;
    }

    final int circleSize = 17;

    public void draw(Graphics g) {
	setBbox(point1, point2, circleSize);
	setVoltageColor(g, volts[0]);
	drawThickLine(g, point1, lead1);

	Font f = new Font("SansSerif", 0, 12);
	g.setFont(f);
	g.setColor(needsHighlight() ? sim.selectColor : sim.whiteColor);
	setPowerColor(g, false);
	getVoltage();
	String s = "AM";
	drawCenteredText(g, s, x2, y2, true);
	drawWaveform(g, point2);
	drawPosts(g);
	curcount = updateDotCount(-current, curcount);
	if (sim.dragElm != this)
	    drawDots(g, point1, lead1, curcount);
    }

    void drawWaveform(Graphics g, Point center) {
	g.setColor(needsHighlight() ? sim.selectColor : Color.gray);
	setPowerColor(g, false);
	int xc = center.x;
	int yc = center.y;
	drawThickCircle(g, xc, yc, circleSize);
	adjustBbox(xc - circleSize, yc - circleSize, xc + circleSize, yc + circleSize);
    }

    public void setPoints() {
	super.setPoints();
	lead1 = interpPoint(point1, point2, 1 - circleSize / dn);
    }

    double getVoltageDiff() {
	return volts[0];
    }

    public boolean hasGroundConnection(int n1) {
	return true;
    }

    public int getVoltageSourceCount() {
	return 1;
    }

    double getPower() {
	return -getVoltageDiff() * current;
    }

    public void getInfo(String arr[]) {

	arr[0] = "AM Source";
	arr[1] = "I = " + getCurrentText(getCurrent());
	arr[2] = "V = " + getVoltageText(getVoltageDiff());
	arr[3] = "cf = " + getUnitText(carrierfreq, "Hz");
	arr[4] = "sf = " + getUnitText(signalfreq, "Hz");
	arr[5] = "Vmax = " + getVoltageText(maxVoltage);
    }

    public EditInfo getEditInfo(int n) {
	if (n == 0)
	    return new EditInfo("Max Voltage", maxVoltage, -20, 20);
	if (n == 1)
	    return new EditInfo("Carrier Frequency (Hz)", carrierfreq, 4, 500);
	if (n == 2)
	    return new EditInfo("Signal Frequency (Hz)", signalfreq, 4, 500);

	return null;
    }

    public void setEditValue(int n, EditInfo ei) {
	if (n == 0)
	    maxVoltage = ei.value;
	if (n == 1)
	    carrierfreq = ei.value;
	if (n == 2)
	    signalfreq = ei.value;
    }
}
