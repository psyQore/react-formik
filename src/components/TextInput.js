import { useField } from "formik";
import React from "react";

const styles = {
  error: {
    color: "#ff0000",
  },
  label: {
    color: "#fff",
  },
};

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

//   console.log({ field, meta });
  return (
    <div>
      <label style={styles.label}>{label}</label>
      <input type='text' {...field} />
      {meta.touched && meta.error ? (
        <div style={styles.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextInput;
