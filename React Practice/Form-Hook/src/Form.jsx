import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

function Form() {
  const { register, handleSubmit, control, formState } = useForm({
    defaultValues: {
      name: "",
      email: "",
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
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register("name", {
              required: "Name is required",
            })}
          />
          <p className="error">{errors.name?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
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
          <p className="error">{errors.email?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="age">Age</label>
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
          <p className="error">{errors.age?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="dob">DOB</label>
          <input
            type="date"
            id="dob"
            {...register("dob", {
              valueAsDate: true,
              required: "DOB is required"
            })}
          />
          <p className="error">{errors.dob?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="facebook">Facebook</label>
          <input type="text" id="facebook" {...register("social.facebook")} />
        </div>

        <div className="form-control">
          <label htmlFor="twitter">Twitter</label>
          <input type="text" id="twitter" {...register("social.twitter")} />
        </div>

        <div className="form-control">
          <label htmlFor="number">Primary Number</label>
          <input type="number" id="number" {...register("phoneNumbers.0")} />
        </div>

        <div className="form-control">
          <label htmlFor="number2">Secondary Number</label>
          <input type="number2" id="number2" {...register("phoneNumbers.1")} />
        </div>

        <button type="sumbit">Submit</button>
      </form>
      <DevTool control={control} placement="top-left" />
    </div>
  );
}

export default Form;
