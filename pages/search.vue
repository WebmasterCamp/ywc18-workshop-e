<template lang="pug">
.search-view
  .max-w-container.w-full.px-4.mx-auto
    .border-b.py-4.mb-8
      p ผลการค้นหาคำว่า {{$route.query.q}} พบ {{searchResult.length}} บทความ
    template(v-if="searchResult.length > 0")
      .w-64
        Content(isSmall to="/content/zoom" title="วิธีใช้ Zoom Meeting สำหรับประชุมงานอย่างมืออาชีพ")
    template(v-else)
      p ไม่พบการค้นหา
  //- filtered list ของการค้นหา
</template>

<script>
import Vue from 'vue'
import Fuse from 'fuse.js'
import contentOutline from '~/assets/content-outline.js'
import Content from '~/components/Content.vue'

export default Vue.extend({
  computed: {
    searchResult () {
      const term = this.$route.query.q

      const options = {
        keys: ['searchKeywords']
      }
      const fuse = new Fuse(contentOutline.contents, options)
      const res = fuse.search(term)
      return res.map(r => r.item) // array ของ บทความที่เกี่ยวข้อง
    }
  },
  components: {
    Content
  }
})
</script>

<style lang="scss">
// .<id> {}
</style>
