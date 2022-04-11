<template>
  <div id="app">
    {{ msg }}
  </div>
</template>

<script>
import http from './http'
export default {
  name: 'App',
  data() {
    return {
      msg: 'default msg',
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const res = await http.get('/msg')
      this.msg = res.data
    },
  },
}
</script>

<style>
</style>
