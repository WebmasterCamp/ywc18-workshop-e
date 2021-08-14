<template lang="pug">
.w-full.max-w-container.mx-auto
  InteractiveApp(:dataset="interactiveDataset" @done="onDone")
</template>

<script>
import Vue from 'vue'
import InteractiveApp from '~/components/InteractiveApp.vue'

import interactiveData from '~/assets/interactive-data.js'

export default Vue.extend({
  components: {
    InteractiveApp
  },
  data: () => ({
    interactiveDataset: interactiveData.test
  }),
  methods: {
    onDone () {
      this.$router.push('/interactive-end')
    }
  },
  head: {
    title: 'ลองเล่น Zoom ทีละขั้นตอน'
  }
})
</script>

<style lang="scss">
// .test-interactive {}
</style>
