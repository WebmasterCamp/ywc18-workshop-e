<template lang="pug">
  //- .container.max-w-container.mx-auto.w-full
  //-   .container.max-w-container.mx-auto.w-full
  //-     .text-5xl Key Tech
  //-     .text-3xl คือกุญแจที่จะเชื่อมคุณให้เข้ากับโลกเทคโนโลยีได้ง่ายมากยิ่งขึ้น
  //-   .max-w-container.mx-auto.w-full
  //-     #interrest-lesson.max-w-container.mx-auto.w-full
  //-       .text-3xl บทเรียนที่น่าสนใจ
  //-       Content
  //-     #popular
  //-       .text-3xl หมวดหมู่ยอดนิยม
  .container.max-w-container.mx-auto.w-full.pb-12.px-4
    //- CTAContact
    #search.mb-12
      SearchBar
    .grid.grid-cols-3.gap-4
      .col-span-2
        Content
      div
        .mb-4
          Content
        div
          Content
    hr.text-3xl.m-2.my-8
    .grid.grid-cols-3.m-2.gap-4
      .text-3xl Google
      div
        Content
      div
        Content
    hr.text-3xl.m-2.my-8
    .grid.grid-cols-3.m-2.gap-4
      .text-3xl Zoom
      div
        Content
      div
        img.mb-4(src="~/assets/test.png")
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
