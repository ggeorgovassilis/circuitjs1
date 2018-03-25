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

import com.google.gwt.canvas.dom.client.CanvasGradient;
import com.google.gwt.canvas.dom.client.Context2d.LineCap;
import com.lushprojects.circuitjs1.client.CirSim;
import com.lushprojects.circuitjs1.client.dialogs.Editable;
import com.lushprojects.circuitjs1.client.support.CircuitElementSupport;
import com.lushprojects.circuitjs1.client.ui.Color;
import com.lushprojects.circuitjs1.client.ui.EditInfo;
import com.lushprojects.circuitjs1.client.ui.Graphics;
import com.lushprojects.circuitjs1.client.ui.Point;
import com.lushprojects.circuitjs1.client.ui.Polygon;
import com.lushprojects.circuitjs1.client.ui.Rectangle;
import com.lushprojects.circuitjs1.client.ui.Scope;

// circuit element class
public abstract class CircuitElm implements Editable {
    public static CirSim sim;

    static final double pi = 3.14159265358979323846;

    public int x, y, x2, y2, flags, nodes[], voltSource;
    int dx, dy, dsign;
    int lastHandleGrabbed = -1;
    int numHandles = 2;
    double dn, dpx1, dpy1;
    Point point1, point2, lead1, lead2;
    double volts[];
    double current, curcount;
    public Rectangle boundingBox;
    boolean noDiagonal;
    public boolean selected;
    private boolean iAmMouseElm = false;

    // abstract int getDumpType();

    int getDumpType() {
	throw new IllegalStateException(); // Seems necessary to work-around what appears to be a compiler
	// bug affecting OTAElm to make sure this method (which should really be
	// abstract) throws
	// an exception
    }

    public Class<? extends CircuitElm> getDumpClass() {
	return getClass();
    }

    int getDefaultFlags() {
	return 0;
    }

    public static void initClass(CirSim s) {
	sim = s;
    }


    CircuitElm(int xx, int yy) {
	x = x2 = xx;
	y = y2 = yy;
	flags = getDefaultFlags();
	allocNodes();
	initBoundingBox();
    }

    CircuitElm(int xa, int ya, int xb, int yb, int f) {
	x = xa;
	y = ya;
	x2 = xb;
	y2 = yb;
	flags = f;
	allocNodes();
	initBoundingBox();
    }

    void initBoundingBox() {
	boundingBox = new Rectangle();
	boundingBox.setBounds(min(x, x2), min(y, y2), abs(x2 - x) + 1, abs(y2 - y) + 1);
    }

    void allocNodes() {
	int n = getPostCount() + getInternalNodeCount();
	// preserve voltages if possible
	if (nodes == null || nodes.length != n) {
	    nodes = new int[n];
	    volts = new double[n];
	}
    }

    public String dump() {
	int t = getDumpType();
	return (t < 127 ? ((char) t) + " " : t + " ") + x + " " + y + " " + x2 + " " + y2 + " " + flags;
    }

    public void reset() {
	int i;
	for (i = 0; i != getPostCount() + getInternalNodeCount(); i++)
	    volts[i] = 0;
	curcount = 0;
    }

    public void draw(Graphics g) {
    }

    public void setCurrent(int x, double c) {
	current = c;
    }

    public double getCurrent() {
	return current;
    }

    public void doStep() {
    }

    public void delete() {
    }

    public void startIteration() {
    }

    public double getPostVoltage(int x) {
	return volts[x];
    }

    public void setNodeVoltage(int n, double c) {
	volts[n] = c;
	calculateCurrent();
    }

    void calculateCurrent() {
    }

    public void setPoints() {
	dx = x2 - x;
	dy = y2 - y;
	dn = Math.sqrt(dx * dx + dy * dy);
	dpx1 = dy / dn;
	dpy1 = -dx / dn;
	dsign = (dy == 0) ? sign(dx) : sign(dy);
	point1 = new Point(x, y);
	point2 = new Point(x2, y2);
    }

    void calcLeads(int len) {
	if (dn < len || len == 0) {
	    lead1 = point1;
	    lead2 = point2;
	    return;
	}
	lead1 = interpPoint(point1, point2, (dn - len) / (2 * dn));
	lead2 = interpPoint(point1, point2, (dn + len) / (2 * dn));
    }

    Point interpPoint(Point a, Point b, double f) {
	Point p = new Point();
	interpPoint(a, b, p, f);
	return p;
    }

    void interpPoint(Point a, Point b, Point c, double f) {
	/*
	 * double q = (a.x*(1-f)+b.x*f+.48); System.out.println(q + " " + (int) q);
	 */
	c.x = (int) Math.floor(a.x * (1 - f) + b.x * f + .48);
	c.y = (int) Math.floor(a.y * (1 - f) + b.y * f + .48);
    }

    void interpPoint(Point a, Point b, Point c, double f, double g) {
	// int xpd = b.x-a.x;
	// int ypd = b.y-a.y;
	int gx = b.y - a.y;
	int gy = a.x - b.x;
	g /= Math.sqrt(gx * gx + gy * gy);
	c.x = (int) Math.floor(a.x * (1 - f) + b.x * f + g * gx + .48);
	c.y = (int) Math.floor(a.y * (1 - f) + b.y * f + g * gy + .48);
    }

    /**
     * Returns a point fraction f along the line between a and b and offset
     * perpendicular by g
     * 
     * @param a
     *            1st Point
     * @param b
     *            2nd Point
     * @param f
     *            Fraction along line
     * @param g
     *            Fraction perpendicular to line
     * @return Interpolated point
     */
    Point interpPoint(Point a, Point b, double f, double g) {
	Point p = new Point();
	interpPoint(a, b, p, f, g);
	return p;
    }

    /**
     * Calculates two points fraction f along the line between a and b and offest
     * perpendicular by +/-g
     * 
     * @param a
     *            1st point (In)
     * @param b
     *            2nd point (In)
     * @param c
     *            1st point (Out)
     * @param d
     *            2nd point (Out)
     * @param f
     *            Fraction along line
     * @param g
     *            Fraction perpendicular to line
     */
    void interpPoint2(Point a, Point b, Point c, Point d, double f, double g) {
	// int xpd = b.x-a.x;
	// int ypd = b.y-a.y;
	int gx = b.y - a.y;
	int gy = a.x - b.x;
	g /= Math.sqrt(gx * gx + gy * gy);
	c.x = (int) Math.floor(a.x * (1 - f) + b.x * f + g * gx + .48);
	c.y = (int) Math.floor(a.y * (1 - f) + b.y * f + g * gy + .48);
	d.x = (int) Math.floor(a.x * (1 - f) + b.x * f - g * gx + .48);
	d.y = (int) Math.floor(a.y * (1 - f) + b.y * f - g * gy + .48);
    }

    void draw2Leads(Graphics g) {
	// draw first lead
	setVoltageColor(g, volts[0]);
	CircuitElementSupport.drawThickLine(g, point1, lead1);

	// draw second lead
	setVoltageColor(g, volts[1]);
	CircuitElementSupport.drawThickLine(g, lead2, point2);
    }

    Point[] newPointArray(int n) {
	Point a[] = new Point[n];
	while (n > 0)
	    a[--n] = new Point();
	return a;
    }

    void drawDots(Graphics g, Point pa, Point pb, double pos) {
	if ((!sim.simIsRunning()) || pos == 0 || !sim.dotsCheckItem.getState())
	    return;
	int dx = pb.x - pa.x;
	int dy = pb.y - pa.y;
	double dn = Math.sqrt(dx * dx + dy * dy);
	g.setColor(sim.conventionCheckItem.getState() ? Color.yellow : Color.cyan);
	int ds = 16;
	pos %= ds;
	if (pos < 0)
	    pos += ds;
	double di = 0;
	for (di = pos; di < dn; di += ds) {
	    int x0 = (int) (pa.x + di * dx / dn);
	    int y0 = (int) (pa.y + di * dy / dn);
	    g.fillRect(x0 - 2, y0 - 2, 4, 4);
	}
    }

    Polygon calcArrow(Point a, Point b, double al, double aw) {
	Polygon poly = new Polygon();
	Point p1 = new Point();
	Point p2 = new Point();
	int adx = b.x - a.x;
	int ady = b.y - a.y;
	double l = Math.sqrt(adx * adx + ady * ady);
	poly.addPoint(b.x, b.y);
	interpPoint2(a, b, p1, p2, 1 - al / l, aw);
	poly.addPoint(p1.x, p1.y);
	poly.addPoint(p2.x, p2.y);
	return poly;
    }

    Polygon createPolygon(Point a, Point b, Point c) {
	Polygon p = new Polygon();
	p.addPoint(a.x, a.y);
	p.addPoint(b.x, b.y);
	p.addPoint(c.x, c.y);
	return p;
    }

    Polygon createPolygon(Point a, Point b, Point c, Point d) {
	Polygon p = new Polygon();
	p.addPoint(a.x, a.y);
	p.addPoint(b.x, b.y);
	p.addPoint(c.x, c.y);
	p.addPoint(d.x, d.y);
	return p;
    }

    Polygon createPolygon(Point a[]) {
	Polygon p = new Polygon();
	int i;
	for (i = 0; i != a.length; i++)
	    p.addPoint(a[i].x, a[i].y);
	return p;
    }

    public void drag(int xx, int yy) {
	xx = sim.snapGrid(xx);
	yy = sim.snapGrid(yy);
	if (noDiagonal) {
	    if (Math.abs(x - xx) < Math.abs(y - yy)) {
		xx = x;
	    } else {
		yy = y;
	    }
	}
	x2 = xx;
	y2 = yy;
	setPoints();
    }

    public void move(int dx, int dy) {
	x += dx;
	y += dy;
	x2 += dx;
	y2 += dy;
	boundingBox.translate(dx, dy);
	setPoints();
    }

    // called when an element is done being dragged out; returns true if it's zero
    // size and should be deleted
    public boolean creationFailed() {
	return (x == x2 && y == y2);
    }

    // determine if moving this element by (dx,dy) will put it on top of another
    // element
    public boolean allowMove(int dx, int dy) {
	int nx = x + dx;
	int ny = y + dy;
	int nx2 = x2 + dx;
	int ny2 = y2 + dy;
	int i;
	for (i = 0; i != sim.elmList.size(); i++) {
	    CircuitElm ce = sim.getElm(i);
	    if (ce.x == nx && ce.y == ny && ce.x2 == nx2 && ce.y2 == ny2)
		return false;
	    if (ce.x == nx2 && ce.y == ny2 && ce.x2 == nx && ce.y2 == ny)
		return false;
	}
	return true;
    }

    public void movePoint(int n, int dx, int dy) {
	// modified by IES to prevent the user dragging points to create zero sized
	// nodes
	// that then render improperly
	int oldx = x;
	int oldy = y;
	int oldx2 = x2;
	int oldy2 = y2;
	if (n == 0) {
	    x += dx;
	    y += dy;
	} else {
	    x2 += dx;
	    y2 += dy;
	}
	if (x == x2 && y == y2) {
	    x = oldx;
	    y = oldy;
	    x2 = oldx2;
	    y2 = oldy2;
	}
	setPoints();
    }

    void drawPosts(Graphics g) {
	// we normally do this in updateCircuit() now because the logic is more
	// complicated.
	// we only handle the case where we have to draw all the posts. That happens
	// when
	// this element is selected or is being created
	if (sim.dragElm == null && !needsHighlight())
	    return;
	if (sim.mouseMode == CirSim.MODE_DRAG_ROW || sim.mouseMode == CirSim.MODE_DRAG_COLUMN)
	    return;
	int i;
	for (i = 0; i != getPostCount(); i++) {
	    Point p = getPost(i);
	    CircuitElementSupport.drawPost(g, p);
	}
    }

    public void drawHandles(Graphics g, Color c) {
	g.setColor(c);
	if (lastHandleGrabbed == -1)
	    g.fillRect(x - 3, y - 3, 7, 7);
	else if (lastHandleGrabbed == 0)
	    g.fillRect(x - 4, y - 4, 9, 9);
	if (numHandles == 2) {
	    if (lastHandleGrabbed == -1)
		g.fillRect(x2 - 3, y2 - 3, 7, 7);
	    else if (lastHandleGrabbed == 1)
		g.fillRect(x2 - 4, y2 - 4, 9, 9);
	}
    }

    public int getHandleGrabbedClose(int xtest, int ytest, int deltaSq, int minSize) {
	lastHandleGrabbed = -1;
	if (Graphics.distanceSq(x, y, x2, y2) >= minSize) {
	    if (Graphics.distanceSq(x, y, xtest, ytest) <= deltaSq)
		lastHandleGrabbed = 0;
	    else if (Graphics.distanceSq(x2, y2, xtest, ytest) <= deltaSq)
		lastHandleGrabbed = 1;
	}
	return lastHandleGrabbed;
    }

    public void stamp() {
    }

    public int getVoltageSourceCount() {
	return 0;
    }

    public int getInternalNodeCount() {
	return 0;
    }

    public void setNode(int p, int n) {
	nodes[p] = n;
    }

    public void setVoltageSource(int n, int v) {
	voltSource = v;
    }

    // int getVoltageSource() { return voltSource; } // Never used
    double getVoltageDiff() {
	return volts[0] - volts[1];
    }

    public boolean nonLinear() {
	return false;
    }

    public int getPostCount() {
	return 2;
    }

    public int getNode(int n) {
	return nodes[n];
    }

    public Point getPost(int n) {
	return (n == 0) ? point1 : (n == 1) ? point2 : null;
    }

    // set/adjust bounding box used for selecting elements. getCircuitBounds() does
    // not use this!
    void setBbox(int x1, int y1, int x2, int y2) {
	if (x1 > x2) {
	    int q = x1;
	    x1 = x2;
	    x2 = q;
	}
	if (y1 > y2) {
	    int q = y1;
	    y1 = y2;
	    y2 = q;
	}
	boundingBox.setBounds(x1, y1, x2 - x1 + 1, y2 - y1 + 1);
    }

    void setBbox(Point p1, Point p2, double w) {
	setBbox(p1.x, p1.y, p2.x, p2.y);
	int dpx = (int) (dpx1 * w);
	int dpy = (int) (dpy1 * w);
	adjustBbox(p1.x + dpx, p1.y + dpy, p1.x - dpx, p1.y - dpy);
    }

    void adjustBbox(int x1, int y1, int x2, int y2) {
	if (x1 > x2) {
	    int q = x1;
	    x1 = x2;
	    x2 = q;
	}
	if (y1 > y2) {
	    int q = y1;
	    y1 = y2;
	    y2 = q;
	}
	x1 = min(boundingBox.x, x1);
	y1 = min(boundingBox.y, y1);
	x2 = max(boundingBox.x + boundingBox.width, x2);
	y2 = max(boundingBox.y + boundingBox.height, y2);
	boundingBox.setBounds(x1, y1, x2 - x1, y2 - y1);
    }

    void adjustBbox(Point p1, Point p2) {
	adjustBbox(p1.x, p1.y, p2.x, p2.y);
    }

    public boolean isCenteredText() {
	return false;
    }

    void drawCenteredText(Graphics g, String s, int x, int y, boolean cx) {
	int w = (int) g.context.measureText(s).getWidth();
	int h2 = (int) g.currentFontSize / 2;
	g.context.save();
	g.context.setTextBaseline("middle");
	if (cx) {
	    g.context.setTextAlign("center");
	    adjustBbox(x - w / 2, y - h2, x + w / 2, y + h2);
	} else {
	    adjustBbox(x, y - h2, x + w, y + h2);
	}

	if (cx)
	    g.context.setTextAlign("center");
	g.drawString(s, x, y);
	g.context.restore();
    }

    void drawValues(Graphics g, String s, double hs) {
	if (s == null)
	    return;
	g.setFont(sim.unitsFont);
	// FontMetrics fm = g.getFontMetrics();
	int w = (int) g.context.measureText(s).getWidth();
	;
	g.setColor(sim.whiteColor);
	int ya = (int) g.currentFontSize / 2;
	int xc, yc;
	if (this instanceof RailElm || this instanceof SweepElm) {
	    xc = x2;
	    yc = y2;
	} else {
	    xc = (x2 + x) / 2;
	    yc = (y2 + y) / 2;
	}
	int dpx = (int) (dpx1 * hs);
	int dpy = (int) (dpy1 * hs);
	if (dpx == 0)
	    g.drawString(s, xc - w / 2, yc - abs(dpy) - 2);
	else {
	    int xx = xc + abs(dpx) + 2;
	    if (this instanceof VoltageElm || (x < x2 && y > y2))
		xx = xc - (w + abs(dpx) + 2);
	    g.drawString(s, xx, yc + dpy + ya);
	}
    }

    void drawCoil(Graphics g, int hs, Point p1, Point p2, double v1, double v2) {
	double len = distance(p1, p2);

	g.context.save();
	g.context.setLineWidth(3.0);
	g.context.transform(((double) (p2.x - p1.x)) / len, ((double) (p2.y - p1.y)) / len,
		-((double) (p2.y - p1.y)) / len, ((double) (p2.x - p1.x)) / len, p1.x, p1.y);
	CanvasGradient grad = g.context.createLinearGradient(0, 0, len, 0);
	grad.addColorStop(0, getVoltageColor(g, v1).getHexValue());
	grad.addColorStop(1.0, getVoltageColor(g, v2).getHexValue());
	g.context.setStrokeStyle(grad);
	g.context.setLineCap(LineCap.ROUND);
	if (len > 24)
	    g.context.scale(1, hs / (len / 6));
	else
	    g.context.scale(1, hs > 0 ? 1 : -1);

	int loop;
	for (loop = 0; loop != 3; loop++) {
	    g.context.beginPath();
	    double start = len * loop / 3;
	    g.context.moveTo(start, 0);
	    g.context.arc(len * (loop + .5) / 3, 0, len / 6, Math.PI, Math.PI * 2);
	    g.context.lineTo(len * (loop + 1) / 3, 0);
	    g.context.stroke();
	}

	g.context.restore();
    }

    Polygon getSchmittPolygon(float gsize, float ctr) {
	Point pts[] = newPointArray(6);
	float hs = 3 * gsize;
	float h1 = 3 * gsize;
	float h2 = h1 * 2;
	double len = distance(lead1, lead2);
	pts[0] = interpPoint(lead1, lead2, ctr - h2 / len, hs);
	pts[1] = interpPoint(lead1, lead2, ctr + h1 / len, hs);
	pts[2] = interpPoint(lead1, lead2, ctr + h1 / len, -hs);
	pts[3] = interpPoint(lead1, lead2, ctr + h2 / len, -hs);
	pts[4] = interpPoint(lead1, lead2, ctr - h1 / len, -hs);
	pts[5] = interpPoint(lead1, lead2, ctr - h1 / len, hs);
	return createPolygon(pts);
    }

    public void updateDotCount() {
	curcount = updateDotCount(current, curcount);
    }

    double updateDotCount(double cur, double cc) {

	if (!sim.simIsRunning())
	    return cc;
	double cadd = cur * sim.currentMult;
	/*
	 * if (cur != 0 && cadd <= .05 && cadd >= -.05) cadd = (cadd < 0) ? -.05 : .05;
	 */
	cadd %= 8;
	/*
	 * if (cadd > 8) cadd = 8; if (cadd < -8) cadd = -8;
	 */
	return cc + cadd;
    }

    void doDots(Graphics g) {
	updateDotCount();
	if (sim.dragElm != this)
	    drawDots(g, point1, point2, curcount);
    }

    void doAdjust() {
    }

    void setupAdjust() {
    }

    public void getInfo(String arr[]) {
    }

    int getBasicInfo(String arr[]) {
	arr[1] = "I = " + CircuitElementSupport.getCurrentDText(getCurrent());
	arr[2] = "Vd = " + CircuitElementSupport.getVoltageDText(getVoltageDiff());
	return 3;
    }

    public String getScopeText(int v) {
	String info[] = new String[10];
	getInfo(info);
	return info[0];
    }

    Color getVoltageColor(Graphics g, double volts) {
	if (needsHighlight()) {
	    return (sim.selectColor);
	}
	if (!sim.voltsCheckItem.getState()) {
	    if (!sim.powerCheckItem.getState()) // && !conductanceCheckItem.getState())
		return (sim.whiteColor);
	    return (g.lastColor);
	}
	int c = (int) ((volts + sim.voltageRange) * (sim.colorScaleCount - 1) / (sim.voltageRange * 2));
	if (c < 0)
	    c = 0;
	if (c >= sim.colorScaleCount)
	    c = sim.colorScaleCount - 1;
	return (sim.colorScale[c]);
    }

    void setVoltageColor(Graphics g, double volts) {
	g.setColor(getVoltageColor(g, volts));
    }

    void setPowerColor(Graphics g, boolean yellow) {
	/*
	 * if (conductanceCheckItem.getState()) { setConductanceColor(g,
	 * current/getVoltageDiff()); return; }
	 */
	if (!sim.powerCheckItem.getState() || needsHighlight())
	    return;
	setPowerColor(g, getPower());
    }

    void setPowerColor(Graphics g, double w0) {
	if (!sim.powerCheckItem.getState() || needsHighlight())
	    return;
	w0 *= sim.powerMult;
	// System.out.println(w);
	int i = (int) ((sim.colorScaleCount / 2) + (sim.colorScaleCount / 2) * -w0);
	if (i < 0)
	    i = 0;
	if (i >= sim.colorScaleCount)
	    i = sim.colorScaleCount - 1;
	g.setColor(sim.colorScale[i]);
    }

    void setConductanceColor(Graphics g, double w0) {
	w0 *= sim.powerMult;
	// System.out.println(w);
	double w = (w0 < 0) ? -w0 : w0;
	if (w > 1)
	    w = 1;
	int rg = (int) (w * 255);
	g.setColor(new Color(rg, rg, rg));
    }

    double getPower() {
	return getVoltageDiff() * current;
    }

    public double getScopeValue(int x) {
	return (x == Scope.VAL_CURRENT) ? getCurrent() : (x == Scope.VAL_POWER) ? getPower() : getVoltageDiff();
    }

    public int getScopeUnits(int x) {
	return (x == Scope.VAL_CURRENT) ? Scope.UNITS_A : (x == Scope.VAL_POWER) ? Scope.UNITS_W : Scope.UNITS_V;
    }

    public EditInfo getEditInfo(int n) {
	return null;
    }

    public void setEditValue(int n, EditInfo ei) {
    }

    // get number of nodes that can be retrieved by getConnectionNode()
    public int getConnectionNodeCount() {
	return getPostCount();
    }

    // get nodes that can be passed to getConnection(), to test if this element
    // connects
    // those two nodes; this is the same as getNode() for all but labeled nodes.
    public int getConnectionNode(int n) {
	return getNode(n);
    }

    // are n1 and n2 connected by this element? this is used to determine
    // unconnected nodes, and look for loops
    public boolean getConnection(int n1, int n2) {
	return true;
    }

    // is n1 connected to ground somehow?
    public boolean hasGroundConnection(int n1) {
	return false;
    }

    public boolean isWire() {
	return false;
    }

    public boolean canViewInScope() {
	return getPostCount() <= 2;
    }

    boolean comparePair(int x1, int x2, int y1, int y2) {
	return ((x1 == y1 && x2 == y2) || (x1 == y2 && x2 == y1));
    }

    public boolean needsHighlight() {
	return iAmMouseElm || selected || sim.plotYElm == this;
    }

    public boolean isSelected() {
	return selected;
    }

    public boolean canShowValueInScope(int v) {
	return false;
    }

    public void setSelected(boolean x) {
	selected = x;
    }

    public void selectRect(Rectangle r) {
	selected = r.intersects(boundingBox);
    }

    static int abs(int x) {
	return x < 0 ? -x : x;
    }

    static int sign(int x) {
	return (x < 0) ? -1 : (x == 0) ? 0 : 1;
    }

    static int min(int a, int b) {
	return (a < b) ? a : b;
    }

    static int max(int a, int b) {
	return (a > b) ? a : b;
    }

    static double distance(Point p1, Point p2) {
	double x = p1.x - p2.x;
	double y = p1.y - p2.y;
	return Math.sqrt(x * x + y * y);
    }

    public Rectangle getBoundingBox() {
	return boundingBox;
    }

    public boolean needsShortcut() {
	return getShortcut() > 0;
    }

    public int getShortcut() {
	return 0;
    }

    boolean isGraphicElmt() {
	return false;
    }

    public void setMouseElm(boolean v) {
	iAmMouseElm = v;
    }

    public void draggingDone() {
    }

    public boolean isMouseElm() {
	return iAmMouseElm;
    }

    public void updateModels() {
    }

    public void stepFinished() {
    }

    // Sadly not all elements override this routine to set it correctly.
    // If you depend on it (eg if you have a compositeElement) then check it is
    // implemented correctly in
    // all relevant element types.
    //
    // In general it would be better if the future standard was to define
    // getCurrentIntoNode for
    // each element and then to define getCurrentIntoPoint to map the point to the
    // node and then
    // call getCurrentIntoNode
    double getCurrentIntoNode(int n) {
	if (n == 0 && getPostCount() == 2)
	    return -current;
	else
	    return current;
    }

    public double getCurrentIntoPoint(int xa, int ya) {
	if (xa == x && ya == y && getPostCount() == 2)
	    return -current;
	// if ((xa == x2 && ya == y2) || getPostCount() == 1)
	// return current;
	// sim.stop("bad current into point", this); // for debugging
	return current;
    }

    public void flipPosts() {
	int oldx = x;
	int oldy = y;
	x = x2;
	y = y2;
	x2 = oldx;
	y2 = oldy;
	setPoints();
    }
}
