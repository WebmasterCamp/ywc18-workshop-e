<template lang="pug">
nuxt-link.block.p-4.content(:to="to" class="hover:shadow-lg")
  img.mb-4(src="~/assets/test.png")
  .text-3xl ใช้ Zoom ยังไง
  .text-xl Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    to: { type: String, default: '/' }
  }
})
</script>
