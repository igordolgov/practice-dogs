<template lang="pug">
.breed-section
  button.breed-section__button Все пёсели
  .breeds
  template
    span.breeds__letter(
      v-for='letter in Object.keys(breeds)',
      :key='letter.id'
    ) {{ letter }}
      nuxt-link.breeds__item(
        v-for='breed in breeds[letter]',
        :key='breed.id',
        :to='`/${getBreeds(breed)}`'
      ) {{ breed }}
</template>

<script>
export default {
  name: 'breed-section',
  data () {
    return {
      // Создаём массив (пустой) для хранения данных, полученных из API
      items: []
    }
  },
  methods: {
    getData () {
      // Получаем из API список пород собак
      fetch('https://dog.ceo/api/breeds/list/all')
      // Декодируем ответ в формате JSON
        .then(response => response.json())
        .then(data => {
          this.items = data.message
        })
    },
    getBreeds (item) {
      item = item.replace(' ', '/')
      return item
    }
  },
  mounted () {
    this.getData()
  },
  computed: {
    breeds () {
      const arr = []
      Object.keys(this.items).forEach(item => {
        if (this.items[item].length === 0) {
          arr.push(item)
        } else {
          this.items[item].forEach(el => arr.push(item + ' ' + el))
        }
      })
      const obj = {}
      arr.forEach(item => {
        const key = item.charAt(0)
        if (!Object.prototype.hasOwnProperty.call(obj, key)) {
          obj[key] = []
        }
        obj[key].push(item)
      })
      return obj
    }
  }
}
</script>

<style lang='scss'scoped>
.breed-section {
  padding-bottom: 35px;
  &__button {
    display: inline-block;
    padding: 4px 12px;
    background-color: transparent;
    border: 1px solid $color_blue;
    color: $color_blue;
    border-radius: 20px;
  }
}
.breeds {
  margin-top: 10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  color: $color-grey;
  &__letter {
    font-size: 20px;
    line-height: 28px;
    text-transform: uppercase;
    &:not(:first-child) {
      margin-left: 10px;
    }
  }
  &__item {
    display: inline-block;
    padding: 4px 12px;
    margin: 3px 5px;
    border: 1px solid $color-grey;
    border-radius: 20px;
    background-color: transparent;
    font-size: 12px;
    line-height: 16px;
    color: $color-grey;
    &::first-letter {
      text-transform: uppercase;
    }
    &:hover:not(:focus-visible) {
      border: 1px solid $color_blue;
      color: $color_blue;
    }
  }
  &__item:first-child {
    margin-left: 5px;
  }
}
</style>
