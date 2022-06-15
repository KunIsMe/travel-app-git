<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs" />
    <detail-header />
    <div class="content">
      <detail-list :list="list" />
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    getDetailInfo () {
      const _this = this
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then((response) => {
        const res = response.data
        if (res.ret && res.data) {
          const data = res.data
          _this.sightName = data.sightName
          _this.bannerImg = data.bannerImg
          _this.gallaryImgs = data.gallaryImgs
          _this.list = data.categoryList
        }
      })
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
