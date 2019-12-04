import React, { Component } from 'react'
import { Card, Form, Icon, Input, Button, message } from 'antd'
const FormItem = Form.Item
class Loginindex extends Component {
  handlerSubmit = () => {
    let userInfo = this.props.form.getFieldsValue()
    console.log('userInfo', userInfo)
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success(
          `Congratulations ${userInfo.username}, the current password is ${userInfo.password}`
        )
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <div className="full_height">
        <Card title="Inline Form">
          <Form layout="inline">
            <FormItem>
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Please enter username"
              ></Input>
            </FormItem>
            <FormItem>
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Please enter password"
              ></Input>
            </FormItem>
            <FormItem>
              <Button type="primary">Login</Button>
            </FormItem>
          </Form>
        </Card>
        <Card title="Horizontal Form">
          <Form layout="horizontal" style={{ width: '300px' }}>
            <FormItem>
              {getFieldDecorator('username', {
                rules: [
                  {
                    required: true,
                    message: 'Please enter username'
                  }
                ]
              })(
                <Input
                autoComplete="off"
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="Please enter username"
                ></Input>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [
                  { required: true, message: 'Please input your Password!' }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </FormItem>
            <FormItem>
              <Button
                onClick={() => {
                  this.handlerSubmit()
                }}
                type="primary"
              >
                Login
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}
const WrappedHorizontalLoginForm = Form.create()(Loginindex)
export default WrappedHorizontalLoginForm
