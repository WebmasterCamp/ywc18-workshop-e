<template lang="pug">
.search-view
  p {{searchResults}}
  //- filtered list ของการค้นหา
</template>

<script>
import Vue from 'vue'
import Fuse from 'fuse.js'
import contentOutline from '~/assets/content-outline.js'

export default Vue.extend({
  computed: {
    searchResults () {
      const term = this.$route.query.q

      const options = {
        keys: ['searchKeywords']
      }
      const fuse = new Fuse(contentOutline.contents, options)
      const res = fuse.search(term)
      return res.map(r => r.item) // array ของ บทความที่เกี่ยวข้อง
    }
  }
})
</script>

<style lang="scss">
// .<id> {}
</style>
