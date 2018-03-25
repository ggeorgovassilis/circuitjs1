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
import com.lushprojects.circuitjs1.client.ui.EditInfo;
import com.lushprojects.circuitjs1.client.ui.Graphics;
import com.lushprojects.circuitjs1.client.ui.Point;
import com.lushprojects.circuitjs1.client.ui.Polygon;

public class JfetElm extends MosfetElm {
    Diode diode;
    double gateCurrent;

    JfetElm(int xx, int yy, boolean pnpflag) {
	super(xx, yy, pnpflag);
	noDiagonal = true;
	diode = new Diode(sim);
	diode.setup(.8, 0);
    }

    public JfetElm(int xa, int ya, int xb, int yb, int f, StringTokenizer st) {
	super(xa, ya, xb, yb, f, st);
	noDiagonal = true;
	diode = new Diode(sim);
	diode.setup(.8, 0);
    }

    public void reset() {
	super.reset();
	diode.reset();
    }

    Polygon gatePoly;
    Polygon arrowPoly;
    Point gatePt;
    double curcountg, curcounts, curcountd;

    public void draw(Graphics g) {
	setBbox(point1, point2, hs);
	setVoltageColor(g, volts[1]);
	CircuitElementSupport.drawThickLine(g, src[0], src[1]);
	CircuitElementSupport.drawThickLine(g, src[1], src[2]);
	setVoltageColor(g, volts[2]);
	CircuitElementSupport.drawThickLine(g, drn[0], drn[1]);
	CircuitElementSupport.drawThickLine(g, drn[1], drn[2]);
	setVoltageColor(g, volts[0]);
	CircuitElementSupport.drawThickLine(g, point1, gatePt);
	g.fillPolygon(arrowPoly);
	setPowerColor(g, true);
	g.fillPolygon(gatePoly);
	curcountd = updateDotCount(-ids, curcountd);
	curcountg = updateDotCount(gateCurrent, curcountg);
	curcounts = updateDotCount(-gateCurrent - ids, curcounts);
	if (curcountd != 0 || curcounts != 0) {
	    drawDots(g, src[0], src[1], curcounts);
	    drawDots(g, src[1], src[2], curcounts + 8);
	    drawDots(g, drn[0], drn[1], -curcountd);
	    drawDots(g, drn[1], drn[2], -(curcountd + 8));
	    drawDots(g, point1, gatePt, curcountg);
	}
	drawPosts(g);
    }

    public double getCurrentIntoPoint(int xa, int ya) {
	if (xa == x && ya == y)
	    return -gateCurrent;
	if (xa == src[0].x && ya == src[0].y)
	    return gateCurrent + ids;
	return -ids;
    }

    public void setPoints() {
	super.setPoints();

	// find the coordinates of the various points we need to draw
	// the JFET.
	int hs2 = hs * dsign;
	src = CircuitElementSupport.newPointArray(3);
	drn = CircuitElementSupport.newPointArray(3);
	CircuitElementSupport.interpPoint2(point1, point2, src[0], drn[0], 1, -hs2);
	CircuitElementSupport.interpPoint2(point1, point2, src[1], drn[1], 1, -hs2 / 2);
	CircuitElementSupport.interpPoint2(point1, point2, src[2], drn[2], 1 - 10 / dn, -hs2 / 2);

	gatePt = interpPoint(point1, point2, 1 - 14 / dn);

	Point ra[] = CircuitElementSupport.newPointArray(4);
	CircuitElementSupport.interpPoint2(point1, point2, ra[0], ra[1], 1 - 13 / dn, hs);
	CircuitElementSupport.interpPoint2(point1, point2, ra[2], ra[3], 1 - 10 / dn, hs);
	gatePoly = CircuitElementSupport.createPolygon(ra[0], ra[1], ra[3], ra[2]);
	if (pnp == -1) {
	    Point x = interpPoint(gatePt, point1, 18 / dn);
	    arrowPoly = CircuitElementSupport.calcArrow(gatePt, x, 8, 3);
	} else
	    arrowPoly = CircuitElementSupport.calcArrow(point1, gatePt, 8, 3);
    }

    public void stamp() {
	super.stamp();
	if (pnp < 0)
	    diode.stamp(nodes[1], nodes[0]);
	else
	    diode.stamp(nodes[0], nodes[1]);
    }

    public void doStep() {
	super.doStep();
	diode.doStep(pnp * (volts[0] - volts[1]));
    }

    void calculateCurrent() {
	gateCurrent = pnp * diode.calculateCurrent(pnp * (volts[0] - volts[1]));
    }

    int getDumpType() {
	return 'j';
    }

    // these values are taken from Hayes+Horowitz p155
    double getDefaultThreshold() {
	return -4;
    }

    double getDefaultBeta() {
	return .00125;
    }

    public void getInfo(String arr[]) {
	getFetInfo(arr, "JFET");
    }

    public EditInfo getEditInfo(int n) {
	if (n < 2)
	    return super.getEditInfo(n);
	return null;
    }

    public boolean getConnection(int n1, int n2) {
	return true;
    }

    @Override
    public String getScopeText(int v) {
	return CirSim.LS(((pnp == -1) ? "p-" : "n-") + "JFET");
    }
}
