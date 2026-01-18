import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useEffect } from "react";

function Form() {
  const { register, handleSubmit, control, 
    formState, watch  , reset,trigger} = useForm({
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
    mode: "onBlur"
  });
  const { errors ,isSubmitSuccessful , submitCount} = formState;




  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
  }

  const onError = (errors) => {
    console.log("Form Errors:", errors);
  }

 useEffect(() => {
    if(isSubmitSuccessful){
      reset();
    }
  }, [isSubmitSuccessful]);

  return (
    <div>
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

        <div className="form-control">
          <label htmlFor="gender">Gender</label>
          <div className="radio-group">
            <label htmlFor="gender-male">
              <input type="radio" id="gender-male" value="male" {...register("gender", {required: "Gender is required"})} />
              <span>Male</span>
            </label>
      
            <label htmlFor="gender-female">
              <input type="radio" id="gender-female" value="female" {...register("gender")} />
              <span>Female</span>
            </label>
          </div>
          <p className="error">{errors.gender?.message}</p>
        </div>

          <div className="form-control">
          <label htmlFor="skills">Skills</label>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" value="word" {...register("skills", {required: "Skills is required"})} />
              <span>Word</span>
            </label>

            <label>
              <input type="checkbox" value="excel" {...register("skills", {required: "Skills is required"})} />
              <span>Excel</span>
            </label>

            <label>
              <input type="checkbox" value="powerpoint" {...register("skills", {required: "Skills is required"})} />
              <span>PowerPoint</span>
            </label>

            <label>
              <input type="checkbox" value="outlook" {...register("skills", {required: "Skills is required"})} />
              <span>Outlook</span>
            </label>
          </div>
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
          <label htmlFor="number">Number</label>
          <input type="number" id="number" {...register("phoneNumbers.0")} />
        </div>

  
        
        <button type="submit">Submit</button>
        <br/>
        <button type="button" onClick={() => reset()}>Reset</button>
        {/* <button type="button" onClick={() => trigger()}>Trigger</button> */}
       
      </form>
      {/* <DevTool control={control} placement="top-left" /> */}
    </div>
  );
}

export default Form;
