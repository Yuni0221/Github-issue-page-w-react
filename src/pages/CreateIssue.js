import { useRef } from "react";
import cx from "clsx";

import Button from "../components/Button";
import styles from "./CreateIssue.module.css";
import TextField from "../components/TextField";
import { useForm } from "../hooks";

export default function CreateIssue() {
  const inputRef = useRef();
  const textareaRef = useRef();

  const { isSubmitting, inputValues, onChange, errors, handleSubmit } = useForm(
    {
      initialValues: { title: "", body: "" },
      onSubmit: async () => console.log("완료"),
      validate,
      refs: { title: inputRef, body: textareaRef },
    }
  );

  return (
    <div className={styles.container}>
      <div className={styles.avatar}></div>
      <div className={cx(styles.inputWrapper, styles.border)}>
        <form onSubmit={handleSubmit}>
          <TextField
            ref={inputRef}
            name="title"
            placeholder="TITLE"
            value={inputValues.title}
            onchange={onChange}
            error={errors.title}
          />
          <TextField
            type="textarea"
            ref={textareaRef}
            name="body"
            placeholder="Leave a comment"
            value={inputValues.body}
            onChange={onChange}
            error={errors.body}
          />

          <div className={styles.buttonWrapper}>
            <Button
              type="submit"
              style={{
                fontSize: "14px",
                backgroundColor: "Aquamarine",
                color: "black",
              }}
              disabled={isSubmitting}
            >
              Submit new issue
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

function validate(values) {
  let errors = {};
  if (values.title === "") {
    errors = { title: "타이틀은 필수값입니다." };
  }

  return errors;
}
