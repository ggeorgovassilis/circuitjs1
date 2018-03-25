package com.lushprojects.circuitjs1.client.support;

import com.google.gwt.i18n.client.NumberFormat;
import com.lushprojects.circuitjs1.client.CirSim;
import com.lushprojects.circuitjs1.client.elements.CircuitElm;
import com.lushprojects.circuitjs1.client.ui.Graphics;
import com.lushprojects.circuitjs1.client.ui.Point;
import com.lushprojects.circuitjs1.client.ui.Polygon;

public class CircuitElementSupport {

    public static String myGetUnitText(double v, String u, boolean sf) {
        NumberFormat s;
        String sp = "";
        if (sf)
            s = CircuitElm.sim.shortFormat;
        else {
            s = CircuitElm.sim.showFormat;
            sp = " ";
        }
        double va = Math.abs(v);
        if (va < 1e-14)
            // this used to return null, but then wires would display "null" with 0V
            return "0" + sp + u;
        if (va < 1e-9)
            return s.format(v * 1e12) + sp + "p" + u;
        if (va < 1e-6)
            return s.format(v * 1e9) + sp + "n" + u;
        if (va < 1e-3)
            return s.format(v * 1e6) + sp + CirSim.muString + u;
        if (va < 1)
            return s.format(v * 1e3) + sp + "m" + u;
        if (va < 1e3)
            return s.format(v) + sp + u;
        if (va < 1e6)
            return s.format(v * 1e-3) + sp + "k" + u;
        if (va < 1e9)
            return s.format(v * 1e-6) + sp + "M" + u;
        return s.format(v * 1e-9) + sp + "G" + u;
    }

    public static String getCurrentText(double i) {
        return CircuitElementSupport.getUnitText(i, "A");
    }

    public static String getCurrentDText(double i) {
        return CircuitElementSupport.getUnitText(Math.abs(i), "A");
    }

    public static String getShortUnitText(double v, String u) {
        return myGetUnitText(v, u, true);
    }

    // IES - hacking
    public static String getUnitText(double v, String u) {
        return myGetUnitText(v, u, false);
    }

    public static String getVoltageText(double v) {
        return getUnitText(v, "V");
    
    }

    public static String getVoltageDText(double v) {
        return getUnitText(Math.abs(v), "V");
    }

    public static void drawThickCircle(Graphics g, int cx, int cy, int ri) {
        g.setLineWidth(3.0);
        g.context.beginPath();
        g.context.arc(cx, cy, ri * .98, 0, 2 * Math.PI);
        g.context.stroke();
        g.setLineWidth(1.0);
    }

    public static void drawPolygon(Graphics g, Polygon p) {
        g.drawPolyline(p.xpoints, p.ypoints, p.npoints);
    }

    public static void drawThickPolygon(Graphics g, Polygon p) {
        CircuitElementSupport.drawThickPolygon(g, p.xpoints, p.ypoints, p.npoints);
    }

    public static void drawThickPolygon(Graphics g, int xs[], int ys[], int c) {
        // int i;
        // for (i = 0; i != c-1; i++)
        // drawThickLine(g, xs[i], ys[i], xs[i+1], ys[i+1]);
        // drawThickLine(g, xs[i], ys[i], xs[0], ys[0]);
        g.setLineWidth(3.0);
        g.drawPolyline(xs, ys, c);
        g.setLineWidth(1.0);
    }

    public static void drawThickLine(Graphics g, Point pa, Point pb) {
        g.setLineWidth(3.0);
        g.drawLine(pa.x, pa.y, pb.x, pb.y);
        g.setLineWidth(1.0);
    }

    public static void drawThickLine(Graphics g, int x, int y, int x2, int y2) {
        g.setLineWidth(3.0);
        g.drawLine(x, y, x2, y2);
        g.setLineWidth(1.0);
    }

    public static void drawPost(Graphics g, Point pt) {
        g.setColor(CircuitElm.sim.whiteColor);
        g.fillOval(pt.x - 3, pt.y - 3, 7, 7);
    }

    public static void interpPoint(Point a, Point b, Point c, double f, double g) {
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
    public static Point interpPoint(Point a, Point b, double f, double g) {
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
    public static void interpPoint2(Point a, Point b, Point c, Point d, double f, double g) {
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

    public static void interpPoint(Point a, Point b, Point c, double f) {
        c.x = (int) Math.floor(a.x * (1 - f) + b.x * f + .48);
        c.y = (int) Math.floor(a.y * (1 - f) + b.y * f + .48);
    }

    public static Point[] newPointArray(int n) {
        Point a[] = new Point[n];
        while (n > 0)
            a[--n] = new Point();
        return a;
    }

    public static Polygon calcArrow(Point a, Point b, double al, double aw) {
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

    public static Polygon createPolygon(Point a, Point b, Point c) {
        Polygon p = new Polygon();
        p.addPoint(a.x, a.y);
        p.addPoint(b.x, b.y);
        p.addPoint(c.x, c.y);
        return p;
    }

    public static Polygon createPolygon(Point a, Point b, Point c, Point d) {
        Polygon p = new Polygon();
        p.addPoint(a.x, a.y);
        p.addPoint(b.x, b.y);
        p.addPoint(c.x, c.y);
        p.addPoint(d.x, d.y);
        return p;
    }

    public static Polygon createPolygon(Point a[]) {
        Polygon p = new Polygon();
        int i;
        for (i = 0; i != a.length; i++)
            p.addPoint(a[i].x, a[i].y);
        return p;
    }

    public static int abs(int x) {
        return x < 0 ? -x : x;
    }

    public static int sign(int x) {
        return (x < 0) ? -1 : (x == 0) ? 0 : 1;
    }

    public static int min(int a, int b) {
        return (a < b) ? a : b;
    }

    public static int max(int a, int b) {
        return (a > b) ? a : b;
    }

    public static double distance(Point p1, Point p2) {
        double x = p1.x - p2.x;
        double y = p1.y - p2.y;
        return Math.sqrt(x * x + y * y);
    }

}
