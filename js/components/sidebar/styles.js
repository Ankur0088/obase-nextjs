import { Menu } from "antd";
import styled from "styled-components";

export const sidebarContainer = styled.div`
  height: 100%;
  width: ${(p) => (p.collapsed ? "80px" : "250px")};
  position: relative;
  transition: all 0.5s ease;
  button {
    transition: all 0.5s ease;
    margin: 10px;
    position: absolute;
    right: -18px;
    top: 30px;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    padding: 0;
    font-size: 10px;
  }
`;

export const menuContainer = styled(Menu)`
  height: 100%;
`;
