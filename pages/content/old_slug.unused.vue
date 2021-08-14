<template lang="pug">
.content-view
  <font-awesome-icon :icon="['fas', 'camera']" />
  .px-4.w-full.max-w-container.mx-auto(v-if="content")
    .text-3xl.font-bold {{content.title}}
    p {{content}}
</template>

<script>
import Vue from 'vue'
import content from '~/assets/content.js'

export default Vue.extend({
  data: () => ({
    contentAll: content
  }),
  computed: {
    content () {
      if (this.$route.params.slug in this.contentAll) {
        return this.contentAll[this.$route.params.slug]
      }
      return undefined
    }
  }
})
</script>

<style lang="scss">
// .<id> {}
</style>
