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
      console.log('done interactive')
    }
  }
})
</script>

<style lang="scss">
// .test-interactive {}
</style>
