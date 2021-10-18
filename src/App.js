import { Formik, Form, ErrorMessage } from "formik";
import Checkbox from "./components/Checkbox";
import Radio from "./components/Radio";
import TextInput from "./components/TextInput";
import Select from "./components/Select";

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

  if(!values.radio){
    errors.radio = "Requerido"
  }

  return errors;
};

function App() {
  // Configuracion de formik con componente
  return (
    <Formik
      initialValues={{ name: "", lastname: "", email: "", sex: "", radio : "" }}
      validate={validate}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <TextInput name='name' label='Nombre' />
        <br />
        <TextInput name='lastname' label='Apellido' />
        <br />
        <TextInput name='email' label='Correo' />
        <Select label='Sexo' name='sex'>
          <option value=''>Seleccione su sexo</option>
          <option value='hombre'>Hombre</option>
          <option value='mujer'>Mujer</option>
          <option value='otro'>Otro</option>
        </Select>
        <Checkbox name='accept' style={styles.label}>
          Aceptar Terminos y Condiciones
        </Checkbox>
        <Radio name='radio' value='pega1' label='pega 1' />
        <Radio name='radio' value='pega2' label='pega 2' />
        <Radio name='radio' value='pega3' label='pega 3' />
        <ErrorMessage name="radio" />
        <button type='submit'>Enviar</button>
      </Form>
    </Formik>
  );
}

export default App;
