import saveStorage from 'vuex-persistedstate'

export default ({ store }) => {
  saveStorage({
    paths: ['settings.userName'],
  })(store)
}
