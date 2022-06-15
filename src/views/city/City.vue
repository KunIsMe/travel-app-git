<template>
  <div>
    <Header />
    <city-search :cities="cities" />
    <city-list :cities="cities" :hot="hotCities" :letter="letter" />
    <city-alphabet :cities="cities" @change="handleLetterChange" />
  </div>
</template>

<script>
import Header from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'

export default {
  name: 'City',
  components: {
    Header,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      const _this = this
      axios.get('/api/city.json').then((response) => {
        const res = response.data
        if (res.ret && res.data) {
          const data = res.data
          _this.cities = data.cities
          _this.hotCities = data.hotCities
        }
      })
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  },
  activated () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
