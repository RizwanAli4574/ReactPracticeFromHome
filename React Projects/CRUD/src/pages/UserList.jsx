import { useEffect , useState} from "react";
import api from "../api/axios";
function UserList() {
    const [users, setUsers] = useState([]);


    const fetchUsers = async () => {
        const response = await api.get("/users");
        console.log(response.data);
        setUsers(response.data);
    }
    useEffect(() => {
        fetchUsers();
    }, []);
  return <h1>Users CRUD</h1>;
}

export default UserList;
