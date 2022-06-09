<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item in list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="轮播图片" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      showSwiper: true,
      list: [
        {
          id: '0001',
          imgUrl: 'https://emos-1307152777.cos.ap-beijing.myqcloud.com/img/banner/swiper-1.JPG'
        },
        {
          id: '0002',
          imgUrl: 'https://emos-1307152777.cos.ap-beijing.myqcloud.com/img/banner/swiper-2.JPG'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background-color: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 30%
    .swiper-img
      width: 100%
      height: 2.4rem
</style>
