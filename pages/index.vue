<template lang="pug">
div
  .container.max-w-container.mx-auto.w-full.pb-12.px-4
    #search.mb-8.mt-6
      SearchBar
    .grid.grid-cols-3
      .col-span-2
        Content(to="/content/zoom" title="วิธีใช้ Zoom Meeting สำหรับประชุมงานอย่างมืออาชีพ" describe="คู่มือขั้นตอนการใช้ Zoom ในการประชุม พร้อมคลิปเสียงอธิบายเข้าใจง่าย" )
      div
        .mb-4
          Content(title="สอนใส่ข้อความในรูปภาพ “สวัสดีวันจันทร์”" imgsrc="/monday.png" describe="สอนใส่ข้อความในรูปภาพ “สวัสดีวันจันทร์”คลิปสอนบรรยายการใส่รูปภาพ" to="/content/image-text")
        div
          Content(title="Microsoft Teams" imgsrc="/meets.png" describe="คู่มือขั้นตอนการใช้ Microsoft Teams ในการประชุมและทำงานออนไลน์พร้อมคลิปเสียงอธิบายเข้าใจง่าย")
    hr.text-3xl.m-2.my-8
  .bg-gray-100
    .max-w-container.mx-auto.w-full
      .grid.grid-cols-3.m-2.py-6
        .flex.items-center.justify-center
          .w-16.mr-4: img(src="@/assets/google.png")
          .text-3xl.text-center Google
        div
          Content(title="Google Docs" imgsrc="/docs.jpg" describe="คู่มือขั้นตอนการใช้ Google Docs ในการเขียนรายงาน พร้อมคลิปเสียงอธิบายเข้าใจง่าย")
        div
          Content(title="Google Slide" imgsrc="/slide.jpg" describe="คู่มือขั้นตอนการใช้ Slide ในการทำสไลด์นำเสนอผลงาน พร้อมคลิปเสียงอธิบายเข้าใจง่าย")
  .max-w-container.mx-auto.w-full
    hr.text-3xl.m-2.my-8
  .bg-gray-100
    .max-w-container.mx-auto.w-full
      .grid.grid-cols-3.m-2.py-6
        .flex.items-center.justify-center
          //- .w-16.mr-4: img(src="@/assets/zoom.png")
          .px-4.text-xl.font-semibold.text-center รวมแอปสื่อสารตามเทรนด์ลูก ๆ
        div
          Content(title="Facebook" imgsrc="/facebook.jpeg" describe="คู่มือสอนใช้และเล่น Facebook เบื้องต้นพร้อมคลิปเสียงประกอบการสอนเข้าใจง่าย ใช้งานเป็นทันทีหลังเรียน")
        div
          Content(title="LINE"  imgsrc="/line.png" describe="คู่มือสอนใช้ LINE เบื้องต้นในการสื่อสารพร้อมคลิปเสียงประกอบการสอนเข้าใจง่าย ใช้งานเป็นทันทีหลังเรียน")
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
          .w-8.text-lg.text-white.transform.rotate-90.mt-1: font-awesome-icon(:icon="['fas', 'phone']")
          .flex-1 โทร 080-0000000
</template>

<script>
import Vue from 'vue'
import SearchBar from '~/components/SearchBar.vue'
import CTAContact from '~/components/CTAContact.vue'
import Content from '~/components/Content.vue'
import Content2 from '~/components/Content2.vue'

export default Vue.extend({
  components: {
    SearchBar,
    CTAContact,
    Content,
    Content2
  }
})
</script>
