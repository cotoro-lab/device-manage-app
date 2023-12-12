import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import App from "../App";

// DeviceLoanManage
import { DeviceLoanManageList } from "../features/device-loan-manage/DeviceLoanManageList";
import { CreateDeviceLoan } from "../features/device-loan-manage/CreateDeviceLoan";

// DeviceMaster
import { DeviceMasterList } from "../features/device-master/DeviceMasterList";
import { CreateDevice } from "../features/device-master/CreateDevice";

// UserMster
import { UserMasterList } from "../features/user-master/UserMasterList";
import { CreateUser } from "../features/user-master/CreateUser";

export const RouterConfig = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" index element={<App />} />
                    {/* DeviceLoanManagement */}
                    <Route path="/device-loan/list" index element={<DeviceLoanManageList />} />
                    <Route path="/device-loan/create" index element={<CreateDeviceLoan />} />

                    {/* DeviceMaster */}
                    <Route path="/device/list" index element={<DeviceMasterList />} />
                    <Route path="/device/create" index element={<CreateDevice />} />

                    {/* UserMaster */}
                    <Route path="/user/list" index element={<UserMasterList />} />
                    <Route path="/user/create" index element={<CreateUser />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
