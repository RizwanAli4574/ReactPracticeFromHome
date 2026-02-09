import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import api from "../api/axios"

import {useForm} from "react-hook-form"
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
    formState.{errors}} = useForm({
      resolver: yupResolver(userSchema)
    })
  })

  return (
    <div>
      <h2>Add User</h2>
      
    </div>
  )
}

export default AddEditUser;
