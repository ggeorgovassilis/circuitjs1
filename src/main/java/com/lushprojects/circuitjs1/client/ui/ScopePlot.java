package com.lushprojects.circuitjs1.client.ui;

import com.lushprojects.circuitjs1.client.CirSim;
import com.lushprojects.circuitjs1.client.elements.CircuitElm;

public class ScopePlot {
    double minValues[], maxValues[];
    int scopePointCount;
    int ptr, ctr, value, speed, units;
    double lastValue;
    String color;
    CircuitElm elm;

    ScopePlot(CircuitElm e, int u) {
	elm = e;
	units = u;
    }

    ScopePlot(CircuitElm e, int u, int v) {
	elm = e;
	units = u;
	value = v;
    }

    int startIndex(int w) {
	return ptr + scopePointCount - w;
    }

    void reset(int spc, int sp) {
	int oldSpc = scopePointCount;
	scopePointCount = spc;
	if (speed != sp)
	    oldSpc = 0; // throw away old data
	speed = sp;
	double oldMin[] = minValues;
	double oldMax[] = maxValues;
	minValues = new double[scopePointCount];
	maxValues = new double[scopePointCount];
	if (minValues != null) {
	    // preserve old data if possible
	    int i;
	    for (i = 0; i != scopePointCount && i != oldSpc; i++) {
		int i1 = (-i) & (scopePointCount - 1);
		int i2 = (ptr - i) & (oldSpc - 1);
		minValues[i1] = oldMin[i2];
		maxValues[i1] = oldMax[i2];
	    }
	} else
	    ctr = 0;
	ptr = 0;
    }

    void timeStep() {
	if (elm == null)
	    return;
	double v = elm.getScopeValue(value);
	if (v < minValues[ptr])
	    minValues[ptr] = v;
	if (v > maxValues[ptr])
	    maxValues[ptr] = v;
	lastValue = v;
	ctr++;
	if (ctr >= speed) {
	    ptr = (ptr + 1) & (scopePointCount - 1);
	    minValues[ptr] = maxValues[ptr] = v;
	    ctr = 0;
	}
    }

    String getUnitText(double v) {
	switch (units) {
	case Scope.UNITS_V:
	    return CircuitElm.getVoltageText(v);
	case Scope.UNITS_A:
	    return CircuitElm.getCurrentText(v);
	case Scope.UNITS_OHMS:
	    return CircuitElm.getUnitText(v, CirSim.ohmString);
	case Scope.UNITS_W:
	    return CircuitElm.getUnitText(v, "W");
	}
	return null;
    }

    static final String colors[] = { "#FF0000", "#FF8000", "#FF00FF", "#7F00FF", "#0000FF", "#0080FF", "#FFFF00",
	    "#00FFFF", };

    void assignColor(int count) {
	if (count > 0) {
	    color = colors[(count - 1) % 8];
	    return;
	}
	switch (units) {
	case Scope.UNITS_V:
	    color = "#00FF00";
	    break;
	case Scope.UNITS_A:
	    color = "#FFFF00";
	    break;
	default:
	    color = (CirSim.theSim.printableCheckItem.getState()) ? "#000000" : "#FFFFFF";
	    break;
	}
    }
}
