import * as yup from 'yup';

export const registerSchema = yup.object({

    name: yup.string().required("Name is required")
    .test(
        'no-admin',
        "Admin not allowed",
        (value) => value !== 'admin'
        )
    .trim().lowercase(),


    email: yup.string()
    .when('age', {
        is: (age) => age >= 25,
        then : Schema => 
            Schema 
            .email("Invalid email format")
            .required("Email is required for age 25 or older"),
        otherwise: schema =>  schema.notRequired(),
    }),
    // .test(
    //     'check-email',
    //     "Email already in use",
    //     async (value) => {
    //         const res = await fetch(`https://jsonplaceholder.typicode.com/users?email=${value}`);
    //         const data = await res.json();
    //         return data.length === 0;
    //     }
    // )
    // .required("Email is required"),


    password: yup.string().min(6, "Password must be at least 6 characters")
    .required("Password is required"),
   
    confirmpassword: yup.string()
    .oneOf([yup.ref('password'), null], "Password must match")
    .required("Confirm Password is required"),

    age: yup.number().min(18, "You must be at least 18 years old")
    .max(30, "You must be at most 30 years old").required("Age is required"),

    skills: yup
    .array()
    .of(yup.string())
    .min(2, "At least 2 skill must be selected")
    .required("Skills are required"),
})

