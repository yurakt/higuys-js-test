import { observable } from 'mobx'
import shortid from 'shortid'

class Client {
  id = ''
  @observable name = ''
  @observable phone = ''
  @observable email = ''
  @observable lastVisit = ''
  @observable paymentSum = ''
  @observable visitsAmount = ''
  @observable abonement = ''

  constructor(name, phone, email) {
    this.name = name
    this.phone = phone
    this.email = email
    this.id = shortid.generate()
  }
}

class Clients {

  @observable list = []

  add({ name, phone, email }) {
    const client = new Client(name, phone, email)
    list.push(client)
  }

  edit(id) {

  }

  remove(id) {
    const i = this.list.findIndex((client) => client.id === id)
    if (i !== -1) {
      this.list.splice(i, 1)
    }
  }
}

export default new Clients()