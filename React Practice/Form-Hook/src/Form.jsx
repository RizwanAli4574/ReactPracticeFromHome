import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useEffect } from "react";

function Form() {
  const { register, handleSubmit, control, 
    formState, watch , getValues , setValue } = useForm({
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
  const { errors , dirtyFields , 
    touchedFields,isDirty , isValid, isSubmitting} = formState;
// console.log({dirtyFields , touchedFields , isDirty})

  const onSubmit = (data) => {
    console.log(data);
  };

  // const watchForm = watch();

  // useEffect(() => {
  //   console.log(watchForm);
  // }, [watchForm]);

  const getFormValues = () => {
    const values = getValues();
    console.log(values); 
  };

  const setFormValues = () => {
    setValue("name", "John Doe",{
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };
const onError = (errors) => {
  console.log(errors);
}

  return (
    <div>
      {/* <p>Json: {JSON.stringify(watchForm)}</p> */}
      <form onSubmit={handleSubmit(onSubmit, onError)}>
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
              disabled: watch("name") === "",
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
         <label htmlFor="country">Country</label> 
         <select  id="country" {...register("country")}> 
            <option value="">Select Country</option>
            <option value="pakistan">PAKISTAN</option>
            <option value="canada">Canada</option>
            <option value="uk">UK</option>
            <option value="australia">Australia</option>
            <option value="india">India</option>
         </select>
        </div>

        <div>
          <label htmlFor="gender">Gender</label>
          <label htmlFor="gender">
            <input type="radio"  value="male" {...register("gender", {required: "Gender is required"})} />
            <label htmlFor="gender">Male</label>
          </label>
      
          <label htmlFor="gender">
            <input type="radio"  value="female" {...register("gender")} />
            <label htmlFor="gender">Female</label>
          </label>
            <p className="error">{errors.gender?.message}</p>
        </div>

          <div>
          <label htmlFor="skills">Skills</label>
          <label htmlFor="skills">
            <input type="checkbox"  value="word" {...register("skills", {required: "Skills is required"})} />
            <label htmlFor="skills">Word</label>
          </label>

           <label htmlFor="skills">
            <input type="checkbox"  value="excel" {...register("skills", {required: "Skills is required"})} />
            <label htmlFor="skills">Excel</label>
          </label>

          <label htmlFor="skills">
            <input type="checkbox"  value="powerpoint" {...register("skills", {required: "Skills is required"})} />
            <label htmlFor="skills">PowerPoint</label>
          </label>

          <label htmlFor="skills">
            <input type="checkbox"  value="outlook" {...register("skills", {required: "Skills is required"})} />
            <label htmlFor="skills">Outlook</label>
          </label>

            <p className="error">{errors.skills?.message}</p>
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

        {/* <button type="sumbit" disabled={!isValid}>Submit</button> */}
        <button type="sumbit" disabled={!isValid}>Submit</button>
        <button type="button" onClick={setFormValues}>Get Form Values</button>
      </form>
      <DevTool control={control} placement="top-left" />
    </div>
  );
}

export default Form;
