package com.lushprojects.circuitjs1.client.dialogs;

import com.lushprojects.circuitjs1.client.ui.EditInfo;

public interface Editable {
    EditInfo getEditInfo(int n);

    void setEditValue(int n, EditInfo ei);
}
