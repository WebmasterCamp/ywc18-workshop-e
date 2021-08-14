<template lang="pug">
.default-layout.font-sans
  nav.fixed.top-0.right-0.left-0.z-20.hidden(class="sm:block")
    .bg-red-700.w-screen
      .h-20.max-w-container.px-4.mx-auto.flex.items-center.text-white
        .flex.items-center.h-full.w-full.text.text-center.leading-tight
          .flex.items-center.flex-wrap.-mx-2
            .h-10.flex.items-center.px-2.relative.cursor-default
              nuxt-link.block.text-lg(class="hover:opacity-75" to="/" )
                .text-3xl Key Tech
          .flex-1
          li.h-10.flex.items-center
            a.h-10.px-6.flex.items-center.text-red-500.bg-yellow-500.rounded-full.leading-none(
              target="_blank"
              href="#"
              class="hover:shadow-lg hover:bg-yellow-400"
            ) Test
  .h-16(class="md:h-32")
  Nuxt
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Maitree:wght@200;300;400;500;600;700&display=swap');

* {
  font-family: 'Maitree', serif;
}
</style>
