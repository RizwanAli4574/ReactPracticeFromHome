import * as yup from "yup";

 const userSchema = yup.object({
  name: yup.string().required("Name is required"),
  username: yup.string().required("Username is required"),
  email: yup.string().email("Email is invalid").required("Email is required"),
  age: yup.number().required("Age is required").positive().integer(),
});

export default userSchema;
