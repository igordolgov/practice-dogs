<template lang="pug">
.page.index
  h1 ПЁСЕЛЬ
  Front(:dogsCart='dogsCart[0]')
  DogsList(:dogsCart='dogsCart.slice(1)')
  Loader(v-if='loading')
  BackTop
</template>

<script>
import Front from '@/components/front'
import DogsList from '@/components/dogs-list'
import Loader from '@/components/loader'
import BackTop from '@/components/back-top'
export default {
  name: 'page-index',
  components: {
    Front,
    DogsList,
    Loader,
    BackTop
  },
  data () {
    return {
      dogsCart: [],
      loading: true
    }
  },
  methods: {
    getData () {
      fetch('https://dog.ceo/api/breeds/image/random/13')
        .then(response => response.json())
        .then(json => {
          this.dogsCart = json.message
          this.loading = false
        })
    },
    scroll () {
      window.addEventListener('scroll', () => {
        const bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight
        if (bottomOfWindow) {
          fetch('https://dog.ceo/api/breeds/image/random/12')
            .then(response => response.json())
            .then(json => {
              json.message.forEach(element => {
                this.dogsCart.push(element)
              })
            })
        }
      })
    }
  },
  beforeMount () {
    this.getData()
  },
  mounted () {
    this.scroll()
  }
}
</script>

<style lang="scss" scoped>
</style>
