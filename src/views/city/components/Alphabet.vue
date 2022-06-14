<template>
  <ul class="list">
    <li
      class="item"
      v-for="item in letters"
     :key="item"
     :ref="item"
     @touchstart="handleTouchStart"
     @touchmove="handleTouchMove"
     @touchend="handleTouchEnd"
     @click="handleLetterClick"
    >
        {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        const _this = this
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - _this.startY) / 20)
          if (index >= 0 && index < _this.letters.length) {
            _this.$emit('change', this.letters[index])
          }
          _this.timer = null
        }, 8)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  },
  computed: {
    letters () {
      const letters = []
      for (const key in this.cities) {
        letters.push(key)
      }
      return letters
    }
  },
  updated () {
    this.startY = this.$refs.A[0].offsetTop
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      color: $bgColor
</style>
