package com.lushprojects.circuitjs1.client.elements;

public class PDarlingtonElm extends DarlingtonElm {

    public PDarlingtonElm(int xx, int yy) {
	super(xx, yy, true);
    }

    public Class<DarlingtonElm> getDumpClass() {
	return DarlingtonElm.class;
    }
}
