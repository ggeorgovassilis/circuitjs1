package com.lushprojects.circuitjs1.client.support;

import java.util.Vector;

import com.lushprojects.circuitjs1.client.CirSim;

public class Expr {
    Expr(Expr e1, Expr e2, int v) {
	children = new Vector<Expr>();
	children.add(e1);
	if (e2 != null)
	    children.add(e2);
	type = v;
    }

    Expr(int v, double vv) {
	type = v;
	value = vv;
    }

    Expr(int v) {
	type = v;
    }

    public double eval(ExprState es) {
	Expr left = null;
	Expr right = null;
	if (children != null && children.size() > 0) {
	    left = children.firstElement();
	    if (children.size() == 2)
		right = children.lastElement();
	}
	switch (type) {
	case E_ADD:
	    return left.eval(es) + right.eval(es);
	case E_SUB:
	    return left.eval(es) - right.eval(es);
	case E_MUL:
	    return left.eval(es) * right.eval(es);
	case E_DIV:
	    return left.eval(es) / right.eval(es);
	case E_POW:
	    return java.lang.Math.pow(left.eval(es), right.eval(es));
	case E_UMINUS:
	    return -left.eval(es);
	case E_VAL:
	    return value;
	case E_T:
	    return es.t;
	case E_SIN:
	    return java.lang.Math.sin(left.eval(es));
	case E_COS:
	    return java.lang.Math.cos(left.eval(es));
	case E_ABS:
	    return java.lang.Math.abs(left.eval(es));
	case E_EXP:
	    return java.lang.Math.exp(left.eval(es));
	case E_LOG:
	    return java.lang.Math.log(left.eval(es));
	case E_SQRT:
	    return java.lang.Math.sqrt(left.eval(es));
	case E_TAN:
	    return java.lang.Math.tan(left.eval(es));
	case E_MIN: {
	    int i;
	    double x = left.eval(es);
	    for (i = 1; i < children.size(); i++)
		x = Math.min(x, children.get(i).eval(es));
	    return x;
	}
	case E_MAX: {
	    int i;
	    double x = left.eval(es);
	    for (i = 1; i < children.size(); i++)
		x = Math.max(x, children.get(i).eval(es));
	    return x;
	}
	case E_CLAMP:
	    return Math.min(Math.max(left.eval(es), children.get(1).eval(es)), children.get(2).eval(es));
	case E_STEP: {
	    double x = left.eval(es);
	    if (right == null)
		return (x < 0) ? 0 : 1;
	    return (x > right.eval(es)) ? 0 : (x < 0) ? 0 : 1;
	}
	case E_SELECT: {
	    double x = left.eval(es);
	    return children.get(x > 0 ? 2 : 1).eval(es);
	}
	case E_TRIANGLE: {
	    double x = posmod(left.eval(es), Math.PI * 2) / Math.PI;
	    return (x < 1) ? -1 + x * 2 : 3 - x * 2;
	}
	case E_SAWTOOTH: {
	    double x = posmod(left.eval(es), Math.PI * 2) / Math.PI;
	    return x - 1;
	}
	case E_MOD:
	    return left.eval(es) % right.eval(es);
	case E_PWL:
	    return pwl(es, children);
	default:
	    if (type >= E_A)
		return es.values[type - E_A];
	    CirSim.console("unknown\n");
	}
	return 0;
    }

    double pwl(ExprState es, Vector<Expr> args) {
	double x = args.get(0).eval(es);
	double x0 = args.get(1).eval(es);
	double y0 = args.get(2).eval(es);
	if (x < x0)
	    return y0;
	double x1 = args.get(3).eval(es);
	double y1 = args.get(4).eval(es);
	int i = 5;
	while (true) {
	    if (x < x1)
		return y0 + (x - x0) * (y1 - y0) / (x1 - x0);
	    if (i + 1 >= args.size())
		break;
	    x0 = x1;
	    y0 = y1;
	    x1 = args.get(i).eval(es);
	    y1 = args.get(i + 1).eval(es);
	    i += 2;
	}
	return y1;
    }

    double posmod(double x, double y) {
	x %= y;
	return (x >= 0) ? x : x + y;
    }

    Vector<Expr> children;
    double value;
    int type;
    static final int E_ADD = 1;
    static final int E_SUB = 2;
    static final int E_T = 3;
    static final int E_VAL = 6;
    static final int E_MUL = 7;
    static final int E_DIV = 8;
    static final int E_POW = 9;
    static final int E_UMINUS = 10;
    static final int E_SIN = 11;
    static final int E_COS = 12;
    static final int E_ABS = 13;
    static final int E_EXP = 14;
    static final int E_LOG = 15;
    static final int E_SQRT = 16;
    static final int E_TAN = 17;
    static final int E_R = 18;
    static final int E_MAX = 19;
    static final int E_MIN = 20;
    static final int E_CLAMP = 21;
    static final int E_PWL = 22;
    static final int E_TRIANGLE = 23;
    static final int E_SAWTOOTH = 24;
    static final int E_MOD = 25;
    static final int E_STEP = 26;
    static final int E_SELECT = 27;
    static final int E_A = 28; // should be at end
};
