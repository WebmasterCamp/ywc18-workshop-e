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
            .container.max-w-container.mx-auto.w-full.pb-12.p-5.bg-gray-200
                .text-4xl Zoom คืออะไร ?
                .text-2xl โปรแกรมซูม (Zoom Meeting) เป็นเครื่องมือพูดคุยผ่านวิดีโอ ส่งภาพและเสียง ให้แก่ผู้ร่วมประชุม ประกอบด้วย ฟังก์ชันที่ใช้งานง่าย เลือกเปลี่ยนภาพพื้นหลัง เพื่อพูดคุยให้เข้ากับโอกาสได้ตามความเหมาะสม รวมถึงใช้เรียนออนไลน์ได้ไม่สะดุด วิธีการเข้าใช้งาน Zoom Meeting ทำได้ง่าย ทั้งจากในมือถือ และคอมพิวเตอร์
            .flex.items-center.justify-center.mt-8
                nuxt-link.h-10.px-6.flex.items-center.text-gray-900.bg-orange.text-2xl.rounded.leading-none(to="/interactive"
                  class="hover:shadow-lg hover:bg-white-400"
                  ) ลองเล่น Zoom ทีละขั้นตอน
        //- audio(controls='' preload='none' style='width:480px;')
        //-     source(src='@/static/zoomSound.m4a' type='audio/mp4')
        //-     p Your browser does not support HTML5 audio.

        #CONTENT.mt-5
            .text-4xl ใช้ Zoom บน Desktop
            .text-2xl 1. เปิด Google Chrome และเข้าลิงก์ Zoom.us
            .px-16: img.mb-4(src="~/assets/zoom-gif/1.gif").p-5
            .text-2xl 2. คลิกที่ “Sign In” เพื่อสมัครสมาชิกก่อนเข้าใช้งาน หรือกด “Join” เพื่อเข้าใช้งานครั้งเดียว โดยไม่ต้องสมัครสมาชิก
            .px-16: img.mb-4(src="~/assets/zoom-gif/2.gif").p-5
            .text-2xl 3. คลิกที่ “Sign In” เพื่อสมัครสมาชิกก่อนเข้าใช้งาน หรือกด “Join” เพื่อเข้าใช้งานครั้งเดียว โดยไม่ต้องสมัครสมาชิก
            .px-16: img.mb-4(src="~/assets/zoom-gif/3.gif").p-5
            .text-2xl 4. คลิกที่ “Sign In” เพื่อสมัครสมาชิกก่อนเข้าใช้งาน หรือกด “Join” เพื่อเข้าใช้งานครั้งเดียว โดยไม่ต้องสมัครสมาชิก
            .px-16: img.mb-4(src="~/assets/zoom-gif/4.gif").p-5
            .text-2xl 5. คลิกที่ “Sign In” เพื่อสมัครสมาชิกก่อนเข้าใช้งาน หรือกด “Join” เพื่อเข้าใช้งานครั้งเดียว โดยไม่ต้องสมัครสมาชิก
            .px-16: img.mb-4(src="~/assets/zoom-gif/5.gif").p-5
            .text-2xl 6. คลิกที่ “Sign In” เพื่อสมัครสมาชิกก่อนเข้าใช้งาน หรือกด “Join” เพื่อเข้าใช้งานครั้งเดียว โดยไม่ต้องสมัครสมาชิก
            .px-16: img.mb-4(src="~/assets/zoom-gif/6.gif").p-5
            .text-2xl 7. คลิกที่ “Sign In” เพื่อสมัครสมาชิกก่อนเข้าใช้งาน หรือกด “Join” เพื่อเข้าใช้งานครั้งเดียว โดยไม่ต้องสมัครสมาชิก
            .px-16: img.mb-4(src="~/assets/zoom-gif/7.gif").p-5
            .text-2xl 8. คลิกที่ “Sign In” เพื่อสมัครสมาชิกก่อนเข้าใช้งาน หรือกด “Join” เพื่อเข้าใช้งานครั้งเดียว โดยไม่ต้องสมัครสมาชิก
            .px-16: img.mb-4(src="~/assets/zoom-gif/8.gif").p-5
            .text-2xl 9. คลิกที่ “Sign In” เพื่อสมัครสมาชิกก่อนเข้าใช้งาน หรือกด “Join” เพื่อเข้าใช้งานครั้งเดียว โดยไม่ต้องสมัครสมาชิก
            .px-16: img.mb-4(src="~/assets/zoom-gif/9.gif").p-5
            .text-2xl.text-center.text-gray-900 ติดปัญหาการใช้งาน
            .flex.items-center.justify-center.mt-8
                nuxt-link.h-10.px-6.flex.items-center.text-gray-900.bg-gray-extend.text-2xl.rounded.leading-none(to="#"
                    class="hover:shadow-lg hover:bg-white-400"
                    ) โทรหาฝ่ายบริการ
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
