import { Button, Modal } from "antd";
import styles from "./Confirmation.module.css";

const Confirmation = ({ title, name, isModalOpen, handleOk, handleCancel }) => {
  return (
    <Modal
      title={`Delete ${title}`}
      open={isModalOpen}
      onCancel={handleCancel}
      footer={[
        <Button key="submit" danger type="primary" onClick={() => handleOk()}>
          Delete
        </Button>,
        <Button key="back" onClick={() => handleCancel()}>
          Cancel
        </Button>,
      ]}
    >
      <div className={styles.modalBody}>
        <span>
          Are you sure you want to delete {title} <b>{name}</b> ?
        </span>
      </div>
    </Modal>
  );
};

export default Confirmation;
