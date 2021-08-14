<template lang="pug">
.content-view
  <font-awesome-icon :icon="['fas', 'camera']" />
  .w-full.max-w-container.mx-auto
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
