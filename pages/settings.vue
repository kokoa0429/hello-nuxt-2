<template>
  <div>
    <h1>設定 - {{ getUserDecoratedName() }}</h1>
    <h3>ユーザ名: {{ userName }}</h3>
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
    <v-btn @click="uploadImage()">アップロード</v-btn>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'

export default {
  name: 'Settings',
  computed: {
    ...mapState('settings', ['userName']),
  },
  methods: {
    ...mapMutations('settings', ['setUserName']),
    ...mapGetters('settings', ['getBirthYear', 'getUserDecoratedName']),
    ...mapActions('settings', ['uploadImage']),
  },
}
</script>

<style scoped></style>
