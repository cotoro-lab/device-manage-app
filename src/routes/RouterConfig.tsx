import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import App from "../App";
import { DeviceLoanManage } from "../features/device-loan-manage/DeviceLoanManage";
import { DeviceMasterList } from "../features/device-master/DeviceMasterList";
import { UserMasterList } from "../features/user-master/UserMasterList";

export const RouterConfig = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" index element={<App />} />
                    <Route path="/device-loan-mg-list" index element={<DeviceLoanManage />} />
                    <Route path="/device-mst-list" index element={<DeviceMasterList />} />
                    <Route path="/user-mst-list" index element={<UserMasterList />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
