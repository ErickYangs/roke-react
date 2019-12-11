import React, { Component } from 'react'

import { Table, Card } from 'antd'

export class BaseTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tableData: []
    }
  }

  componentDidMount() {
    this.getUserInfo()
  }

  // get userinfo
  getUserInfo = async () => {
    let result = await window.$http.MovieApi.getUserInfo()
    if (result.msg !== 'SUCCESS' || result.code !== 0) return
    let list = result.data.map(item => {
      item.key = item.id
      return item
    })
    this.setState({
      tableData: [...list]
    })
  }

  render() {
    const columns = [
      {
        title: 'UserName',
        dataIndex: 'name',
        key: 'name',
        align: 'center'
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        align: 'center'
      },
      {
        title: 'Sex',
        dataIndex: 'sex',
        key: 'sex',
        align: 'center',
        render: sex => <span>{sex === 0 ? '男' : '女'}</span>
      },
      {
        title: 'Date',
        dataIndex: 'datetime',
        key: 'datetime',
        align: 'center'
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        align: 'center'
      },
      {
        title: 'Job',
        dataIndex: 'job',
        key: 'job',
        align: 'center'
      },
      {
        title: 'Icon',
        dataIndex: 'img',
        key: 'img',
        align: 'center',
        render: img => <img src={img} alt="" />
      }
    ]
    return (
      <div>
        <Card>
          <Table dataSource={this.state.tableData} columns={columns} />
        </Card>
      </div>
    )
  }
}

export default BaseTable
