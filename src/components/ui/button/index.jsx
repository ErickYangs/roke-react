import React, { Component } from 'react'
import { Card, Button } from 'antd'
import BtnCss from './index.module.scss'

export class Buttonindex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Loading: true
    }
  }
  CloseLoading = () => {
    this.state.Loading
      ? this.setState({
          Loading: false
        })
      : this.setState({
          Loading: true
        })
  }
  render() {
    return (
      <div className={['full_height', BtnCss.button_wrap_layout].join(' ')}>
        <Card title="Basic Button">
          <Button type="primary">Ontology Btn</Button>
          <Button type="danger">Ontology Btn</Button>
          <Button>Ontology Btn</Button>
          <Button type="dashed">Ontology Btn</Button>
          <Button disabled>Ontology Btn</Button>
        </Card>
        <Card title="Image Button">
          <Button icon="edit">Edit</Button>
          <Button icon="plus">Build</Button>
          <Button icon="delete">Delete</Button>
          <Button shape="circle" icon="search"></Button>
          <Button type="primary" icon="search">
            Search
          </Button>
        </Card>
        <Card title="Loading Button">
          <Button icon="edit" loading={this.state.Loading}>
            Edit
          </Button>
          <Button
            icon="close"
            type="danger"
            onClick={() => {
              this.CloseLoading()
            }}
          >
            Close Loading
          </Button>
        </Card>
      </div>
    )
  }
}

export default Buttonindex
