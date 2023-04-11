import { useState } from "react";
import { MenuItems } from "@/js/constants/MenuItems";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useRouter } from "next/router";
import CustomButton from "../common/button/Button";
import * as S from "./styles";

const Sidebar = () => {
  const router = useRouter();
  const pathName = router.pathname;
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <S.sidebarContainer collapsed={collapsed}>
      <CustomButton type="default" onClick={toggleCollapsed}>
        {collapsed ? <RightOutlined /> : <LeftOutlined />}
      </CustomButton>
      <S.menuContainer>
        <Menu inlineCollapsed={collapsed} mode="inline" items={MenuItems} selectedKeys={[pathName]} />
      </S.menuContainer>
    </S.sidebarContainer>
  );
};
export default Sidebar;
