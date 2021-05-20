<template>
  <div>
    <h1>設定 - {{ getUserDecoratedName() }}</h1>
    <h3>ユーザ名: {{ userName }}</h3>
    <h3>パスワード: {{ password }}</h3>
    <v-text-field
      outlined
      hide-details
      dense
      :value="userName"
      @input="
        (data) => {
          setUserName(data)
        }
      "
    ></v-text-field>
    <v-text-field
      outlined
      hide-details
      dense
      :value="password"
      @input="
        (data) => {
          setPassword(data)
        }
      "
    ></v-text-field>
    <v-btn @click="addUser()">アップロード</v-btn>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'

export default {
  name: 'Settings',
  computed: {
    ...mapState('settings', ['userName', 'password']),
  },
  methods: {
    ...mapMutations('settings', ['setUserName', 'setPassword']),
    ...mapGetters('settings', ['getBirthYear', 'getUserDecoratedName']),
    ...mapActions('settings', ['addUser']),
  },
}
</script>

<style scoped></style>
