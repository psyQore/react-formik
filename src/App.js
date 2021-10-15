import { useFormik } from "formik";

// Validacion
const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Requerido";
  } else if (values.name.length < 5) {
    errors.name = "El nombre es muy corto";
  }

  if (!values.lastname) {
    errors.lastname = "Requerido";
  } else if (values.lastname.length < 5) {
    errors.lastname = "El apellido es muy corto";
  }

  return errors;
};

function App() {
  // Configuracion de formik
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
    },
    validate,
    onSubmit: (values) => console.log(values),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Nombre</label>
      <input autoComplete='off' type='text' {...formik.getFieldProps("name")} />
      {/* Mostrando errores */}
      {formik.touched.name && formik.errors.name ? (
        <div style={{ color: "red" }}>{formik.errors.name}</div>
      ) : null}
      <br />
      <label>Apellido</label>
      <input autoComplete='off' type='text' {...formik.getFieldProps("lastname")}
      />
      {formik.touched.lastname && formik.errors.lastname ? (
        <div style={{ color: "red" }}>{formik.errors.lastname}</div>
      ) : null}
      <br />
      <label>Email</label>
      <input autoComplete='off' type='email' {...formik.getFieldProps("email")}
      />
      {formik.touched.email && formik.errors.email ? (
        <div style={{ color: "red" }}>{formik.errors.email}</div>
      ) : null}
      <button type='submit'>Enviar</button>
    </form>
  );
}

export default App;
