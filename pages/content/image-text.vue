<template lang="pug">
div
  .container.max-w-container.mx-auto.w-full.pb-12.px-4
      #TITLE.mt-5
          .text-4xl สอนใส่ข้อความในรูปภาพ “สวัสดีวันจันทร์”
          p เผยแพร่ 14 ส.ค. 2564
          div.mt-4
            img.h-8(src="~/assets/line-btn-mock.png")
            //- <div class="line-it-button" style="display: none;" data-lang="en" data-type="share-a" data-ver="3" :data-url="$route.fullpath" data-color="default" data-size="small" data-count="true"></div>
            //- <script src="https://www.line-website.com/social-plugins/js/thirdparty/loader.min.js" async="async" defer="defer"></script>
          //- .grid.grid-cols-2.gap-4
          //-     p ส่งต่อให้เพื่อนของคุณ
      hr.m-2
      .flex.items-center.justify-center.py-8
        <iframe width="560" height="315" src="https://www.youtube.com/embed/iOgumwaoLqM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  .w-full.max-w-container.mx-auto.flex.items-center.justify-center
    Disqus
  .w-full.max-w-container.mx-auto.flex.items-center.justify-center
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
