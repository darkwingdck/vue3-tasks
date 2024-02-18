import { createStore } from 'vuex'

import { DISABLED_SORT_PROPS } from './constants'

import storeData from './storeData.json'

export default () => createStore({
  state() {
    return {
      users: storeData.users,
    }
  },

  mutations: {
    setUsers(state, newUsers) {
      state.users = newUsers
    },
  },

  actions: {
    sortUsers({ state, commit }, { sortBy, sortDesc }) {
      if (DISABLED_SORT_PROPS.includes(sortBy)) return;

      const sortedUsers = state.users.sort(
        (user1, user2) => {
          if (sortDesc) {
            [user1, user2] = [user2, user1]
          }

          return String(user2[sortBy]).localeCompare(String(user1[sortBy]))
        },
      )
      commit('setUsers', sortedUsers)
    },
  },
})
