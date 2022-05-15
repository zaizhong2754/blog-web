import { useState, useRef } from "react";
import { Card, Form, Input, Button, message } from "antd";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {login} from '@/store/actions';

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const formRef = useRef(null);
  const [loadings, setLoadings] = useState(false);
  const onFinish = ({ mobile, code }) => {
    setLoadings(true);
    const userInfo = mobile+'&'+code
    // if (userInfo==='84f081a47efed5ef5d4caa159c9c6972') {
      console.log(userInfo);
      dispatch(login(userInfo))
      // message.success("登入成功");
      // navigate('/')
    setLoadings(false);
  };

  const onFinishFailed = (errorInfo) => {
    message.error("用户名或密码错误");
  };

  const onReset = () => {
    formRef.current.resetFields();
  };

  return (
    <div className="login">
      <Card className="login-container">
        {/* 图片 */}
        <div className="login-logo" alt="" />
        {/* 表单 */}
        <Form
          name="basic"
          initialValues={{
            mobile: "13911111111",
            code: "246810",
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          ref={formRef}
          validateTrigger={["onBlur", "onChange"]}
        >
          <Form.Item
            name="mobile"
            rules={[
              {
                pattern: /^1[3-9]\d{9}$/,
                message: "用户名格式不对",
                validateTrigger: "onBlur",
              },
              { required: true, message: "用户名不能为空" },
            ]}
          >
            <Input size="large" placeholder="请输入用户名" />
          </Form.Item>

          <Form.Item
            name="code"
            rules={[
              { min: 6, message: "密码长度不小于6", validateTrigger: "onBlur" },
              { required: true, message: "密码不能为空" },
            ]}
          >
            <Input.Password
              size="large"
              placeholder="请输入验证码"
              maxLength={12}
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 6,
              span: 16,
            }}
          >
            <Button
              type="primary"
              loading={loadings}
              htmlType="submit"
              size="large"
              className="login-checkbox-label"
            >
              登入
            </Button>
            <Button
              type="primary"
              htmlType="button"
              size="large"
              onClick={onReset}
            >
              重置
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
