import { FilterOutlined, MenuOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import styles from "./SubMenu.module.css";

const SubMenu = () => {
  const items = [
    { key: "1", icon: <FilterOutlined /> },
    { key: "2", icon: <MenuOutlined /> },
  ];
  return (
    <div className={styles.sidebar}>
      <Menu
        defaultSelectedKeys={["2"]}
        mode="inline"
        className={styles.menuStyle}
        inlineCollapsed={true}
        items={items}
      />
    </div>
  );
};

export default SubMenu;
