import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import App from "../App";

// DeviceLoanManage
import { DeviceLoanManageList } from "../features/device-loan-manage/DeviceLoanManageList";
import { CreateDeviceLoan } from "../features/device-loan-manage/CreateDeviceLoan";
import { DetailDeviceLoan } from "../features/device-loan-manage/DetailDeviceLoan";
import { EditDeviceLoan } from "../features/device-loan-manage/EditDeviceLoan";

// DeviceMaster
import { DeviceMasterList } from "../features/device-master/DeviceMasterList";
import { CreateDevice } from "../features/device-master/CreateDevice";
import { DetailDevice } from "../features/device-master/DetailDevice";
import { EditDevice } from "../features/device-master/EditDevice";

// UserMster
import { UserMasterList } from "../features/user-master/UserMasterList";
import { CreateUser } from "../features/user-master/CreateUser";
import { DetailUser } from "../features/user-master/DetailUser";
import { EditUser } from "../features/user-master/EditUser";

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
                    <Route path="/device-loan/edit" index element={<EditDeviceLoan />} />

                    {/* DeviceMaster */}
                    <Route path="/device/list" index element={<DeviceMasterList />} />
                    <Route path="/device/create" index element={<CreateDevice />} />
                    <Route path="/device/detail" index element={<DetailDevice />} />
                    <Route path="/device/edit" index element={<EditDevice />} />

                    {/* UserMaster */}
                    <Route path="/user/list" index element={<UserMasterList />} />
                    <Route path="/user/create" index element={<CreateUser />} />
                    <Route path="/user/detail" index element={<DetailUser />} />
                    <Route path="/user/edit" index element={<EditUser />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
