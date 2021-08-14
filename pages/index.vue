<template lang="pug">
  .container.max-w-container.mx-auto.w-full.pb-12.px-4
    #search.mb-8
      SearchBar
    .grid.grid-cols-3
      .col-span-2
        Content
      div
        .mb-4
          Content
        div
          Content
    hr.text-3xl.m-2.my-8
    .grid.grid-cols-3.m-2.bg-gray-200
      .flex.items-center.justify-center
        img(src="@/assets/google.png")
        .text-3xl.text-center Google
      div
        Content
      div
        Content
    hr.text-3xl.m-2.my-8
    .grid.grid-cols-3.m-2.bg-gray-200
      .flex.items-center.justify-center
        img(src="@/assets/zoom.png")
        .text-3xl.text-center Zoom
      div
        Content
      div
        Content
</template>

<script>
import Vue from 'vue'
import SearchBar from '~/components/SearchBar.vue'
import CTAContact from '~/components/CTAContact.vue'

export default Vue.extend({
  components: {
    SearchBar,
    CTAContact
  }
})
</script>
