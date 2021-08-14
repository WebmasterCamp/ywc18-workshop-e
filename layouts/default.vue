<template lang="pug">
.default-layout.font-sans
  nav.fixed.top-0.right-0.left-0.z-20.hidden(class="sm:block")
    .bg-primary-700
      .h-20.max-w-container.px-4.mx-auto.flex.items-center.text-white
        .flex.items-center.h-full.w-full.text.text-center.leading-tight
          .flex.items-center.flex-wrap.-mx-2
            .h-10.flex.items-center.px-2.relative.cursor-default
              nuxt-link.block.text-lg(class="hover:opacity-75" to="/" )
                .text-3xl Key Tech
          .flex-1
          li.h-10.flex.items-center
            nuxt-link.block.text-lg(class="hover:opacity-75" to="/lesson/work" )
                .text-xl บทเรียน |
            nuxt-link.block.text-lg(class="hover:opacity-75" to="/" )
                .text-xl สำหรับธุรกิจ |
            nuxt-link.block.text-lg(class="hover:opacity-75" to="/" )
                .text-xl เกี่ยวกับเรา
  .h-16(class="md:h-32")
  Nuxt
</template>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Maitree:wght@300&display=swap');
  *{
    font-family: 'Maitree', serif;
  }
</style>
