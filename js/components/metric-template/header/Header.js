import { useState } from "react";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Confirmation from "../confirmation/Confirmation";
import styles from "./Header.module.css";

const Header = ({ selectedMember, handleIsEdit, addNewMember, deleteMember }) => {
  const [isDelete, setIsDelete] = useState(false);
  return (
    <>
      <div className={styles.headerContainer}>
        <Button
          disabled={!selectedMember?.id}
          type="text"
          icon={<EditOutlined className={styles.pColor} />}
          onClick={handleIsEdit}
        >
          Edit
        </Button>
        <Button type="text" icon={<PlusOutlined className={styles.pColor} />} onClick={addNewMember}>
          New
        </Button>
        <Button
          disabled={!selectedMember?.id}
          type="text"
          danger
          icon={<DeleteOutlined />}
          onClick={() => {
            setIsDelete(true);
          }}
        >
          Delete
        </Button>
      </div>
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
