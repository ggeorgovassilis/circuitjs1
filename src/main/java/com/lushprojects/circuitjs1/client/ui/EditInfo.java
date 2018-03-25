/*    
    Copyright (C) Paul Falstad and Iain Sharp
    
    This file is part of CircuitJS1.

    CircuitJS1 is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 2 of the License, or
    (at your option) any later version.

    CircuitJS1 is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with CircuitJS1.  If not, see <http://www.gnu.org/licenses/>.
*/

package com.lushprojects.circuitjs1.client.ui;

import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Anchor;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.TextArea;

public class EditInfo {
    public EditInfo(String n, double val, double mn, double mx) {
	name = n;
	value = val;
	if (mn == 0 && mx == 0 && val > 0) {
	    minval = 1e10;
	    while (minval > val / 100)
		minval /= 10.;
	    maxval = minval * 1000;
	} else {
	    minval = mn;
	    maxval = mx;
	}
	forceLargeM = name.indexOf("(ohms)") > 0 || name.indexOf("(Hz)") > 0;
	dimensionless = false;
    }

    public EditInfo setDimensionless() {
	dimensionless = true;
	return this;
    }

    public String name, text;
    public double value, minval, maxval;
    public TextBox textf;
    // Scrollbar bar;
    public Choice choice;
    public Checkbox checkbox;
    public Button button;
    public TextArea textArea;
    public Anchor anchor;
    public boolean newDialog;
    public boolean forceLargeM;
    public boolean dimensionless;
}
