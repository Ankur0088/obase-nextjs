import { Input } from "antd";
import CustomButton from "../../common/button/Button";
import InputField from "../../common/input/Input";
import * as S from "./styles";

const Category = ({ selectedMember, isAdd, isEdit, handleOnChange, handleOnSubmit }) => {
  return (
    <S.programs>
      <h1>Metric Builder</h1>
      <S.formContainer>
        <div>
          <label>Name : </label>
          <InputField
            placeholder="Name"
            name="name"
            value={selectedMember.name}
            onChange={handleOnChange}
            disabled={!isEdit && !isAdd}
            required={true}
          />
        </div>
        <div>
          <label>Description : </label>
          <Input.TextArea
            rows={4}
            name="description"
            placeholder="Description"
            value={selectedMember.description}
            onChange={(e) => {
              handleOnChange(e.target);
            }}
            disabled={!isEdit && !isAdd}
          />
        </div>
        <S.submitBtn>
          <CustomButton disabled={!isEdit && !isAdd} onClick={handleOnSubmit}>
            Submit
          </CustomButton>
        </S.submitBtn>
      </S.formContainer>
    </S.programs>
  );
};

export default Category;
