import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import App from "../App";

// DeviceLoanManage
import { DeviceLoanManageList } from "../features/device-loan-manage/DeviceLoanManageList";
import { CreateDeviceLoan } from "../features/device-loan-manage/CreateDeviceLoan";
import { DetailDeviceLoan } from "../features/device-loan-manage/DetailDeviceLoan";

// DeviceMaster
import { DeviceMasterList } from "../features/device-master/DeviceMasterList";
import { CreateDevice } from "../features/device-master/CreateDevice";
import { DetailDevice } from "../features/device-master/DetailDevice";

// UserMster
import { UserMasterList } from "../features/user-master/UserMasterList";
import { CreateUser } from "../features/user-master/CreateUser";
import { DetailUser } from "../features/user-master/DetailUser";

export const RouterConfig = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" index element={<App />} />
                    {/* DeviceLoanManagement */}
                    <Route path="/device-loan/list" index element={<DeviceLoanManageList />} />
                    <Route path="/device-loan/create" index element={<CreateDeviceLoan />} />
                    <Route path="/device-loan/detail" index element={<DetailDeviceLoan />} />

                    {/* DeviceMaster */}
                    <Route path="/device/list" index element={<DeviceMasterList />} />
                    <Route path="/device/create" index element={<CreateDevice />} />
                    <Route path="/device/detail" index element={<DetailDevice />} />

                    {/* UserMaster */}
                    <Route path="/user/list" index element={<UserMasterList />} />
                    <Route path="/user/create" index element={<CreateUser />} />
                    <Route path="/user/detail" index element={<DetailUser />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
