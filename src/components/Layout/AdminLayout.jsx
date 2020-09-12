import { Layout } from "antd";
import React, { useState } from "react";
import Bread from "./Breadcrumb";
import Footer from "./Footer";
import { AdminHeader } from "./Header";
import "./Layout.scss";
import { AdminSider } from "./Sider";

function AdminLayout(props) {
    const [collapsed, setCollapsed] = useState(false);
    const onCollapseChange = () => {
        setCollapsed(!collapsed);
    };
    return (
        <Layout className="wrapper">
            <AdminSider collapsed={collapsed} onCollapseChange={onCollapseChange} />
            <Layout>
                <AdminHeader collapsed={collapsed} onCollapseChange={onCollapseChange} />
                <Layout.Content className="wrapper-content">
                    {/* <Bread /> */}
                    <div className="main-content">{props.children}</div>
                </Layout.Content>
            </Layout>
        </Layout>
    );
}

export default AdminLayout;
