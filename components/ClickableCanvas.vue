<template lang="pug">
.clickable-canvas.relative
  div.relative
    img.absolute.inset-0(@click="clickCanvas" :src="img")
    button.absolute(
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
// .clickable-canvas {}
</style>
