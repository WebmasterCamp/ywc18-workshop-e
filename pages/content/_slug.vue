<template lang="pug">
.content-view
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
