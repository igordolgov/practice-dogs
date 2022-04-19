<template lang="pug">
.front
  .container
    BreedBtn.front__breedbtn(@list-breeds='addListBreeds')
    BreedSection.breedsection(v-if='isHidden', :class='{ active: isHidden }')
    .dogs-cart-title
      nuxt-link.dogs-cart-title__img(:to='`/${nameBreed(dogsCart)}`')
        img(:src='dogsCart')
        Heart.dogs-cart-title__svg
        .dogs-cart-title__text {{ nameBreedHtml(dogsCart) }}
</template>

<script>
/* eslint-disable no-useless-escape */
import Heart from '../heart'
import BreedBtn from '../breed-btn'
import BreedSection from '../breed-section'
import mixin from '@/assets/mixin.js/mixin.js'
export default {
  name: 'front',
  mixins: [mixin],
  components: {
    Heart,
    BreedBtn,
    BreedSection
  },
  data () {
    return {
      isHidden: false,
      loading: true
    }
  },
  props: {
    dogsCart: {
      type: String
    }
  },
  methods: {
    addListBreeds () {
      this.isHidden = !this.isHidden
    }
  }
}
</script>
<style lang="scss" scoped>
.front {
  margin-top: -1px;
  padding-top: 50px;
  color: $color-white;
  @media only screen and (max-width: 800px) {
    padding-top: 30px;
  }
  @media only screen and (max-width: 500px) {
    padding-top: 20px;
  }
}
.dogs-cart-title {
  position: relative;
  background: linear-gradient(
    3.21deg,
    #000000 -15.62%,
    rgba(0, 0, 0, 0) 45.69%
  );
  &__img {
    display: block;
    width: 100%;
    height: 500px;
    @media only screen and (max-width: 800px) {
      height: 300px;
    }
    @media only screen and (max-width: 500px) {
      height: 250px;
    }
    img {
      width: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 10px;
    }
  }
  &__svg {
    width: 29px;
    height: 26px;
    fill: $color-white;
    top: 35px;
    left: 35px;
    @media only screen and (max-width: 800px) {
      top: 15px;
      left: 15px;
      width: 20px;
      height: 18px;
    }
    @media only screen and (max-width: 500px) {
      width: 16px;
      height: 14px;
    }
  }
  &__text {
    position: absolute;
    bottom: 50px;
    right: 50px;
    font-weight: 600;
    font-size: 30px;
    line-height: 28px;
    letter-spacing: 0.01em;
    &::first-letter {
      text-transform: uppercase;
    }
    @media only screen and (max-width: 800px) {
      bottom: 30px;
      right: 20px;
      font-size: 25px;
      line-height: 20px;
    }
    @media only screen and (max-width: 500px) {
      bottom: 30px;
      right: 10px;
      font-size: 18px;
      line-height: 16px;
    }
  }
}
</style>
