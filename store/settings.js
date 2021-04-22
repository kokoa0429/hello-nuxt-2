export const state = () => ({
  userName: 'default User Name',
  age: 10,
})

export const mutations = {
  setUserName(state, data) {
    state.userName = data
  },
}

export const actions = {
  uploadImage({ state }, data) {
    setTimeout(() => {
      alert('Hi!: ' + state.userName)
    }, 3000)
  },
}

export const getters = {
  getUserDecoratedName(state) {
    return state.userName + 'さん'
  },
  getBirthYear(state) {
    return 2021 - state.age
  },
}
