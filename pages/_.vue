<template lang="pug">
.breed-dog
  BreedBtn(@list-breeds='addListBreeds', :title='breed')
  BreedSection.breedsection(v-if='isHidden', :class='{ active: isHidden }')
  DogsList(:dogsCart='breedImg')
  Loader(v-if='loading')
  BackTop
</template>

<script>
/* eslint-disable no-useless-escape */
import Loader from '@/components/loader'
import BackTop from '@/components/back-top'
import BreedBtn from '@/components/breed-btn'
import BreedSection from '@/components/breed-section'
import DogsList from '@/components/dogs-list'
import mixin from '@/assets/mixin.js/mixin.js'

export default {
  name: 'page-index',
  mixins: [mixin],
  components: {
    Loader,
    BackTop,
    BreedBtn,
    BreedSection,
    DogsList
  },
  data () {
    return { breedImg: [], loading: true, isHidden: false, title: '' }
  },
  methods: {
    getData () {
      fetch(`https://dog.ceo/api/breed/${this.nameBreedFetch}/images`)
        .then(response => response.json())
        .then(json => {
          this.breedImg = json.message
          this.loading = false
        })
    },
    addListBreeds () {
      this.isHidden = !this.isHidden
    }
  },
  mounted () {
    this.getData()
  },
  computed: {
    nameBreedFetch () {
      let dates = this.$route.path
      if (dates) {
        dates = dates.replace('-', '/')
      }
      return dates.substring(1)
    },
    breed () {
      let name = this.nameBreedFetch
      if (name) {
        name = name.replace('/', ' ')
        const title = name.split(' ')
        if (title.length < 2) {
          return name
        }
        return [title[1], title[0]]
          .concat(title.splice(2, title.length))
          .join(' ')
      }
      return this.title
    }
  }
}
</script>

<style lang="scss" scoped>
.breed-dog {
  margin-top: 30px;
}
/deep/.breed__selected {
  display: inline-block;
}
</style>
