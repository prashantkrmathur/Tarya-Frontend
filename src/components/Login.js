import { Button, Checkbox, Form, Input } from 'antd';
import React, { useState } from 'react';


const onFinish = (values) => {
    console.log('Success:', values);
    window.location.href = "/main"
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const checkUser = async(email) => {
   
}



const Login = () => {
    return (
        <div style={{ margin: "auto", textAlign: "center", width: "50%", marginTop: "50px" }}>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Firstname"
                    name="firstname"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your firstname!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Lastname"
                    name="lastname"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your lastname!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit" >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
};
export default Login;