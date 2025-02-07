import * as Yup from "yup";

export const signUpValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email().required("Required"),
  password: Yup.string()
    .min(8, "Less than 8 characters, make it 8 or more")
    .required("Required"),
});

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email().required("Required"),
  password: Yup.string()
    .min(8, "Less than 8 characters, make it 8 or more")
    .required("Required"),
});
