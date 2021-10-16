import { Formik, Form, Field, ErrorMessage } from "formik";
import Checkbox from "./components/Checkbox";
import TextInput from "./components/TextInput";

const styles = {
  error: {
    color: "#ff0000",
  },
  label: {
    color: "#fff",
  },
};

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
  // Configuracion de formik con componente
  return (
    <Formik
      initialValues={{ name: "", lastname: "", option: "", email: "" }}
      validate={validate}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <TextInput name='name' label='Nombre' />
        {/* <label style={styles.label}>Nombre</label>
        <Field autoComplete='off' name='name' type='text' /> */}
        <br />
        {/* <Field autoComplete='off' name='option' as='select'>
          <option>-- Seleccionar ---</option>
          <option value='Opcion 1'>Opcion 1</option>
          <option value='Opcion 2'>Opcion 2</option>
          <option value='Opcion 3'>Opcion 3</option>
          <option value='Opcion 4'>Opcion 4</option>
        </Field> */}
        {/* <ErrorMessage
          name='name'
          render={(msg) => <div style={styles.error}>{msg}</div>}
        /> */}
        <br />
        <label style={styles.label}>Apellido</label>
        <Field autoComplete='off' name='lastname' type='text' />
        <ErrorMessage name='lastname' />
        <br />
        <label style={styles.label}>Email</label>
        <Field autoComplete='off' name='email' type='email' />
        <ErrorMessage name='email' />
        <Checkbox name="accept">
            Aceptar Terminos y Condiciones
        </Checkbox>
        <button type='submit'>Enviar</button>
      </Form>
    </Formik>
  );
}

export default App;
