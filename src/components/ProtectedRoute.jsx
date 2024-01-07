import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ Component }) => {
  const navigate = useNavigate();
  useEffect(()=>{
    const auth = localStorage.getItem("auth");
    if(!auth) navigate("/login")
  },[])

  return <Component />;
};

export default ProtectedRoute;
