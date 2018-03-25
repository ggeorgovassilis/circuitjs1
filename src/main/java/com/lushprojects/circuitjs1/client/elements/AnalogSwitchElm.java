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

import com.lushprojects.circuitjs1.client.support.CircuitElementSupport;
import com.lushprojects.circuitjs1.client.support.StringTokenizer;
import com.lushprojects.circuitjs1.client.ui.Checkbox;
import com.lushprojects.circuitjs1.client.ui.EditInfo;
import com.lushprojects.circuitjs1.client.ui.Graphics;
import com.lushprojects.circuitjs1.client.ui.Point;

public class AnalogSwitchElm extends CircuitElm {
    final int FLAG_INVERT = 1;
    double resistance, r_on, r_off;

    public AnalogSwitchElm(int xx, int yy) {
	super(xx, yy);
	r_on = 20;
	r_off = 1e10;
    }

    public AnalogSwitchElm(int xa, int ya, int xb, int yb, int f, StringTokenizer st) {
	super(xa, ya, xb, yb, f);
	r_on = 20;
	r_off = 1e10;
	try {
	    r_on = new Double(st.nextToken()).doubleValue();
	    r_off = new Double(st.nextToken()).doubleValue();
	} catch (Exception e) {
	}

    }

    public String dump() {
	return super.dump() + " " + r_on + " " + r_off;
    }

    int getDumpType() {
	return 159;
    }

    boolean open;

    Point ps, point3, lead3;

    public void setPoints() {
	super.setPoints();
	calcLeads(32);
	ps = new Point();
	int openhs = 16;
	point3 = CircuitElementSupport.interpPoint(point1, point2, .5, -openhs);
	lead3 = CircuitElementSupport.interpPoint(point1, point2, .5, -openhs / 2);
    }

    public void draw(Graphics g) {
	int openhs = 16;
	int hs = (open) ? openhs : 0;
	setBbox(point1, point2, openhs);

	draw2Leads(g);

	g.setColor(sim.lightGrayColor);
	CircuitElementSupport.interpPoint(lead1, lead2, ps, 1, hs);
	CircuitElementSupport.drawThickLine(g, lead1, ps);

	setVoltageColor(g, volts[2]);
	CircuitElementSupport.drawThickLine(g, point3, lead3);

	if (!open)
	    doDots(g);
	drawPosts(g);
    }

    void calculateCurrent() {
	current = (volts[0] - volts[1]) / resistance;
    }

    // we need this to be able to change the matrix for each step
    public boolean nonLinear() {
	return true;
    }

    public void stamp() {
	sim.stampNonLinear(nodes[0]);
	sim.stampNonLinear(nodes[1]);
    }

    public void doStep() {
	open = (volts[2] < 2.5);
	if ((flags & FLAG_INVERT) != 0)
	    open = !open;
	resistance = (open) ? r_off : r_on;
	sim.stampResistor(nodes[0], nodes[1], resistance);
    }

    public void drag(int xx, int yy) {
	xx = sim.snapGrid(xx);
	yy = sim.snapGrid(yy);
	if (CircuitElementSupport.abs(x - xx) < CircuitElementSupport.abs(y - yy))
	    xx = x;
	else
	    yy = y;
	int q1 = CircuitElementSupport.abs(x - xx) + CircuitElementSupport.abs(y - yy);
	int q2 = (q1 / 2) % sim.gridSize;
	if (q2 != 0)
	    return;
	x2 = xx;
	y2 = yy;
	setPoints();
    }

    public int getPostCount() {
	return 3;
    }

    public Point getPost(int n) {
	return (n == 0) ? point1 : (n == 1) ? point2 : point3;
    }

    public void getInfo(String arr[]) {
	arr[0] = "analog switch";
	arr[1] = open ? "open" : "closed";
	arr[2] = "Vd = " + CircuitElementSupport.getVoltageDText(getVoltageDiff());
	arr[3] = "I = " + CircuitElementSupport.getCurrentDText(getCurrent());
	arr[4] = "Vc = " + CircuitElementSupport.getVoltageText(volts[2]);
    }

    // we have to just assume current will flow either way, even though that
    // might cause singular matrix errors
    public boolean getConnection(int n1, int n2) {
	if (n1 == 2 || n2 == 2)
	    return false;
	return true;
    }

    public EditInfo getEditInfo(int n) {
	if (n == 0) {
	    EditInfo ei = new EditInfo("", 0, -1, -1);
	    ei.checkbox = new Checkbox("Normally closed", (flags & FLAG_INVERT) != 0);
	    return ei;
	}
	if (n == 1)
	    return new EditInfo("On Resistance (ohms)", r_on, 0, 0);
	if (n == 2)
	    return new EditInfo("Off Resistance (ohms)", r_off, 0, 0);
	return null;
    }

    public void setEditValue(int n, EditInfo ei) {
	if (n == 0)
	    flags = (ei.checkbox.getState()) ? (flags | FLAG_INVERT) : (flags & ~FLAG_INVERT);
	if (n == 1 && ei.value > 0)
	    r_on = ei.value;
	if (n == 2 && ei.value > 0)
	    r_off = ei.value;
    }

    double getCurrentIntoNode(int n) {
	if (n == 2)
	    return 0;
	if (n == 0)
	    return -current;
	return current;
    }

    public double getCurrentIntoPoint(int xa, int ya) {
	if (xa == point3.x && ya == point3.y)
	    return 0;
	if (xa == x && ya == y)
	    return -current;
	return current;
    }
}
