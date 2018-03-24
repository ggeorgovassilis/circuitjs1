package com.lushprojects.circuitjs1.client.support;

public class ExprState {
    public int n;
    public double values[];
    public double t;

    public ExprState(int xx) {
	n = xx;
	values = new double[9];
	values[4] = Math.E;
    }
}
