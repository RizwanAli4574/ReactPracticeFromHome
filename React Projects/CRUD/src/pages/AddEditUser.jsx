import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import api from "../api/axios"

import {useForm , Controller} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"

import userSchema from "../validations/userSchema"

import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
        



function AddEditUser() {

  const navigate = useNavigate();
  
  const {register, 
    handleSubmit, 
    setValue , 
    control,
    formState:{errors}} = useForm({
      resolver: yupResolver(userSchema)
    })

    const onSubmit = async (data) => {
      console.log(data);
      try {
        await api.post("/users", data);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  

  return (
    <div>
      <h2>Add User</h2>
      
      <form className="p-fluid" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <InputText {...register("name")} />
          <small className="p-error">{errors.name?.message}</small> 
        </div>

        <div>
          <label>User Name</label>
          <InputText {...register("username")} />
          <small className="p-error">{errors.username?.message}</small> 
        </div> 

        <div>
          <label>Email</label>
          <InputText {...register("email")} />
          <small className="p-error">{errors.email?.message}</small> 
        </div>

        <div>
          <label>Age</label>
          <Controller 
          name="age"
          control={control}
          render={({field}) => (
            <InputNumber value={field.value} onValueChange={(e) => field.onChange(e.value)}
            className={errors.age ? "p-invalid" : ""}
            />
          )}
          />
          <small className="p-error">{errors.age?.message}</small> 
        </div>

        <Button label="Save" icon="pi pi-check"/>
      </form>
    </div>
  )
}

export default AddEditUser;
