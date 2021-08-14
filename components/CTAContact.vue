<template lang="pug">
.cta-contact.fixed(style="bottom: 0px;" v-if="!isClose")
  img(src="~/assets/contact-cta.jpg")
  div.absolute.inset-0
    button.absolute.top-0.right-0.py-2.text-white.text-lg.px-4(@click="isClose = true")
      font-awesome-icon(:icon="['fas', 'times']")
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

export default Vue.extend({
  data: () => ({
    isClose: false
  })
})
</script>

<style lang="scss">
.cta-contact {
  max-height: 214px;
}
</style>
