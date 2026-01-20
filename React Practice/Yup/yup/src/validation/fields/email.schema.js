import * as yup from 'yup';

export const emailSchema = yup
    .string()
    .email("Invalid email format")
    .required("Email is required");