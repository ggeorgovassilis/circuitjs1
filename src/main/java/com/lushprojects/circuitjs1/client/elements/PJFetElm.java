package com.lushprojects.circuitjs1.client.elements;

public class PJFetElm extends JfetElm {
    public PJFetElm(int xx, int yy) {
	super(xx, yy, true);
    }

    public Class<JfetElm> getDumpClass() {
	return JfetElm.class;
    }
}
