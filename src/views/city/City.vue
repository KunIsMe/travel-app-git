<template>
  <div>
    <Header />
    <city-search />
    <city-list :cities="cities" :hot="hotCities" />
    <city-alphabet :cities="cities" />
  </div>
</template>

<script>
import Header from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import cityMock from '@/assets/mock/city.json'

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
      hotCities: []
    }
  },
  methods: {
    getCityInfo () {
      const data = cityMock.data
      this.cities = data.cities
      this.hotCities = data.hotCities
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
