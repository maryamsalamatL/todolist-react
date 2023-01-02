import { useEffect, useRef } from "react";

const FormComponent = ({
  styles,
  submitHandler,
  inputValue,
  changeHandler,
  text,
}) => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <input
        type="text"
        value={inputValue}
        className={styles.input}
        onChange={changeHandler}
        ref={inputRef}
      ></input>
      <button type="submit" className={styles.btn}>
        {text}
      </button>
    </form>
  );
};

export default FormComponent;
