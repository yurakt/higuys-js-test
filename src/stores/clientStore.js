import { observable } from 'mobx'

import Client from './client'

class ClientStore {

  @observable list = []
  @observable client = undefined

  create = () => {
    if (!this.client) {
      this.client = new Client()
    }
  }

  destroy = () => {
    this.client = undefined
  }

  add = () => {
    if (this.client && (this.client.name || this.client.phone || this.client.email)) {
      const index = this.list.findIndex((item) => item.id === this.client.id)
      if (index === -1) {
        this.list.push(this.client)
      } else {
        this.list[index] = this.client
        console.log('index', this.list)
      }
      this.client = undefined
    }
  }

  edit = (client) => {
    if (client) {
      this.client = { ...client }
    }
  }

  remove = (id) => {
    const i = this.list.findIndex((client) => client.id === id)
    if (i !== -1) {
      this.list.splice(i, 1)
    }
  }
}

export default new ClientStore()