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
                .text-xl โปรแกรมซูม (Zoom Meeting) เป็นเครื่องมือพูดคุยผ่านวิดีโอ ส่งภาพและเสียง ให้แก่ผู้ร่วมประชุม ประกอบด้วย ฟังก์ชันที่ใช้งานง่าย เลือกเปลี่ยนภาพพื้นหลัง เพื่อพูดคุยให้เข้ากับโอกาสได้ตามความเหมาะสม รวมถึงใช้เรียนออนไลน์ได้ไม่สะดุด วิธีการเข้าใช้งาน Zoom Meeting ทำได้ง่าย ทั้งจากในมือถือ และคอมพิวเตอร์
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
            .text-2xl 2. คลิกที่ “Sign In” เพื่อสมัครสมาชิกก่อนเข้าใช้งาน หรือกด “Join” เพื่อเข้าใช้งานครั้งเดียว โดยไม่ต้องสมัครสมาชิก
            .flex.justify-center: img.mb-4(style="max-width: 625px;" src="~/assets/zoom-gif/2.gif").p-5
            .text-2xl 3. คลิกที่ “Sign In” เพื่อสมัครสมาชิกก่อนเข้าใช้งาน หรือกด “Join” เพื่อเข้าใช้งานครั้งเดียว โดยไม่ต้องสมัครสมาชิก
            .flex.justify-center: img.mb-4(style="max-width: 625px;" src="~/assets/zoom-gif/3.gif").p-5
            .text-2xl 4. คลิกที่ “Sign In” เพื่อสมัครสมาชิกก่อนเข้าใช้งาน หรือกด “Join” เพื่อเข้าใช้งานครั้งเดียว โดยไม่ต้องสมัครสมาชิก
            .flex.justify-center: img.mb-4(style="max-width: 625px;" src="~/assets/zoom-gif/4.gif").p-5
            .text-2xl 5. คลิกที่ “Sign In” เพื่อสมัครสมาชิกก่อนเข้าใช้งาน หรือกด “Join” เพื่อเข้าใช้งานครั้งเดียว โดยไม่ต้องสมัครสมาชิก
            .flex.justify-center: img.mb-4(style="max-width: 625px;" src="~/assets/zoom-gif/5.gif").p-5
            .text-2xl 6. คลิกที่ “Sign In” เพื่อสมัครสมาชิกก่อนเข้าใช้งาน หรือกด “Join” เพื่อเข้าใช้งานครั้งเดียว โดยไม่ต้องสมัครสมาชิก
            .flex.justify-center: img.mb-4(style="max-width: 625px;" src="~/assets/zoom-gif/6.gif").p-5
            .text-2xl 7. คลิกที่ “Sign In” เพื่อสมัครสมาชิกก่อนเข้าใช้งาน หรือกด “Join” เพื่อเข้าใช้งานครั้งเดียว โดยไม่ต้องสมัครสมาชิก
            .flex.justify-center: img.mb-4(style="max-width: 625px;" src="~/assets/zoom-gif/7.gif").p-5
            .text-2xl 8. คลิกที่ “Sign In” เพื่อสมัครสมาชิกก่อนเข้าใช้งาน หรือกด “Join” เพื่อเข้าใช้งานครั้งเดียว โดยไม่ต้องสมัครสมาชิก
            .flex.justify-center: img.mb-4(style="max-width: 625px;" src="~/assets/zoom-gif/8.gif").p-5
            .text-2xl 9. คลิกที่ “Sign In” เพื่อสมัครสมาชิกก่อนเข้าใช้งาน หรือกด “Join” เพื่อเข้าใช้งานครั้งเดียว โดยไม่ต้องสมัครสมาชิก
            .flex.justify-center: img.mb-4(style="max-width: 625px;" src="~/assets/zoom-gif/9.gif").p-5
            .text-2xl.text-center.text-gray-900 ติดปัญหาการใช้งาน
            .flex.items-center.justify-center.mt-8
                nuxt-link.py-4.px-8.flex.items-center.text-gray-900.bg-gray-300.text-lg.rounded.leading-none(to="#"
                    class="hover:shadow-lg hover:bg-gray-200"
                    ) โทรหาฝ่ายบริการ
    .max-w-container.mx-auto.flex.items-center.justify-center
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
  }
})
</script>
