import { Layout, Menu, Row } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
import { useSelectorType } from "../hooks/useSelectorType";
import { authActionCreators } from "../store/actionCreators/actionCreatorsUser";

const Navbar: React.FC = () => {
  //   const router = useHistory();
  const dispatch = useDispatch();
  const { isAuth, user } = useSelectorType((state) => state.authReducer);
  const logout = () => dispatch(authActionCreators.logout());
  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div style={{ color: "white" }}>{user.username}</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item
                onClick={() => console.log("Logout was pressed")}
                key={1}
              >
                Logout
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item onClick={logout} key={1}>
              Login
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
