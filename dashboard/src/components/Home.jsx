import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";

const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post("http://localhost:3000/", {}, { withCredentials: true })
      .then((res) => {
        if (res.data.status) {
          setUser(res.data.success);
        } else {
          navigate("http://localhost:5174/login"); // go back to login
        }
      })
      .catch(() => navigate("http://localhost:5173"));
  }, []);

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
