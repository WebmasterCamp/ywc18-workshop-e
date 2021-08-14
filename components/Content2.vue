<template lang="pug">
nuxt-link.block.p-4.content(:to="to" class="hover:shadow-lg")
  img.mb-4(src="~/assets/google-2.jpg")
  .text-3xl {{ title }}
  .text-xl(v-if="!isSmall") {{ describe }}
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    to: { type: String, default: '/' },
    imgsrc: { type: String, default: '~/assets/zoom-logo.png' },
    title: { type: String, default: 'ใช้ Google ยีงไง' },
    describe: { type: String, default: 'สอนวิธีการใช้ Google โดยง่าย สามารถทำตามได้' },
    isSmall: { type: Boolean }
  }
})
</script>
