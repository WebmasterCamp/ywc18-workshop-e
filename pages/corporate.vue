<template lang="pug">
div
  .header-for-corporate.bg-cover.h-64
    .container.max-w-container.mx-auto.flex.items-center.h-full
      .text-4xl KeyTech กุญแจสู่ประตูเทคโนโลยี
  .w-full(style="background: #ECEBF9;")
    .max-h-64.w-full.max-w-container.mx-auto.mb-16
      img(src="~/assets/b2b.jpg")
  .container.max-w-container.mx-auto.w-full.pb-12.px-4.mt-5
    .mt-8
        .grid.grid-cols-3
            #left.col-span-2.pr-32
              .text-lg พวกเราทีม Keytech ทีมพัฒนาเว็บไซต์ที่เชื่อมโยงคุณกับเครื่องมือโปรแกรม จากมือโปรหลายคนทั่วประเทศ<br />ที่พร้อมให้บริการคุณแก่พนักงานที่รู้สึกยังขาดการเชี่ยวชาญในเรื่องการเข้าถึงเครื่องมือออนไลน์โดยเฉพาะผู้ที่ต้อง work from home ได้อย่าง สะดวก รวดเร็ว และไว้ใจได้ เรารับรองว่าคุณจะมีความชำนาญขึ้นอย่างแน่นอน
              .text-xl.mt-8 คุณจะได้รับ:
              .flex
                .w-6.text-base: font-awesome-icon(:icon="['fas', 'check']")
                .flex-1 สามารถใช้บริการได้ผ่านทางทั้งเว็บไซต์และบริการการโทร
              .flex
                .w-6.text-base: font-awesome-icon(:icon="['fas', 'check']")
                .flex-1 ราคาที่เป็นมาตรฐาน พร้อมกับบริการที่รับรองว่าคุณจะเกิดความเชี่ยวชาญอย่างแน่นอน
              .flex
                .w-6.text-base: font-awesome-icon(:icon="['fas', 'check']")
                .flex-1 วางใจได้ด้วย ระบบติดตามความคืบหน้าและระบบการประเมินพนักงาน ที่เปิดให้บริการตลอดเวลาเพื่อให้พนักงานสามารถบริการท่านได้ดีที่สุด รวมถึงพร้อมบริการหลังการสอนหากท่านยังมีความสงสัย
              hr.border-b.my-12
              div
                p แน่นอนว่าในการทำงาน work from home นั้น การเข้าถึงเทคโนโลยีหรือ หลาย ๆ โปรแกรมสำหรับการทำงาน อาจเป็นเรื่องที่ยากสำหรับหลาย ๆ คน โดยเฉพาะคนที่ไม่ค่อยมีความเชี่ยวชาญในเครื่องมือออนไลน์ซักเท่าไหร่ การทำงานอาจจะติดขัดซึ่งส่งผลต่อประสิทธิภาพในการทำงานที่ช้า ครั้นจะถามคนใกล้ตัวทุกครั้งไปก็ไม่ใช่เรื่องง่าย บางบริษัทก็ไม่ได้จ้างผู้เชี่ยวชาญมาช่วยสอนประจำ ดังนั้น Keytech จึงถือว่าเป็นทางเลือกที่ดีที่สุดสำหรับชาวออฟฟิศผู้ที่ยังต้องการความช่วยเหลือในเรื่องเทคโนโลยี โดยเฉพาะผู้ที่ต้องทำงานผ่านหน้าจอคอมทั้งวันและเป็นเวลานาน
                .text-lg.my-6.font-semibold เรา Keytech คือกุญแจที่จะเชื่อมคุณให้เข้ากับโลกเทคโนโลยีได้ง่ายมากยิ่งขึ้น
                p Keytech เป็นเว็บไซต์ Startup ที่จะเป็นตัวช่วยทำให้ชีวิตของคนทำงานออฟฟิศง่าย และสะดวกสบายขึ้นได้มากเลย เพราะนอกจากเราจะช่วยคุณเข้าถึงการใช้งานของแต่ละโปรแกรมได้ง่ายขึ้นแล้ว เรายังให้บริการครอบคลุมถึงการเข้าถึงเทรนด์ใหม่ๆของยุคสมัยนี้ หรือแม้กระทั่งแอปที่เราต้องใช้ในชีวิตประจำวันอย่างเช่นธุรกรรมทางการเงินด้วย

            #right.mx-2
                .grid.grid-cols-2
                    input.m-2.py-2.px-6.flex-1.border.border-primary-500(class="placeholder-primary-400" type="text" v-model="searchString" placeholder="ชื่อจริง")
                    input.m-2.py-2.px-6.flex-1.border.border-primary-500(class="placeholder-primary-400" type="text" v-model="searchString" placeholder="นามสกุล")
                .grid.grid-cols-2
                    input.m-2.py-2.px-6.flex-1.border.border-primary-500(class="placeholder-primary-400" type="text" v-model="searchString" placeholder="อีเมล")
                    input.m-2.py-2.px-6.flex-1.border.border-primary-500(class="placeholder-primary-400" type="text" v-model="searchString" placeholder="เบอร์โทรศัพท์")
                .grid.grid-cols-1
                    input.m-2.py-2.px-6.flex-1.border.border-primary-500(class="placeholder-primary-400" type="text" v-model="searchString" placeholder="ชื่อบริษัท")
                .grid.grid-cols-1
                    input.m-2.py-2.px-6.flex-1.border.border-primary-500(class="placeholder-primary-400" type="text" v-model="searchString" placeholder="บริษัทของคุณต้องการเรียนรู้อะไร")
                .grid.grid-cols-1
                .mx-2.mt-8.flex.items-center.justify-center.bg-primary-700.px-4.py-4.leading-none.text-center(
                  class="hover:shadow-lg hover:bg-white-400" style="color: white"
                  ) ทดลองใช้งาน
</template>

<style>
.header-for-corporate {
  background-image: url('/for-corporate.jpg');
}
</style>
