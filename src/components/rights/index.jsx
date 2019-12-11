import React, { Component } from 'react'
import { Card, Table, Switch, Button, Modal, Form, Select, Input } from 'antd'
const FormItem = Form.Item
const Option = Select.Option
export class UserRights extends Component {
  constructor(props) {
    super(props)
    this.state = {
      UserRightsData: [],
      selectedRowKeys: [],
      visibale: false
    }
  }

  componentDidMount() {
    this.getRoleList()
  }

  // create roles
  createRoles = () => {
    this.setState({
      visibale: true
    })
  }

  getRoleList = async () => {
    let result = await window.$http.MovieApi.getRoleList()
    console.log(result)
    if (result.code !== 0) return
    this.setState({
      UserRightsData: [...result.result.itemList]
    })
  }
  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys)
    this.setState({ selectedRowKeys })
  }
  confirmRoles = () => {
    this.getRoleList()
    this.setState({
      visibale: false
    })
  }

  render() {
    const { selectedRowKeys } = this.state
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      type: 'radio'
    }
    const columns = [
      {
        title: 'User ID',
        dataIndex: 'id',
        key: 'id'
      },
      {
        title: 'Role Name',
        dataIndex: 'roleName',
        key: 'roleName'
      },
      {
        title: 'Create Time',
        dataIndex: 'createTime',
        key: 'createTime'
      },
      {
        title: 'State',
        dataIndex: 'state',
        key: 'state',
        render(state) {
          let defaultState = state === 0 ? false : true
          return <Switch disabled defaultChecked={defaultState}></Switch>
        }
      },
      {
        title: 'Authorize Time',
        dataIndex: 'authorizeTime',
        key: 'authorizeTime'
      },
      {
        title: 'Authorize User',
        dataIndex: 'authorizeUser',
        key: 'authorizeUser'
      }
    ]

    return (
      <div>
        <Card>
          <Button type="primary" onClick={this.createRoles}>
            Create Roles
          </Button>
          <Button type="primary" style={{ marginLeft: 20, marginRight: 20 }}>
            Set Rights
          </Button>
          <Button type="primary">Authorize User</Button>
        </Card>

        <Card>
          <Table
            rowKey="id"
            dataSource={this.state.UserRightsData}
            columns={columns}
            rowSelection={rowSelection}
          />
        </Card>
        <Modal
          title="Create Roles"
          onOk={this.confirmRoles}
          visible={this.state.visibale}
          onCancel={() => {
            this.setState({
              visibale: false
            })
          }}
        >
          <FormLayoutWrap
            wrappedComponentRef={inst => (this.FormLayoutWrap = inst)}
          ></FormLayoutWrap>
        </Modal>
      </div>
    )
  }
}

class FormLayout extends Component {
  render() {
    const FormItemLayout = {
      labelCol: {
        xs: { span: 6 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 18 },
        sm: { span: 18 }
      }
    }
    return (
      <Form>
        {/* wrappedComponentRef={(inst) => this.FormLayoutWrap = inst} */}
        <FormItem {...FormItemLayout} label="User Name">
          <Input placeholder="Please enter user name"></Input>
        </FormItem>
        <FormItem {...FormItemLayout} label="Roles">
          <Select placeholder="Please select state">
            <Option value="admin">Open</Option>
            <Option value="user">Close</Option>
          </Select>
        </FormItem>
      </Form>
    )
  }
}
const FormLayoutWrap = Form.create({})(FormLayout)
export default UserRights
