<template lang="pug">
.interactive-app
  template(v-for="step in dataset")
    ClickableCanvas(:img="step.image" :points="step.points" @correct="progressStep")
</template>

<script>
import Vue from 'vue'
import ClickableCanvas from '~/components/ClickableCanvas.vue'

export default Vue.extend({
  components: {
    ClickableCanvas
  },
  props: {
    dataset: {}
  },
  methods: {
    progressStep () {

    },
  }
})
</script>

<style lang="scss">
// .interactive-app {}
</style>
