<template lang="pug">
.favorite
  .favorite__info(v-show='this.favoriteDogs.length === 0') Вы пока ничего не добавили в Избранное
  DogsList.active(:dogsCart='favoriteDogs',@click.native='greet')
  BackTop
</template>

<script>
import BackTop from '@/components/back-top'
import DogsList from '@/components/dogs-list'

export default {
  name: 'favorite',
  components: {
    DogsList,
    BackTop
  },
  data () {
    return {
      favoriteDogs: []
    }
  },
  methods: {
    greet (event) {
      const items = this.nameBreedFetch()
      if (event) {
        if (event.target.classList.contains('svg-filled')) {
          const elem = event.target.closest('.dogs-cart__item')
          elem.remove()
          const dates = items.filter(el => el.image !== elem.id)
          localStorage.setItem('Избранное', JSON.stringify(dates))
          elem.classList.add('hidden')
        }
      }
    },
    nameBreedFetch () {
      if (typeof window !== 'undefined') {
        let dates = JSON.parse(localStorage.getItem('Избранное'))
        if (dates === undefined) {
          dates = []
        }
        return dates
      }
    },
    filterDogs () {
      const photo = this.nameBreedFetch()
      if (photo) {
        for (const key of photo) {
          this.favoriteDogs.push(key.image)
        }
      }
    }
  },
  mounted () {
    this.filterDogs()
  }
}
</script>

<style lang="scss">
.svg-empty {
  display: none;
}
.svg-filled {
  display: block;
}
.favorite {
  &__info {
    margin-top: 100px;
    text-align: center;
    color: $color_blue;
    font-weight: 600;
    font-size: 30px;
    line-height: 34px;

    @media only screen and (max-width: 800px) {
      margin-top: 50px;
      font-size: 22px;
      line-height: 26px;
    }

    @media only screen and (max-width: 500px) {
      margin-top: 50px;
      font-size: 18px;
      line-height: 22px;
    }
  }
}
.hidden {
  display: none;
}
</style>
