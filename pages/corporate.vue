<template lang="pug">
div
  .container.max-w-container.mx-auto.w-full.pb-12.px-4
    #TITLE.mt-5
        b.text-4xl KeyTech ช่วยได้
        .text-2xl ติดปัญหาการใช้งาน ไม่เข้าใจโปรแกรม
        .text-2xl  โทรติดต่อฝ่ายบริการของเรา คอยดูแลคุณตลอด 24 ชม. ถามได้ทุกคำถาม
        .flex.items-center.justify-start.mt-8
            nuxt-link.h-10.px-10.flex.items-center.text-gray-900.bg-gray-300.text-3xl.rounded.leading-none(to="/interactive"
                  class="hover:shadow-lg hover:bg-white-400"
                  ) Contact Sale
    #TITLE.mt-8
        .grid.grid-cols-2
            #left
                b.text-4xl.mt-5 ทดลองใช้งาน
                .text-2xl.mt-5 เปลี่ยนแปลงพนักงานในองค์กรของคุณ ให้เรียนรู้ได้ไว และก้าวทันเทคโนโลยีด้วยบริการจาก KeyTech
                br
                b.text-2xl.mt-8 คุณจะได้รับ :
            #right.mx-2
                .grid.grid-cols-2
                    input.m-2.py-4.px-6.flex-1.border.border-primary-500(class="placeholder-primary-400" type="text" v-model="searchString" placeholder="ชื่อจริง")
                    input.m-2.py-4.px-6.flex-1.border.border-primary-500(class="placeholder-primary-400" type="text" v-model="searchString" placeholder="นามสกุล")
                .grid.grid-cols-2
                    input.m-2.py-4.px-6.flex-1.border.border-primary-500(class="placeholder-primary-400" type="text" v-model="searchString" placeholder="อีเมล")
                    input.m-2.py-4.px-6.flex-1.border.border-primary-500(class="placeholder-primary-400" type="text" v-model="searchString" placeholder="เบอร์โทรศัพท์")
                .grid.grid-cols-1
                    input.m-2.py-4.px-6.flex-1.border.border-primary-500(class="placeholder-primary-400" type="text" v-model="searchString" placeholder="ชื่อบริษัท")
                .grid.grid-cols-1
                    input.m-2.py-4.px-6.flex-1.border.border-primary-500(class="placeholder-primary-400" type="text" v-model="searchString" placeholder="บริษัทของคุณต้องการเรียนรู้อะไร")
                .grid.grid-cols-1
                    nuxt-link.h-10.px-10.flex.items-center.bg-primary-700.text-3xl.leading-none.text-center(to="/interactive"
                  class="hover:shadow-lg hover:bg-white-400" style="color:white"
                  ) ทดลองใช้งาน
</template>
