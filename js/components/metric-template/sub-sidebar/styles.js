import { List } from "antd";
import styled from "styled-components";

export const subSidebar = styled.div`
  padding: 10px;
  width: 300px;
  min-width: 300px;
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(100vh - 66px);
  border-right: 1px solid ${(p) => p.theme.color.Iron};
`;

export const list = styled.div`
  padding-top: 10px;

  .ant-list-item-meta {
    padding-left: 5px;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 0px;
    margin-top: 0px;
  }
`;

export const listContainer = styled(List)``;

export const listItemContainer = styled(List.Item)`
  background-color: ${(p) => (p.isSelected ? p.theme.color.Mabel : "inherit")};
  padding: 5px;
  cursor: pointer;
  margin: 2px;

  &:hover {
    background-color: ${(p) => p.theme.color.Mabel};
  }
`;
