import { Modal } from "antd";
import CustomButton from "../../common/button/Button";
import * as S from "./styles";

const Confirmation = ({ title, name, isModalOpen, handleOk, handleCancel }) => {
  function deleteHandler(handleOk, handleCancel) {
    return (
      <S.confirmationContainer>
        <CustomButton key="submit" danger type="primary" onClick={() => handleOk()}>
          Delete
        </CustomButton>
        <CustomButton key="back" onClick={() => handleCancel()}>
          Cancel
        </CustomButton>
      </S.confirmationContainer>
    );
  }
  return (
    <Modal
      title={`Delete ${title}`}
      open={isModalOpen}
      onCancel={handleCancel}
      footer={[deleteHandler(handleOk, handleCancel)]}
    >
      <S.modalBody>
        <span>
          Are you sure you want to delete {title} <b>{name}</b> ?
        </span>
      </S.modalBody>
    </Modal>
  );
};

export default Confirmation;
