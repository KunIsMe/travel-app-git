<template>
  <div>
    <Header />
    <home-swiper :list="swiperList" />
    <home-icons :list="iconList" />
    <home-recommend :list="recommendList" />
    <home-weekend :list="weekendList" />
  </div>
</template>

<script>
import Header from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    Header,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  computed: {
    ...mapState(['city'])
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      const _this = this
      axios.get('/api/index.json').then((response) => {
        const res = response.data
        if (res.ret && res.data) {
          const data = res.data
          _this.swiperList = data.swiperList
          _this.iconList = data.iconList
          _this.recommendList = data.recommendList
          _this.weekendList = data.weekendList
        }
      })
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.city !== this.lastCity) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style>
</style>
