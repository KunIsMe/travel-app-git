<template>
  <div>
    <Header />
    <home-swiper />
    <home-icons />
  </div>
</template>

<script>
import Header from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'

export default {
  name: 'Home',
  components: {
    Header,
    HomeSwiper,
    HomeIcons
  }
}
</script>

<style>
</style>
