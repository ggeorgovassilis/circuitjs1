package com.lushprojects.circuitjs1.client.elements;

import com.lushprojects.circuitjs1.client.support.StringTokenizer;
import com.lushprojects.circuitjs1.client.ui.Color;
import com.lushprojects.circuitjs1.client.ui.EditInfo;
import com.lushprojects.circuitjs1.client.ui.Graphics;
import com.lushprojects.circuitjs1.client.ui.Point;

public class PolarCapacitorElm extends CapacitorElm {
    double maxNegativeVoltage;

    public PolarCapacitorElm(int xx, int yy) {
	super(xx, yy);
	maxNegativeVoltage = 1;
    }

    public PolarCapacitorElm(int xa, int ya, int xb, int yb, int f, StringTokenizer st) {
	super(xa, ya, xb, yb, f, st);
	maxNegativeVoltage = new Double(st.nextToken()).doubleValue();
    }

    int getDumpType() {
	return 209;
    }

    public String dump() {
	return super.dump() + " " + maxNegativeVoltage;
    }

    Point plusPoint;

    public void setPoints() {
	super.setPoints();
	double f = (dn / 2 - 4) / dn;
	int i;
	platePoints = newPointArray(8);
	for (i = 0; i <= 7; i++) {
	    double q = (i - 3.5) / 3.5;
	    platePoints[i] = interpPoint(plate2[0], plate2[1], i / 7., 5 * (1 - Math.sqrt(1 - q * q)));
	}
	plusPoint = interpPoint(point1, point2, f - 8 / dn, -10 * dsign);
	if (y2 > y)
	    plusPoint.y += 4;
	if (y > y2)
	    plusPoint.y += 3;
    }

    public void draw(Graphics g) {
	super.draw(g);
	;
	g.setColor(Color.white);
	g.setFont(unitsFont);
	int w = (int) g.context.measureText("+").getWidth();
	;
	g.drawString("+", plusPoint.x - w / 2, plusPoint.y);
    }

    public void getInfo(String arr[]) {
	super.getInfo(arr);
	arr[0] = "capacitor (polarized)";
    }

    public EditInfo getEditInfo(int n) {
	if (n == 2)
	    return new EditInfo("Max Reverse Voltage", maxNegativeVoltage, 0, 0);
	return super.getEditInfo(n);
    }

    public void setEditValue(int n, EditInfo ei) {
	if (n == 2 && ei.value >= 0)
	    maxNegativeVoltage = ei.value;
	super.setEditValue(n, ei);
    }

    public void stepFinished() {
	if (getVoltageDiff() < 0 && getVoltageDiff() < -maxNegativeVoltage)
	    sim.stop("capacitor exceeded max reverse voltage", this);
    }

    public int getShortcut() {
	return 'C';
    }
}
