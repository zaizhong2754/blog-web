import { useState, useRef } from "react";
import { Card, Form, Input, Button, message } from "antd";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "@/store/actions";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formRef = useRef(null);
  const [loadings, setLoading] = useState(false);
  const onFinish = async ({ mobile, code }) => {
    setLoading(true);
    const userInfo = mobile + "&" + code;
    // 发送请求，进行登录
    try {
      await dispatch(login(userInfo));
      setLoading(false);
      message.success("登录成功", 1, () => {
        navigate("/home");
      });
    } catch (e) {
      message.error(e.response.data.message, 1, () => {
        setLoading(false);
      });
    }
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
