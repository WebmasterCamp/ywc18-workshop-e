<template lang="pug">
.interactive-end
  .py-16
    .flex.items-center.mx-auto.justify-center
      img(style="width: 560px;" src="@/assets/interactive-end.png")
    nuxt-link.text-2xl.mx-2.mt-8.flex.items-center.justify-center.bg-primary-700.px-4.py-4.leading-none.text-center(to="/content/zoom"
                    class="hover:shadow-lg hover:bg-white-400" style="color: white"
                    ) กลับไปอ่านบทความ
    nuxt-link.text-2xl.mx-2.mt-8.flex.items-center.justify-center.text-gray-900.px-4.py-4.leading-none.text-center(to="/"
                    class="hover:shadow-lg hover:bg-white-400" style="color: #0A0A75"
                    ) กลับไปหน้าแรก
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
})
</script>

<style lang="scss">
// .interactive-end {}
</style>
