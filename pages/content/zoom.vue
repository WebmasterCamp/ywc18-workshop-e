<template lang="pug">
    .container.max-w-container.mx-auto.w-full.pb-12
        #TITLE.mt-5
            .text-4xl วิธีใช้ Zoom Meeting สำหรับประชุมงานอย่างมืออาชีพ
            p เผยแพร่ 14 ส.ค. 2564
            div.mt-4
              <div class="line-it-button" style="display: none;" data-lang="en" data-type="share-a" data-ver="3" :data-url="$route.fullpath" data-color="default" data-size="small" data-count="true"></div>
              <script src="https://www.line-website.com/social-plugins/js/thirdparty/loader.min.js" async="async" defer="defer"></script>
            //- .grid.grid-cols-2.gap-4
            //-     p ส่งต่อให้เพื่อนของคุณ
        hr.m-2
        #WHATIS.mt-5
            .container.max-w-container.mx-auto.w-full.pb-12.p-5.bg-gray-200
                .text-4xl Zoom คืออะไร ?
                .text-2xl โปรแกรมซูม (Zoom Meeting) เป็นเครื่องมือพูดคุยผ่านวิดีโอ ส่งภาพและเสียง ให้แก่ผู้ร่วมประชุม ประกอบด้วย ฟังก์ชันที่ใช้งานง่าย เลือกเปลี่ยนภาพพื้นหลัง เพื่อพูดคุยให้เข้ากับโอกาสได้ตามความเหมาะสม รวมถึงใช้เรียนออนไลน์ได้ไม่สะดุด วิธีการเข้าใช้งาน Zoom Meeting ทำได้ง่าย ทั้งจากในมือถือ และคอมพิวเตอร์
            .flex.items-center.justify-center.mt-2
                next-link.h-10.px-6.flex.items-center.text-gray-900.bg-orange.text-2xl.rounded.leading-none(to="/"
                    class="hover:shadow-lg hover:bg-white-400"
                    ) ลองเล่น Zoom ทีละขั้นตอน
        #CONTENT.mt-5
            .text-4xl ใช้ Zoom บน Desktop
            .text-2xl 1. เปิด Google Chrome และเข้าลิงก์ Zoom.us
            img.mb-4(src="~/assets/zoom-gif/1.gif").p-5
            .text-2xl 2. คลิกที่ “Sign In” เพื่อสมัครสมาชิกก่อนเข้าใช้งาน หรือกด “Join” เพื่อเข้าใช้งานครั้งเดียว โดยไม่ต้องสมัครสมาชิก
            img.mb-4(src="~/assets/zoom-gif/2.gif").p-5
            .text-2xl 3. คลิกที่ “Sign In” เพื่อสมัครสมาชิกก่อนเข้าใช้งาน หรือกด “Join” เพื่อเข้าใช้งานครั้งเดียว โดยไม่ต้องสมัครสมาชิก
            img.mb-4(src="~/assets/zoom-gif/3.gif").p-5
            .text-2xl 4. คลิกที่ “Sign In” เพื่อสมัครสมาชิกก่อนเข้าใช้งาน หรือกด “Join” เพื่อเข้าใช้งานครั้งเดียว โดยไม่ต้องสมัครสมาชิก
            img.mb-4(src="~/assets/zoom-gif/4.gif").p-5
            .text-2xl 5. คลิกที่ “Sign In” เพื่อสมัครสมาชิกก่อนเข้าใช้งาน หรือกด “Join” เพื่อเข้าใช้งานครั้งเดียว โดยไม่ต้องสมัครสมาชิก
            img.mb-4(src="~/assets/zoom-gif/5.gif").p-5
            .text-2xl 6. คลิกที่ “Sign In” เพื่อสมัครสมาชิกก่อนเข้าใช้งาน หรือกด “Join” เพื่อเข้าใช้งานครั้งเดียว โดยไม่ต้องสมัครสมาชิก
            img.mb-4(src="~/assets/zoom-gif/6.gif").p-5
            .text-2xl 7. คลิกที่ “Sign In” เพื่อสมัครสมาชิกก่อนเข้าใช้งาน หรือกด “Join” เพื่อเข้าใช้งานครั้งเดียว โดยไม่ต้องสมัครสมาชิก
            img.mb-4(src="~/assets/zoom-gif/7.gif").p-5
            .text-2xl 8. คลิกที่ “Sign In” เพื่อสมัครสมาชิกก่อนเข้าใช้งาน หรือกด “Join” เพื่อเข้าใช้งานครั้งเดียว โดยไม่ต้องสมัครสมาชิก
            img.mb-4(src="~/assets/zoom-gif/8.gif").p-5
            .text-2xl 9. คลิกที่ “Sign In” เพื่อสมัครสมาชิกก่อนเข้าใช้งาน หรือกด “Join” เพื่อเข้าใช้งานครั้งเดียว โดยไม่ต้องสมัครสมาชิก
            img.mb-4(src="~/assets/zoom-gif/9.gif").p-5
</template>
