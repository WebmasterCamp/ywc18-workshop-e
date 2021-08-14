<template lang="pug">
nuxt-link.block.p-4.content(:to="to" class="hover:shadow-lg")
  img.mb-4(:src="imgsrc")
  .text-3xl {{ title }}
  .text-xl(v-if="!isSmall") {{ describe }}
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    to: { type: String, default: '/' },
    imgsrc: { type: String, default: '/zoom-logo.png' },
    title: { type: String, default: 'lorem ipsum' },
    describe: { type: String, default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    isSmall: { type: Boolean }
  }
})
</script>
