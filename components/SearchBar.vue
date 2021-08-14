<template lang="pug">
form.search-bar.flex.h-10(@submit.prevent="navigateOut")
  input.px-2.flex-1.border.border-primary-500(class="placeholder-primary-400" type="text" v-model="searchString" placeholder="ค้นหาปัญหาหรือบทเรียน")
  button.w-24.bg-primary-500.h-10.text-white.flex.items-center.justify-center(type="submit")
    font-awesome-icon(:icon="['fas', 'search']")
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    searchString: ''
  }),
  methods: {
    navigateOut () {
      this.$router.push({ path: '/search', query: { q: this.searchString } })
    }
  }
})
</script>

<style lang="scss">
// .search-bar {}
</style>
