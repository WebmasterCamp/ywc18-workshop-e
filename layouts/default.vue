<template lang="pug">
.default-layout
  nav.fixed.top-0.right-0.left-0.z-20.hidden(class="sm:block")
    .bg-primary-700
      .h-12.max-w-container.px-4.mx-auto.flex.items-center.text-white
        .flex.items-center.h-full.w-full.text.text-center.leading-tight
          .flex.items-center.flex-wrap.-mx-2
            .h-12.flex.items-center.px-2.relative.cursor-default
              nuxt-link.block.text-lg(class="hover:opacity-75" to="/" )
                .flex
                  Logo.h-8
          .flex-1
          li.h-12.flex.items-center
            nuxt-link.text-lg.px-4.h-12.flex.items-center.justify-center.border-r.border-primary-400(class="hover:text-orange" to="/" )
              .text-xl บทเรียน
            nuxt-link.text-lg.px-4.h-12.flex.items-center.justify-center.border-primary-400(class="hover:text-orange" to="/corporate" )
              .text-xl สำหรับธุรกิจ
            //- nuxt-link.text-lg.px-4.h-20.flex.items-center.justify-center(class="hover:text-orange" to="/" )
            //-   .text-xl เกี่ยวกับเรา
  .h-12
  Nuxt
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Maitree:wght@200;300;400;500;600;700&display=swap');

* {
  font-family: 'Maitree', serif;
}
</style>
