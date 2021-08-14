<template lang="pug">
div
  .container.max-w-container.mx-auto.w-full.pb-12.px-4
      #TITLE.mt-5
          .text-4xl วิธีใช้ Zoom Meeting สำหรับประชุมงานอย่างมืออาชีพ
          p เผยแพร่ 14 ส.ค. 2564
          div.mt-4
            img.h-8(src="~/assets/line-btn-mock.png")
            //- <div class="line-it-button" style="display: none;" data-lang="en" data-type="share-a" data-ver="3" :data-url="$route.fullpath" data-color="default" data-size="small" data-count="true"></div>
            //- <script src="https://www.line-website.com/social-plugins/js/thirdparty/loader.min.js" async="async" defer="defer"></script>
          //- .grid.grid-cols-2.gap-4
          //-     p ส่งต่อให้เพื่อนของคุณ
      hr.m-2
      #WHATIS.mt-5
          .container.max-w-container.mx-auto.w-full.p-8.bg-gray-200
              .text-3xl Zoom คืออะไร ?
              .text-xl โปรแกรมซูม (Zoom Meeting) คือเครื่องมือวิดีโอแชทสำหรับการประชุมออนไลน์หรือการเรียนรู้ออนไลน์ สามารถส่งรูปภาพและเสียงให้กับผู้ร่วมประชุม รวมถึงคุณสมบัติที่ใช้งานง่ายทั้งเปลี่ยนภาพพื้นหลัง สามารถเชื่อมต่อผ่านโทรศัพท์มือถือ และ โปรแกรม Zoom ในคอมพิวเตอร์ได้
          .flex.items-center.justify-center.mt-8
              nuxt-link.py-4.px-6.flex.items-center.text-gray-900.bg-orange.text-xl.rounded.leading-none.font-semibold(
                to="/interactive"
                class="hover:shadow-lg hover:bg-white-400"
                ) ลองเล่น Zoom ทีละขั้นตอน

      .flex.items-center.justify-center.my-12.sticky.bg-gray-100.py-4(style="top: 3rem;")
        .text-lg.mr-12 ฟังวิธีใช้งาน
        div(style="width: 480px;")
          audio(controls='' preload='none' style='width:480px;')
            source(src='/zoomSound.mp3' type='audio/mp4')

      #CONTENT.mt-5
          .text-3xl.mb-6 ใช้ Zoom บน Desktop
          .text-2xl 1. เปิด Google Chrome และเข้าลิงก์ Zoom.us
          .flex.justify-center: img.mb-4(style="max-width: 625px;" src="~/assets/zoom-gif/1.gif").p-5
          .text-2xl 2. กดที่บรรทัดแรก พิมพ์ใส่รหัสหรือลิงค์ที่ได้รับมา
          .flex.justify-center: img.mb-4(style="max-width: 625px;" src="~/assets/zoom-gif/2.gif").p-5
          .text-2xl 3. บรรทัดต่อไป พิมพ์ชื่อตัวเอง (เป็นชื่อที่จะใช้แสดงตัวตนของเราในการประชุม)
          .flex.justify-center: img.mb-4(style="max-width: 625px;" src="~/assets/zoom-gif/3.gif").p-5
          .text-2xl 4. กดเข้า join บรรทัดถัดมา เพื่อเข้าการประชุม
          .flex.justify-center: img.mb-4(style="max-width: 625px;" src="~/assets/zoom-gif/4.gif").p-5
          .text-2xl 5. ปุ่มแรก เริ่มจากด้านซ้ายล่าง คือปุ่มเปิดปิดไมค์ เส้นสีแดงคั่นกลางไมค์ = ไมค์ปิดอยู่ ไมค์สีเทา = ไมค์เปิดอยู่
          .flex.justify-center: img.mb-4(style="max-width: 625px;" src="~/assets/zoom-gif/5.gif").p-5
          .text-2xl 6. ปุ่มที่ 2 คือ การเปิดปิด กล้อง จะคล้าย ๆ ปุ่มแรกไมค์ตรง เส้นสีแดงคั่นกลางกล้อง = กล้องปิดอยู่ กล้องสีเทา = กล้องเปิดอยู่
          .flex.justify-center: img.mb-4(style="max-width: 625px;" src="~/assets/zoom-gif/6.gif").p-5
          .text-2xl
            | 7. - ปุ่ม 3 หรือ participants คือจำนวนคนเข้าร่วม <br>
            |- หากเราอยากเห็นใครอยู่ในห้องประชุมบ้างให้คลิกที่ ปุ่ม participant รายชื่อ <br>
            |- ปุ่ม 4 Share screen แสดงหน้าจอที่เราต้องการจะโชว์ต่อหน้าผู้ประชุม
            | ขั้นตอน <br>
            |- กดที่ปุ่มแชร์สีเขียว <br>
            |- เลือกหน้าจอที่เราต้องการจะแชร์ <br>
            |- กดปุ่มสีฟ้าด้านล่างขวาเพื่อแชร์ภาพหน้าจอสู่ห้องประชุม  <br>
            |- หากอยากกดยกเลิกแชร์หน้าจอของเรา ให้กดปุ่มสีแดงด้านบน หน้าจอจะกลับมาเป็น <br>
          .flex.justify-center: img.mb-4(style="max-width: 625px;" src="~/assets/zoom-gif/7.gif").p-5
          .text-2xl 8. หากเราอยากออกจากการประชุมหรืออยากยกเลิกให้ คลิกที่ปุ่ม สีแดง Leave
          .flex.justify-center: img.mb-4(style="max-width: 625px;" src="~/assets/zoom-gif/8.gif").p-5
          .text-2xl 9. หากเราต้องการกดยกเลิกการประชุมให้กดปุ่ม สีแดง การประชุมจะถูกยกเลิกทันที <br> ถ้ากดปุ่มสีเทา = หมายความว่าเราจะออกจากการประชุมคนเดียว แต่การประชุมจะดำเนินต่อไป
          .flex.justify-center: img.mb-4(style="max-width: 625px;" src="~/assets/zoom-gif/9.gif").p-5
          //- .text-2xl.text-center.text-gray-900 ติดปัญหาการใช้งาน
          //- .flex.items-center.justify-center.mt-8
          //-     nuxt-link.py-4.px-8.flex.items-center.text-gray-900.bg-gray-300.text-lg.rounded.leading-none(to="#"
          //-         class="hover:shadow-lg hover:bg-gray-200"
          //-         ) โทรหาฝ่ายบริการ
  //- .w-full.max-w-container.mx-auto.flex.items-center.justify-center(style="width: 640px;")
  //-   Disqus
  .w-full.max-w-container.mx-auto.flex.items-center.justify-center
    CTAContact
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
  },
  head: {
    title: 'วิธีใช้ Zoom Meeting สำหรับประชุมงานอย่างมืออาชีพ'
  }
})
</script>
