export default function validation(values) {
  let errors = {};

  if (!values.name) {
    errors.name = "**Username required";
    // }
    // else if (!/^[A-Z][a-zA-Z '.-]*$/i.test(values.name))
  }

  if (!values.email) {
    errors.email = "**Email is required";
  } else if (!/^[^]+@[^]+\.[a-z]{2,3}$/i.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.password) {
    errors.password = "**Password is required";
  } else if (
    !/((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]){6,12})/i.test(values.password)
  ) {
    errors.password = "Choose a Strong Password";
  }
  return errors;
}
