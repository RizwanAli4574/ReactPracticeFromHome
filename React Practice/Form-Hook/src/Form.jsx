import { useForm } from "react-hook-form";
import { DevTool } from '@hookform/devtools';


function Form() { 

    const {register , handleSubmit , control , formState} = useForm();
    const {errors} = formState;



    const onSubmit = (data) => {
        console.log(data)
    }


  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name </label> <br />
      <input type="text" id="name" {...register("name" , {
        required : "Name is required"
      })} />
      <p>{errors.name?.message}</p>
      <br /> <br />

      <label htmlFor="email">Email </label> <br />
      <input type="email" id="email"  {...register("email" , {
        required : "Email is required" , 
        pattern:{
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Invalid email address"
        }
      })} /> 
         <p>{errors.email?.message}</p>
      <br /> <br />

      <label htmlFor="age">Age </label> <br />
      <input type="number" id="age"  {...register("age" , {
        required : "Age is required",
        valueAsNumber:true,
        min:{value:18 , message: "min 18"} ,
        max:{value:25 , message: "max 25"} 
      })}/>
         <p>{errors.age?.message}</p>
      <br /> <br />

      <button type="sumbit" >Submit</button> 
    </form>
    <DevTool control={control} placement="top-left" />
    </div>
  );
}

export default Form;
