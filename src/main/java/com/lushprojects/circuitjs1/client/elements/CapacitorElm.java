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

import com.lushprojects.circuitjs1.client.CirSim;
import com.lushprojects.circuitjs1.client.support.CircuitElementSupport;
import com.lushprojects.circuitjs1.client.support.StringTokenizer;
import com.lushprojects.circuitjs1.client.ui.Checkbox;
import com.lushprojects.circuitjs1.client.ui.Color;
import com.lushprojects.circuitjs1.client.ui.EditInfo;
import com.lushprojects.circuitjs1.client.ui.Graphics;
import com.lushprojects.circuitjs1.client.ui.Point;

public class CapacitorElm extends CircuitElm {
    public double capacitance;
    public double compResistance, voltdiff;
    public Point plate1[], plate2[];
    public static final int FLAG_BACK_EULER = 2;

    public CapacitorElm(int xx, int yy) {
	super(xx, yy);
	capacitance = 1e-5;
    }

    public CapacitorElm(int xa, int ya, int xb, int yb, int f, StringTokenizer st) {
	super(xa, ya, xb, yb, f);
	capacitance = new Double(st.nextToken()).doubleValue();
	voltdiff = new Double(st.nextToken()).doubleValue();
    }

    boolean isTrapezoidal() {
	return (flags & FLAG_BACK_EULER) == 0;
    }

    public void setNodeVoltage(int n, double c) {
	super.setNodeVoltage(n, c);
	voltdiff = volts[0] - volts[1];
    }

    public void reset() {
	super.reset();
	current = curcount = curSourceValue = 0;
	// put small charge on caps when reset to start oscillators
	voltdiff = 1e-3;
    }

    int getDumpType() {
	return 'c';
    }

    public String dump() {
	return super.dump() + " " + capacitance + " " + voltdiff;
    }

    Point platePoints[];

    public void setPoints() {
	super.setPoints();
	double f = (dn / 2 - 4) / dn;
	// calc leads
	lead1 = interpPoint(point1, point2, f);
	lead2 = interpPoint(point1, point2, 1 - f);
	// calc plates
	plate1 = CircuitElementSupport.newPointArray(2);
	plate2 = CircuitElementSupport.newPointArray(2);
	CircuitElementSupport.interpPoint2(point1, point2, plate1[0], plate1[1], f, 12);
	CircuitElementSupport.interpPoint2(point1, point2, plate2[0], plate2[1], 1 - f, 12);
    }

    public void draw(Graphics g) {
	int hs = 12;
	setBbox(point1, point2, hs);

	// draw first lead and plate
	setVoltageColor(g, volts[0]);
	CircuitElementSupport.drawThickLine(g, point1, lead1);
	setPowerColor(g, false);
	CircuitElementSupport.drawThickLine(g, plate1[0], plate1[1]);
	if (sim.powerCheckItem.getState())
	    g.setColor(Color.gray);

	// draw second lead and plate
	setVoltageColor(g, volts[1]);
	CircuitElementSupport.drawThickLine(g, point2, lead2);
	setPowerColor(g, false);
	if (platePoints == null)
	    CircuitElementSupport.drawThickLine(g, plate2[0], plate2[1]);
	else {
	    int i;
	    for (i = 0; i != 7; i++)
		CircuitElementSupport.drawThickLine(g, platePoints[i], platePoints[i + 1]);
	}

	updateDotCount();
	if (sim.dragElm != this) {
	    drawDots(g, point1, lead1, curcount);
	    drawDots(g, point2, lead2, -curcount);
	}
	drawPosts(g);
	if (sim.showValuesCheckItem.getState()) {
	    String s = CircuitElementSupport.getShortUnitText(sim, capacitance, "F");
	    drawValues(g, s, hs);
	}
    }

    public void stamp() {
	// capacitor companion model using trapezoidal approximation
	// (Norton equivalent) consists of a current source in
	// parallel with a resistor. Trapezoidal is more accurate
	// than backward euler but can cause oscillatory behavior
	// if RC is small relative to the timestep.
	if (isTrapezoidal())
	    compResistance = sim.timeStep / (2 * capacitance);
	else
	    compResistance = sim.timeStep / capacitance;
	sim.stampResistor(nodes[0], nodes[1], compResistance);
	sim.stampRightSide(nodes[0]);
	sim.stampRightSide(nodes[1]);
    }

    public void startIteration() {
	if (isTrapezoidal())
	    curSourceValue = -voltdiff / compResistance - current;
	else
	    curSourceValue = -voltdiff / compResistance;
    }

    void calculateCurrent() {
	double voltdiff = volts[0] - volts[1];
	// we check compResistance because this might get called
	// before stamp(), which sets compResistance, causing
	// infinite current
	if (compResistance > 0)
	    current = voltdiff / compResistance + curSourceValue;
    }

    double curSourceValue;

    public void doStep() {
	sim.stampCurrentSource(nodes[0], nodes[1], curSourceValue);
    }

    public void getInfo(String arr[]) {
	arr[0] = "capacitor";
	getBasicInfo(arr);
	arr[3] = "C = " + CircuitElementSupport.getUnitText(sim, capacitance, "F");
	arr[4] = "P = " + CircuitElementSupport.getUnitText(sim, getPower(), "W");
	// double v = getVoltageDiff();
	// arr[4] = "U = " + getUnitText(.5*capacitance*v*v, "J");
    }

    @Override
    public String getScopeText(int v) {
	return CirSim.LS("capacitor") + ", " + CircuitElementSupport.getUnitText(sim, capacitance, "F");
    }

    public EditInfo getEditInfo(int n) {
	if (n == 0)
	    return new EditInfo("Capacitance (F)", capacitance, 0, 0);
	if (n == 1) {
	    EditInfo ei = new EditInfo("", 0, -1, -1);
	    ei.checkbox = new Checkbox("Trapezoidal Approximation", isTrapezoidal());
	    return ei;
	}
	return null;
    }

    public void setEditValue(int n, EditInfo ei) {
	if (n == 0 && ei.value > 0)
	    capacitance = ei.value;
	if (n == 1) {
	    if (ei.checkbox.getState())
		flags &= ~FLAG_BACK_EULER;
	    else
		flags |= FLAG_BACK_EULER;
	}
    }

    public int getShortcut() {
	return 'c';
    }
}
