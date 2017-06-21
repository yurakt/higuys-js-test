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
  @observable subscription = ''

  constructor() {
    this.id = shortid.generate()
  }
}

export default Client