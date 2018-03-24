package com.lushprojects.circuitjs1.client.support;

import com.lushprojects.circuitjs1.client.CirSim;

public class ExprParser {
    String text;
    String token;
    int pos;
    int tlen;
    boolean err;

    void getToken() {
	while (pos < tlen && text.charAt(pos) == ' ')
	    pos++;
	if (pos == tlen) {
	    token = "";
	    return;
	}
	int i = pos;
	int c = text.charAt(i);
	if ((c >= '0' && c <= '9') || c == '.') {
	    for (i = pos; i != tlen; i++) {
		if (!((text.charAt(i) >= '0' && text.charAt(i) <= '9') || text.charAt(i) == '.'))
		    break;
	    }
	} else if (c >= 'a' && c <= 'z') {
	    for (i = pos; i != tlen; i++) {
		if (!(text.charAt(i) >= 'a' && text.charAt(i) <= 'z'))
		    break;
	    }
	} else {
	    i++;
	}
	token = text.substring(pos, i);
	pos = i;
    }

    boolean skip(String s) {
	if (token.compareTo(s) != 0)
	    return false;
	getToken();
	return true;
    }

    void skipOrError(String s) {
	if (!skip(s))
	    err = true;
    }

    public Expr parseExpression() {
	if (token.length() == 0)
	    return new Expr(Expr.E_VAL, 0.);
	Expr e = parse();
	if (token.length() > 0)
	    err = true;
	return e;
    }

    Expr parse() {
	Expr e = parseMult();
	while (true) {
	    if (skip("+"))
		e = new Expr(e, parseMult(), Expr.E_ADD);
	    else if (skip("-"))
		e = new Expr(e, parseMult(), Expr.E_SUB);
	    else
		break;
	}
	return e;
    }

    Expr parseMult() {
	Expr e = parseUminus();
	while (true) {
	    if (skip("*"))
		e = new Expr(e, parseUminus(), Expr.E_MUL);
	    else if (skip("/"))
		e = new Expr(e, parseUminus(), Expr.E_DIV);
	    else
		break;
	}
	return e;
    }

    Expr parseUminus() {
	skip("+");
	if (skip("-"))
	    return new Expr(parsePow(), null, Expr.E_UMINUS);
	return parsePow();
    }

    Expr parsePow() {
	Expr e = parseTerm();
	while (true) {
	    if (skip("^"))
		e = new Expr(e, parseTerm(), Expr.E_POW);
	    else
		break;
	}
	return e;
    }

    Expr parseFunc(int t) {
	skipOrError("(");
	Expr e = parse();
	skipOrError(")");
	return new Expr(e, null, t);
    }

    Expr parseFuncMulti(int t, int minArgs, int maxArgs) {
	int args = 1;
	skipOrError("(");
	Expr e1 = parse();
	Expr e = new Expr(e1, null, t);
	while (skip(",")) {
	    Expr enext = parse();
	    e.children.add(enext);
	    args++;
	}
	skipOrError(")");
	if (args < minArgs || args > maxArgs)
	    err = true;
	return e;
    }

    Expr parseTerm() {
	if (skip("(")) {
	    Expr e = parse();
	    skipOrError(")");
	    return e;
	}
	if (skip("t"))
	    return new Expr(Expr.E_T);
	if (token.length() == 1) {
	    char c = token.charAt(0);
	    if (c >= 'a' && c <= 'i') {
		getToken();
		return new Expr(Expr.E_A + (c - 'a'));
	    }
	}
	if (skip("pi"))
	    return new Expr(Expr.E_VAL, 3.14159265358979323846);
	// if (skip("e"))
	// return new Expr(Expr.E_VAL, 2.7182818284590452354);
	if (skip("sin"))
	    return parseFunc(Expr.E_SIN);
	if (skip("cos"))
	    return parseFunc(Expr.E_COS);
	if (skip("abs"))
	    return parseFunc(Expr.E_ABS);
	if (skip("exp"))
	    return parseFunc(Expr.E_EXP);
	if (skip("log"))
	    return parseFunc(Expr.E_LOG);
	if (skip("sqrt"))
	    return parseFunc(Expr.E_SQRT);
	if (skip("tan"))
	    return parseFunc(Expr.E_TAN);
	if (skip("tri"))
	    return parseFunc(Expr.E_TRIANGLE);
	if (skip("saw"))
	    return parseFunc(Expr.E_SAWTOOTH);
	if (skip("min"))
	    return parseFuncMulti(Expr.E_MIN, 2, 1000);
	if (skip("max"))
	    return parseFuncMulti(Expr.E_MAX, 2, 1000);
	if (skip("pwl"))
	    return parseFuncMulti(Expr.E_PWL, 2, 1000);
	if (skip("mod"))
	    return parseFuncMulti(Expr.E_MOD, 2, 2);
	if (skip("step"))
	    return parseFuncMulti(Expr.E_STEP, 1, 2);
	if (skip("select"))
	    return parseFuncMulti(Expr.E_SELECT, 3, 3);
	if (skip("clamp"))
	    return parseFuncMulti(Expr.E_CLAMP, 3, 3);
	try {
	    Expr e = new Expr(Expr.E_VAL, Double.valueOf(token).doubleValue());
	    getToken();
	    return e;
	} catch (Exception e) {
	    err = true;
	    CirSim.console("unrecognized token: " + token + "\n");
	    return new Expr(Expr.E_VAL, 0);
	}
    }

    public ExprParser(String s) {
	text = s.toLowerCase();
	tlen = text.length();
	pos = 0;
	err = false;
	getToken();
    }

    boolean gotError() {
	return err;
    }
};
