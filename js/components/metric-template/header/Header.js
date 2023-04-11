import { useState } from "react";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import CustomButton from "../../common/button/Button";
import Confirmation from "../confirmation/Confirmation";
import * as S from "./styles";

const Header = ({ selectedMember, handleIsEdit, addNewMember, deleteMember }) => {
  const [isDelete, setIsDelete] = useState(false);
  return (
    <>
      <S.headerContainer>
        <CustomButton
          disabled={!selectedMember?.id}
          type="text"
          icon={
            <S.pColor>
              <EditOutlined />
            </S.pColor>
          }
          onClick={handleIsEdit}
        >
          Edit
        </CustomButton>
        <CustomButton
          type="text"
          icon={
            <S.pColor>
              <PlusOutlined />
            </S.pColor>
          }
          onClick={addNewMember}
        >
          New
        </CustomButton>
        <CustomButton
          disabled={!selectedMember?.id}
          type="text"
          danger
          icon={
            <S.dColor>
              <DeleteOutlined />
            </S.dColor>
          }
          onClick={() => {
            setIsDelete(true);
          }}
        >
          Delete
        </CustomButton>
      </S.headerContainer>
      <Confirmation
        title="Member"
        name={selectedMember?.name}
        isModalOpen={isDelete}
        handleOk={() => {
          setIsDelete(false);
          deleteMember();
        }}
        handleCancel={() => {
          setIsDelete(false);
        }}
      />
    </>
  );
};

export default Header;
