import * as yup from 'yup';
import { emailSchema } from './fields/email.schema.js';
import { passwordSchema } from './fields/password.schema.js';

export const loginSchema = yup.object({
   email: emailSchema,
   password: passwordSchema,
})