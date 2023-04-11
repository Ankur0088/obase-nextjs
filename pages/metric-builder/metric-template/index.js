import { useState } from "react";
import Category from "@/js/components/metric-template/category/Category";
import Header from "@/js/components/metric-template/header/Header";
import SubMenu from "@/js/components/metric-template/sub-menu/SubMenu";
import SubSidebar from "@/js/components/metric-template/sub-sidebar/SubSidebar";
import { ListData } from "@/js/constants/ListData";
import * as S from "@/styles/pages/metric.template.style.js";

const MetricTemplate = () => {
  const [selectedMember, setSelectedMember] = useState(ListData[0]);
  const [isEdit, setIsEdit] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [memberList, setMemberList] = useState(ListData);

  const addNewMember = () => {
    setIsAdd(true);
    setSelectedMember({ id: 0, name: "", description: "" });
    setIsEdit(false);
  };

  const deleteMember = () => {
    setMemberList(memberList.filter((item) => item.id !== selectedMember.id));
    setSelectedMember({ id: 0, name: "", description: "" });
  };

  const handleSelectedMember = (member) => {
    if (isAdd) {
      setIsAdd(false);
    }
    setSelectedMember(member);
  };

  const handleOnChange = (event) => {
    setSelectedMember({
      ...selectedMember,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnSubmit = () => {
    if (selectedMember && selectedMember?.id) {
      setMemberList(
        memberList.map((item) => {
          if (item.id === selectedMember?.id) {
            return selectedMember;
          }
          return item;
        })
      );
    } else {
      setMemberList([...memberList, { ...selectedMember, id: memberList.length + 1 }]);
    }
    setSelectedMember({ id: 0, name: "", description: "" });
    setIsEdit(false);
    setIsAdd(false);
  };

  return (
    <S.metricTemplateContainer>
      <Header
        selectedMember={selectedMember}
        handleIsEdit={() => setIsEdit(true)}
        addNewMember={addNewMember}
        deleteMember={deleteMember}
      />
      <S.metricTemplateBody>
        <SubMenu />
        <SubSidebar
          selectedMember={selectedMember}
          memberList={memberList}
          handleSelectedMember={handleSelectedMember}
        />
        <Category
          selectedMember={selectedMember}
          isAdd={isAdd}
          isEdit={isEdit}
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
        />
      </S.metricTemplateBody>
    </S.metricTemplateContainer>
  );
};

export default MetricTemplate;
