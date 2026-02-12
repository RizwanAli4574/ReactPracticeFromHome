import { useEffect, useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { confirmDialog } from "primereact/confirmdialog";
import { Card } from "primereact/card";

function UserList({ toast }) {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    const response = await api.get("/users");
    setUsers(response.data);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchUsers();
  }, []);

  const deleteUser = (id) => {
    confirmDialog({
      message: "Are you sure you want to delete this user?",
      header: "Delete Confirmation",
      icon: "pi pi-exclamation-triangle",
      accept: async () => {
        await api.delete(`/users/${id}`);
        toast.current.show({
          severity: "success",
          summary: "Delete",
          detail: "User deleted successfully",
          life: 2000,
        });
        fetchUsers();
      },
    });
  };

  const actionTemplate = (rowData) => (
    <div className="flex gap-2">
      <Button
        icon="pi pi-pencil"
        className="p-button-rounded p-button-warning p-button-outlined p-button-sm"
        onClick={() => navigate(`/edit/${rowData.id}`)}
      />
      <Button
        icon="pi pi-trash"
        className="p-button-rounded p-button-danger p-button-outlined p-button-sm"
        onClick={() => deleteUser(rowData.id)}
      />
    </div>
  );

  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <span className="text-xl font-bold">Users</span>
      <Button
        icon="pi pi-plus"
        className="p-button-success p-button-sm"
        onClick={() => navigate("/add")}
      >
        <span className="p-button-label ml-2">
            <span className="hidden md:inline">Add User</span>
            <span className="inline md:hidden">Add</span>
        </span>
      </Button>
    </div>
  );

  return (
    <Card className="shadow-2">
      <DataTable
        value={users}
        header={header}
        showGridlines
        stripedRows
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25]}
        size="small"
        filterDisplay="menu"
        responsiveLayout="stack"
        breakpoint="960px"
      >
        <Column
          field="name"
          header="Name"
          sortable
          filter
          filterPlaceholder="Search"
          style={{ minWidth: "12rem" }}
        />
        <Column
          field="username"
          header="UserName"
          sortable
          filter
          filterPlaceholder="Search"
          style={{ minWidth: "10rem" }}
        />
        <Column
          field="age"
          header="Age"
          sortable
          filter
          filterPlaceholder="Search"
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="email"
          header="Email"
          sortable
          filter
          filterPlaceholder="Search"
          style={{ minWidth: "12rem" }}
        />
        <Column
          header="Action"
          body={actionTemplate}
          className="action-column"
        />
      </DataTable>
    </Card>
  );
}

export default UserList;


