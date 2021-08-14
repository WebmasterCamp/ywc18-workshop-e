<template lang="pug">
.clickable-canvas.relative(:class="{'is-hinting': isHinting}")
  div.relative.bg-gray-100
    img.relative.inset-0.transition-all.duration-200(@click="clickCanvas" :src="img")
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
      return `top: calc(${pt.y}% - ${(pt.size / 2)}px); left: calc(${pt.x}% - ${(pt.size / 2)}px); width: ${pt.size}px; height: ${pt.size}px`
    },
    clickCanvas (e) {
      const rect = e.target.getBoundingClientRect()
      const nW = e.target.naturalWidth
      const nH = e.target.naturalHeight
      const ratio = nW / rect.width
      const x = (e.clientX - rect.left) * ratio
      const y = (e.clientY - rect.top) * ratio
      const xPer = Math.round(x / nW * 100 * 100) / 100
      const yPer = Math.round(y / nH * 100 * 100) / 100
      console.log('x: ' + xPer + ', y: ' + yPer)
      this.isHinting = true
      setTimeout(() => {
        this.isHinting = false
      }, 800)
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
