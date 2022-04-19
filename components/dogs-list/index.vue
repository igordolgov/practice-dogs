<template lang="pug">
.dogs-list
  .container
    .dogs-cart
      .dogs-cart__item(v-for='photo in dogsCart', :key='photo.id', :id='photo')
        nuxt-link.dogs-cart__img.dogs-cart__hover(:to='`/${nameBreed(photo)}`')
          img(:src='photo')
          .dogs-cart__text {{ nameBreedHtml(photo) }}
        button(@click='setDogs(photo)')
          Heart.dogs-cart__svg
</template>

<script>
/* eslint-disable no-useless-escape */
import Heart from '../heart'
import mixin from '@/assets/mixin.js/mixin.js'
export default {
  name: 'dogs-list',
  mixins: [mixin],
  components: {
    Heart
  },
  data () {
    return {
      isActive: false
    }
  },
  props: {
    dogsCart: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    toggle () {
      this.isActive = !this.isActive
    },
    getDogs () {
      let dates = JSON.parse(localStorage.getItem('Избранное'))
      if (dates === undefined) {
        dates = []
      }
      return dates
    },
    setDogs (images) {
      const dates = this.getDogs() || []
      const found = dates.some(el => {
        return el.image === images
      })
      if (!found) {
        dates.push({ image: images })
        localStorage.setItem('Избранное', JSON.stringify(dates))
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
