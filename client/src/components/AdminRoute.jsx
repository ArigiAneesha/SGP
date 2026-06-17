import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {

const role = localStorage.getItem("role");

if(role !== "ROLE_ADMIN"){
return <Navigate to="/login" />;
}

return children;

};

export default AdminRoute;