import { FilterOutlined, MenuOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import * as S from "./styles";

const SubMenu = () => {
  const items = [
    { key: "1", icon: <FilterOutlined /> },
    { key: "2", icon: <MenuOutlined /> },
  ];
  return (
    <S.sidebar>
      <Menu defaultSelectedKeys={["2"]} mode="inline" inlineCollapsed={true} items={items} />
    </S.sidebar>
  );
};

export default SubMenu;
