<template lang="pug">
.clickable-canvas.relative(:class="{'is-hinting': isHinting}")
  div.relative.bg-black
    img.absolute.inset-0.transition-all.duration-200(@click="clickCanvas" :src="img")
    button.absolute.transition-all.duration-200.border-2.border-transparent(
      v-for="pt in points" :style="generateButtonStyle(pt)" @click="onClickButton"
    )
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    img: { type: String },
    points: { type: Array }
  },
  data: () => ({
    isHinting: false
  }),
  methods: {
    onClickButton () {
      this.$emit('correct')
    },
    generateButtonStyle (pt) {
      return `top: ${pt.y - (pt.size / 2)}px; left: ${pt.x - (pt.size / 2)}px; width: ${pt.size}px; height: ${pt.size}px`
    },
    clickCanvas (e) {
      const rect = e.target.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      console.log('x: ' + x + ' y: ' + y)
      this.isHinting = true
      setTimeout(() => {
        this.isHinting = false
      }, 800)
      // const rect = e.target.getBoundingClientRect()
      // const x = e.clientX - rect.left
      // const y = e.clientY - rect.top
      // console.log('x: ' + x + ' y: ' + y)
      // this.points.forEach((pt) => {
      //   if (x >= pt.x - (pt.size / 2) && x <= pt.x + (pt.size / 2)) {
      //     if (y >= pt.y - (pt.size / 2) && x <= pt.y + (pt.size / 2)) {
      //       console.log('correct point')
      //       console.log(pt)
      //     }
      //   }
      // })
    }
  }
})
</script>

<style lang="scss">
.clickable-canvas {
  &.is-hinting {
    img {
      @apply opacity-75;
    }
    button {
      @apply bg-white bg-opacity-25 border-red-500;
    }
  }
}
</style>
