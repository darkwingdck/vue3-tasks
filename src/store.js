import { createStore } from 'vuex'

import storeData from './storeData.json'

export default () => createStore({
  state() {
    return {
      users: storeData.users,
    }
  }
})
