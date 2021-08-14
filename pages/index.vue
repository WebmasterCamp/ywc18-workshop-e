<template lang="pug">
div
  .container.max-w-container.mx-auto.w-full.pb-12.px-4
    #search.mb-8.mt-6
      SearchBar
    .grid.grid-cols-3
      .col-span-2
        Content(to="/content/zoom" title="ใช้ Zoom ยังไง" )
      div
        .mb-4
          Content(title="ทำธุรกรรมออนไลน์ยังไง")
        div
          Content(title="ทำข้อความสวัสดีวันจันทร์")
    hr.text-3xl.m-2.my-8
  .bg-gray-100
    .max-w-container.mx-auto.w-full
      .grid.grid-cols-3.m-2.py-6
        .flex.items-center.justify-center
          .w-16.mr-4: img(src="@/assets/google.png")
          .text-3xl.text-center Google
        div
          Content(title="ใช้ Google ยังไง")
        div
          Content(title="ใช้ Google ยังไง")
  .max-w-container.mx-auto.w-full
    hr.text-3xl.m-2.my-8
  .bg-gray-100
    .max-w-container.mx-auto.w-full
      .grid.grid-cols-3.m-2.py-6
        .flex.items-center.justify-center
          .w-16.mr-4: img(src="@/assets/zoom.png")
          .text-3xl.text-center Zoom
        div
          Content(title="ใช้ Zoom ยังไง")
        div
          Content(title="ใช้ Zoom ยังไง")
  .relative.inset-0.w-full(style="background: #080975;")
    .relative.inset-0.flex
      .flex-1
      img(src="~/assets/cta-first-page.jpg")
    .absolute.inset-0.max-w-container.w-full.mx-auto
      .flex.flex-col.text-white.h-full.p-8
        .font-semibold.text-xl KeyTech ช่วยได้
        p.mt-2 ติดปัญหาการใช้งาน ไม่เข้าใจโปรแกรม<br />โทรติดต่อฝ่ายบริการของเรา คอยดูแลคุณตลอด 24 ชม. ถามได้ทุกคำถาม
        .flex-1
        .flex
          .w-8.text-lg.text-white: font-awesome-icon(:icon="['fas', 'phone']")
          .flex-1 โทร 080-0000000
</template>

<script>
import Vue from 'vue'
import SearchBar from '~/components/SearchBar.vue'
import CTAContact from '~/components/CTAContact.vue'
import Content from '~/components/Content.vue'

export default Vue.extend({
  components: {
    SearchBar,
    CTAContact,
    Content
  }
})
</script>
