import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { usersData, addUser, updateUser } from "./data";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import userSchema from "../validations/userSchema";

import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

function AddEditUser({ toast }) {
  const navigate = useNavigate();

  const { id } = useParams();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = (data) => {
    if (id) {
      updateUser(id, data);
      toast.current.show({
        severity: "success",
        summary: "Update",
        detail: "User updated successfully",
        life: 2000,
      });
    } else {
      addUser(data);
      toast.current.show({
        severity: "success",
        summary: "Added",
        detail: "User added successfully",
        life: 2000,
      });
    }
    navigate("/");
  };

  useEffect(() => {
    if (id) {
      const user = usersData.find(u => u.id === id);
      if (user) {
        Object.keys(user).forEach((key) => {
          setValue(key, user[key]);
        });
      }
    }
  }, [id, setValue]);

  const title = <h2 className="m-0 text-2xl font-bold text-center mb-4">{id ? "Edit User" : "Add User"}</h2>;

  return (
    <div className="flex justify-content-center">
      <Card title={title} className="w-full md:w-8 lg:w-6 shadow-2">
        <form className="p-fluid formgrid grid" onSubmit={handleSubmit(onSubmit)}>
          <div className="field col-12 md:col-6">
            <label htmlFor="name" className="font-bold">Name</label>
            <InputText id="name" {...register("name")} className={errors.name ? "p-invalid" : ""} />
            <small className="p-error block">{errors.name?.message}</small>
          </div>

          <div className="field col-12 md:col-6">
            <label htmlFor="username" className="font-bold">User Name</label>
            <InputText id="username" {...register("username")} className={errors.username ? "p-invalid" : ""} />
            <small className="p-error block">{errors.username?.message}</small>
          </div>

          <div className="field col-12 md:col-6">
            <label htmlFor="email" className="font-bold">Email</label>
            <InputText id="email" {...register("email")} className={errors.email ? "p-invalid" : ""} />
            <small className="p-error block">{errors.email?.message}</small>
          </div>

          <div className="field col-12 md:col-6">
            <label htmlFor="age" className="font-bold">Age</label>
            <Controller
              name="age"
              control={control}
              render={({ field }) => (
                <InputNumber
                  id="age"
                  value={field.value}
                  onValueChange={(e) => field.onChange(e.value)}
                  className={errors.age ? "p-invalid" : ""}
                />
              )}
            />
            <small className="p-error block">{errors.age?.message}</small>
          </div>

          <div className="col-12 flex justify-content-end mt-4">
             <Button label="Cancel" icon="pi pi-times" className="p-button-text mr-2 w-auto" onClick={() => navigate('/')} type="button"/>
             <Button label="Save" icon="pi pi-check" className="w-auto" type="submit" />
          </div>
        </form>
      </Card>
    </div>
  );
}

export default AddEditUser;
