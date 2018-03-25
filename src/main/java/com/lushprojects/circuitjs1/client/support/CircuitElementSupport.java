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

}
