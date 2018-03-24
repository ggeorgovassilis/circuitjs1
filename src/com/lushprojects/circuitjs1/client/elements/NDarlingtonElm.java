package com.lushprojects.circuitjs1.client.elements;

public class NDarlingtonElm extends DarlingtonElm {

    public NDarlingtonElm(int xx, int yy) {
	super(xx, yy, false);
    }

    public Class<DarlingtonElm> getDumpClass() {
	return DarlingtonElm.class;
    }
}
