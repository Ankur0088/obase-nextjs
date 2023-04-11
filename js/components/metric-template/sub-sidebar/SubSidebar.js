import { useEffect, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { List } from "antd";
import InputField from "../../common/input/Input";
import * as S from "./styles";

const SubSidebar = ({ selectedMember, memberList, handleSelectedMember }) => {
  const [searchText, setSearchText] = useState("");
  const [members, setMembers] = useState(memberList);

  useEffect(() => {
    setMembers(memberList);
  }, [memberList]);

  const handleOnChange = (value) => {
    setSearchText(value);
    if (value) {
      setMembers(memberList.filter((m) => m.name.toLocaleLowerCase().startsWith(value)));
    } else {
      setMembers(memberList);
    }
  };

  return (
    <S.subSidebar>
      <InputField
        placeholder="Filter"
        value={searchText}
        prefix={<SearchOutlined />}
        onChange={(e) => {
          handleOnChange(e.target.value);
        }}
      />
      <S.list>
        <S.listContainer
          dataSource={members}
          renderItem={(item) => (
            <S.listItemContainer
              isSelected={item.id === selectedMember.id}
              onClick={() => {
                handleSelectedMember(item);
              }}
            >
              <List.Item.Meta title={item.name} description={item.description} />
            </S.listItemContainer>
          )}
        />
      </S.list>
    </S.subSidebar>
  );
};

export default SubSidebar;
