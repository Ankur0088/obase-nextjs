import { AppstoreOutlined, MailOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Menu } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const router = useRouter();
  const pathName = router.pathname;
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    {
      label: "Metric Builder",
      key: "/metric-builder",
      icon: <MailOutlined />,
      children: [
        {
          label: <Link href="/metric-builder/metric-template">Metric Templates</Link>,
          key: "/metric-builder/metric-template",
        },
        { label: <Link href="/metric-builder/groups">Groups</Link>, key: "/metric-builder/groups" },
        { label: <Link href="/metric-builder/tags">Tags</Link>, key: "/metric-builder/tags" },
      ],
    },
    {
      label: "Conductor Service",
      key: "/conductor-service",
      icon: <AppstoreOutlined />,
      children: [
        { label: "Scheduler", key: "/conductor-service/schedular" },
        { label: "Worker Nodes", key: "/conductor-service/worker-nodes" },
      ],
    },
  ];

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={!collapsed ? styles.sidebarContainer : styles.sidebarContainerCollapsed}>
      <Button type="default" onClick={toggleCollapsed} className={styles.collapsedBtn}>
        {collapsed ? <RightOutlined /> : <LeftOutlined />}
      </Button>
      <Menu
        className={styles.menu}
        inlineCollapsed={collapsed}
        mode="inline"
        items={menuItems}
        selectedKeys={[pathName]}
      />
    </div>
  );
};

export default Sidebar;
