<template lang="pug">
.interactive-app.bg-gray-200
  template(v-for="(step, i) in dataset")
    template(v-if="i === currentStep")
      .text-center.text-xl.font-semibold.mt-4.mb-4 {{ step.description }}
      .flex.items-center.mx-auto(style="max-width: 720px;")
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
