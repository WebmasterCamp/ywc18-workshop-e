<template lang="pug">
.interactive-app
  template(v-for="(step, i) in dataset")
    ClickableCanvas(v-if="i === currentStep" :img="step.image" :points="step.points" @correct="progressStep")
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
      if (this.currentStep < this.dataset.length - 1) {
        this.currentStep += 1
      } else {
        this.$emit('done')
      }
    }
  },
  data: () => ({
    currentStep: 0
  })
})
</script>

<style lang="scss">
// .interactive-app {}
</style>
