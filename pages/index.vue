<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <h1>Hello World!!</h1>
      <p>{{ message }}</p>
      <nuxt-link to="/settings">設定</nuxt-link>
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      message: 'これはVueのDataおぷじぇくとです。',
    }
  },
}
</script>
