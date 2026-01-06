import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

function Form() {
  const { register, handleSubmit, control, formState } = useForm({
    defaultValues: {
      name: "Rizwan Ali",
      email: "rizwan@gmail.com",
      age: 20,
      social: {
        facebook: "",
        twitter: "",
      },
      phoneNumbers:["" , ""],
      dob: new Date()
    },
  });
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name </label> <br />
        <input
          type="text"
          id="name"
          {...register("name", {
            required: "Name is required",
          })}
        />
        {errors.name && <p className="error">{errors.name?.message}</p>}
        <br /> <br />
        <label htmlFor="email">Email </label> <br />
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
            validate: {
              notAdminEmail: (value) => {
                return (
                  value !== "admin@example.com" ||
                  "Enter a different email address"
                );
              },

              notBlacklistedEmail: (value) => {
                return (
                  !value.endsWith("@blacklisted.com") ||
                  "This domain is not allowed"
                );
              },
            },
          })}
        />
        {errors.email && <p className="error">{errors.email?.message}</p>}
        <br /> <br />
        <label htmlFor="age">Age </label> <br />
        <input
          type="number"
          id="age"
          {...register("age", {
            required: "Age is required",
            valueAsNumber: true,
            min: { value: 18, message: "min 18" },
            max: { value: 25, message: "max 25" },
          })}
        />
        {errors.age && <p className="error">{errors.age?.message}</p>}
        <br /> <br />

        
         <label htmlFor="dob">DOB</label> <br />
        <input type="date" id="dob" {...register("dob" , {
          valueAsDate:true
        })} />
        <br /> <br />

        <label htmlFor="facebook">Facebook </label> <br />
        <input type="text" id="facebook" {...register("social.facebook")} />
        <br /> <br />

        <label htmlFor="twitter">Twitter </label> <br />
        <input type="text" id="twitter" {...register("social.twitter")} />
        <br /> <br />

        <label htmlFor="number">primaray Number </label> <br />
        <input type="number" id="number" {...register("phoneNumbers.0")} />
        <br /> <br />

         <label htmlFor="number2">Secondary Number </label> <br />
        <input type="number2" id="number2" {...register("phoneNumbers.1")} />
        <br /> <br />

        <button type="sumbit">Submit</button>
      </form>
      <DevTool control={control} placement="top-left" />
    </div>
  );
}

export default Form;
