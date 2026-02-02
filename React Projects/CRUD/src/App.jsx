import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList";
import AddEditUser from "./pages/AddEditUser";
import MainLayout from "./Layout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<UserList />} />
          <Route path="/add" element={<AddEditUser />} />
          <Route path="/edit/:id" element={<AddEditUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
