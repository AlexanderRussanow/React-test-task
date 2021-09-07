import { Layout, Menu, Row } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import { useSelectorType } from "../hooks/useSelectorType";
import { RouteNames } from "../routes";

const Navbar: React.FC = () => {
  const router = useHistory();
  const { isAuth } = useSelectorType((state) => state.authReducer);
  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div style={{ color: "white" }}>User name</div>
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
            <Menu.Item onClick={() => router.push(RouteNames.LOGIN)} key={1}>
              Login
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
