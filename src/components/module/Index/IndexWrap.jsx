import React, { Component } from 'react'
import { Button, Checkbox } from 'antd'

import IndexClss from './IndexWrap.module.scss'

export class IndexWrap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList: [
        {
          title: '现在到以后',
          checked: false
        },
        {
          title: '这一路走来',
          checked: false
        },
        {
          title: '刻画的样子',
          checked: true
        },
        {
          title: '谁的王子',
          checked: false
        },
        {
          title: '自己的寂寞',
          checked: true
        }
      ]
    }
  }

  render() {
    return (
      <div className={IndexClss.index_wrap_layout}>
        <div className={IndexClss.main_title}>To Do List</div>
        <div>
          <input ref="InputWrap" type="text" />{' '}
          <Button
            type="primary"
            onClick={() => {
              this.AddList()
            }}
          >
            Add
          </Button>
        </div>
        <hr />
        <div className={IndexClss.content}>
          待办事项
          <ul>
            {this.state.todoList.map((item, index) => {
              if (!item.checked) {
                return (
                  <li key={index}>
                    <Checkbox
                      onClick={() => {
                        this.handlerSelect(index)
                      }}
                      defaultChecked={item.checked}
                      onChange={this.changeSelect(item)}
                    >
                      {item.title}
                    </Checkbox>
                    <Button
                      onClick={() => {
                        this.DeleteList(index)
                      }}
                      type="danger"
                    >
                      Delete
                    </Button>
                  </li>
                )
              } else {
                return ''
              }
            })}
          </ul>
        </div>
        <div className={IndexClss.content}>
          已完成事项
          <ul>
            {this.state.todoList.map((item, index) => {
              if (item.checked) {
                return (
                  <li key={index}>
                    <Checkbox
                      onClick={() => {
                        this.handlerSelect(index)
                      }}
                      defaultChecked={item.checked}
                      onChange={this.changeSelect(item)}
                    >
                      {item.title}
                    </Checkbox>
                    <Button
                      onClick={() => {
                        this.DeleteList(index)
                      }}
                      type="danger"
                    >
                      Delete
                    </Button>
                  </li>
                )
              } else {
                return ''
              }
            })}
          </ul>
        </div>
      </div>
    )
  }

  AddList() {
    let str = this.refs.InputWrap.value
    if (!str) return
    console.log(str)

    let tempArr = this.state.todoList
    tempArr.push({
      title: str,
      checked: false
    })
    this.setState({
      todoList: tempArr
    })
    this.refs.InputWrap.value = ''
  }
  DeleteList(index) {
    let tempArr = this.state.todoList
    tempArr.splice(index, 1)
    this.setState({
      todoList: [...tempArr]
    })
  }
  changeSelect() {
    // console.log(value)
    return
  }
  handlerSelect(index) {
    console.log(index)
    let tempArr = this.state.todoList
    tempArr[index].checked = !tempArr[index].checked
    this.setState({
      todoList: tempArr
    })
  }
}

export default IndexWrap
