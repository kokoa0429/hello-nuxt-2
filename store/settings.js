export const state = () => ({
  userName: 'default User Name',
  password: '',
  age: 10,
})

export const mutations = {
  setUserName(state, data) {
    state.userName = data
  },
  setPassword(state, data) {
    state.password = data
  },
}

export const actions = {
  uploadImage({ state }, data) {
    setTimeout(() => {
      alert('Hi!: ' + state.userName)
    }, 3000)
  },
  addUser({ state }) {
    this.$axios.$post('http://localhost:3000/addUser', {
      userName: state.userName,
      password: state.password,
    })
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
