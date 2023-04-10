import { Input } from "antd";
import CustomButton from "../../common/button/Button";
import InputField from "../../common/input/Input";
import styles from "./Category.module.css";

const Category = ({ selectedMember, isAdd, isEdit, handleOnChange, handleOnSubmit }) => {
  return (
    <div className={styles.programs}>
      <h1>Metric Builder</h1>
      <div className={styles.formContainer}>
        <div>
          <label className={styles.label}>Name : </label>
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
          <label className={styles.label}>Description : </label>
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
        <div className={styles.submitBtn}>
          <CustomButton disabled={!isEdit && !isAdd} onClick={handleOnSubmit}>
            Submit
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Category;
