import Button from "../Button/Button";

const FormEdit = () => {
  return (
    <form className="form__group">
      <label>
        <input className="item__update" placeholder="Updated your task" />
      </label>
      <Button text="Update" type="submit" />
    </form>
  );
};

export default FormEdit;
