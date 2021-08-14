<template lang="pug">
.w-full.max-w-container.mx-auto
  nuxt-link.text-xl.mx-2.mt-8.flex.items-center.justify-start.text-gray-900.px-4.py-4.leading-none.text-center(to="/content/zoom"
        class="hover:shadow-lg hover:bg-white-400 hover:underline" style="color: #0A0A75"
        ) < กลับไปหน้าบทความ
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
  }
})
</script>

<style lang="scss">
// .test-interactive {}
</style>
