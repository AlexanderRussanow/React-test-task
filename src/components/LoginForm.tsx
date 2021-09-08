import { Button, Form, Input } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelectorType } from "../hooks/useSelectorType";
import { authActionCreators } from "../store/actionCreators/actionCreatorsUser";

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelectorType((state) => state.authReducer);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const login = () => {
    dispatch(authActionCreators.login(username, password));
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
      onFinish={login}
      
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input
          value={username}
          onChange={(e) => setUsername(e.currentTarget.value)}
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
      </Form.Item>

      {error && <div style={{ color: "red", marginBottom: 15 }}>{error}</div>}

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
