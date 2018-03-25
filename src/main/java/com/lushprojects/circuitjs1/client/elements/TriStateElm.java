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
import com.lushprojects.circuitjs1.client.ui.EditInfo;
import com.lushprojects.circuitjs1.client.ui.Graphics;
import com.lushprojects.circuitjs1.client.ui.Point;
import com.lushprojects.circuitjs1.client.ui.Polygon;

// contributed by Edward Calver

public class TriStateElm extends CircuitElm {
    double resistance, r_on, r_off;

    public TriStateElm(int xx, int yy) {
	super(xx, yy);
	r_on = 0.1;
	r_off = 1e10;
    }

    public TriStateElm(int xa, int ya, int xb, int yb, int f, StringTokenizer st) {
	super(xa, ya, xb, yb, f);
	r_on = 0.1;
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
	return 180;
    }

    boolean open;

    Point ps, point3, lead3;

    Polygon gatePoly;

    public void setPoints() {
	super.setPoints();
	calcLeads(32);
	ps = new Point();
	int hs = 16;

	int ww = 16;
	if (ww > dn / 2)
	    ww = (int) (dn / 2);
	Point triPoints[] = CircuitElementSupport.newPointArray(3);
	CircuitElementSupport.interpPoint2(lead1, lead2, triPoints[0], triPoints[1], 0, hs + 2);
	triPoints[2] = interpPoint(point1, point2, .5 + (ww - 2) / dn);
	gatePoly = CircuitElementSupport.createPolygon(triPoints);

	point3 = CircuitElementSupport.interpPoint(point1, point2, .5, -hs);
	lead3 = CircuitElementSupport.interpPoint(point1, point2, .5, -hs / 2);
    }

    public void draw(Graphics g) {
	int hs = 16;
	setBbox(point1, point2, hs);

	draw2Leads(g);

	g.setColor(sim.lightGrayColor);
	CircuitElementSupport.drawThickPolygon(g, gatePoly);
	setVoltageColor(g, volts[2]);
	CircuitElementSupport.drawThickLine(g, point3, lead3);
	curcount = updateDotCount(current, curcount);
	drawDots(g, lead2, point2, curcount);
	drawPosts(g);
    }

    void calculateCurrent() {
	current = (volts[0] - volts[1]) / resistance;
    }

    public double getCurrentIntoPoint(int xa, int ya) {
	if (xa == x2 && ya == y2)
	    return current;
	return 0;
    }

    // we need this to be able to change the matrix for each step
    public boolean nonLinear() {
	return true;
    }

    public void stamp() {
	sim.stampVoltageSource(0, nodes[3], voltSource);
	sim.stampNonLinear(nodes[3]);
	sim.stampNonLinear(nodes[1]);
    }

    public void doStep() {
	open = (volts[2] < 2.5);
	resistance = (open) ? r_off : r_on;
	sim.stampResistor(nodes[3], nodes[1], resistance);
	sim.updateVoltageSource(0, nodes[3], voltSource, volts[0] > 2.5 ? 5 : 0);
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

    public int getInternalNodeCount() {
	return 1;
    }

    public int getVoltageSourceCount() {
	return 1;
    }

    public Point getPost(int n) {
	return (n == 0) ? point1 : (n == 1) ? point2 : point3;
    }

    public void getInfo(String arr[]) {
	arr[0] = "tri-state buffer";
	arr[1] = open ? "open" : "closed";
	arr[2] = "Vd = " + CircuitElementSupport.getVoltageDText(sim, getVoltageDiff());
	arr[3] = "I = " + CircuitElementSupport.getCurrentDText(sim, getCurrent());
	arr[4] = "Vc = " + CircuitElementSupport.getVoltageText(sim, volts[2]);
    }

    // there is no current path through the input, but there
    // is an indirect path through the output to ground.
    public boolean getConnection(int n1, int n2) {
	return false;
    }

    public boolean hasGroundConnection(int n1) {
	return (n1 == 1);
    }

    public EditInfo getEditInfo(int n) {

	if (n == 0)
	    return new EditInfo("On Resistance (ohms)", r_on, 0, 0);
	if (n == 1)
	    return new EditInfo("Off Resistance (ohms)", r_off, 0, 0);
	return null;
    }

    public void setEditValue(int n, EditInfo ei) {

	if (n == 0 && ei.value > 0)
	    r_on = ei.value;
	if (n == 1 && ei.value > 0)
	    r_off = ei.value;
    }
}