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
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      const data = cityMock.data
      this.cities = data.cities
      this.hotCities = data.hotCities
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
