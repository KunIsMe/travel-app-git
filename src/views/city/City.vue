<template>
  <div>
    <Header />
    <city-search />
  </div>
</template>

<script>
import Header from './components/Header'
import CitySearch from './components/Search'

export default {
  name: 'City',
  components: {
    Header,
    CitySearch
  }
}
</script>

<style lang="stylus" scoped>

</style>
