<template lang="pug">
.search-view
  //- filtered list ของการค้นหา
</template>

<script>
import Vue from 'vue'
import contentOutline from '~/assets/content-outline.js'

export default Vue.extend({
  computed: {
    searchResults () {
      console.log(contentOutline)
      // do search
      return [] // array ของ บทความที่เกี่ยวข้อง
    }
  }
})
</script>

<style lang="scss">
// .<id> {}
</style>
