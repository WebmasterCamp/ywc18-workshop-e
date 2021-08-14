<template lang="pug">
.test-interactive
  InteractiveApp(:dataset="interactiveDataset" @done="onDone")
</template>

<script>
import Vue from 'vue'
import InteractiveApp from '~/components/InteractiveApp.vue'

export default Vue.extend({
  components: {
    InteractiveApp
  },
  data: () => ({
    interactiveDataset: [
      {
        image: '/ia/test-01.png',
        description: '',
        points: [
          { x: 25, y: 50, size: 24 }
        ]
      },
      {
        image: '/ia/test-02.png',
        description: '',
        points: [
          { x: 120, y: 150, size: 36 }
        ]
      }
    ]
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
