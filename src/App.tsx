import { Layout } from "antd";
import React from "react";
import "./App.css";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import "./App.css";
import { useDispatch } from "react-redux";
import { authActionCreators } from "./store/actionCreators/actionCreatorsUser";
import { User } from "./models/user";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (localStorage.getItem("auth")) {
      dispatch(
        authActionCreators.setUser({
          username: localStorage.getItem("username"),
        } as User)
      );
      dispatch(authActionCreators.setAuth(true));
    }
  }, []);
  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
}

export default App;
