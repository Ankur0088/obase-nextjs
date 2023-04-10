import React, { useState } from "react";
import styles from "@/styles/MetricTemplate.module.css";
import Header from "@/js/components/metric-template/header/Header";
import { ListData } from "@/js/constants/ListData";
import SubMenu from "@/js/components/metric-template/sub-menu/SubMenu";
import SubSidebar from "@/js/components/metric-template/sub-sidebar/SubSidebar";
import Category from "@/js/components/metric-template/category/Category";

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
    <div className={styles.metricTemplateContainer}>
      <Header
        selectedMember={selectedMember}
        handleIsEdit={() => setIsEdit(true)}
        addNewMember={addNewMember}
        deleteMember={deleteMember}
      />
      <div className={styles.metricTemplateBody}>
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
      </div>
    </div>
  );
};

export default MetricTemplate;
