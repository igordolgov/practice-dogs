<template lang="pug">
header.header-component
  .container
    .header-component__inner.flex.j-between
      nuxt-link.header-component__logo(to='/')
        img(src='/img/dog.png')
      nuxt-link.header-component__btn(to='/favorite') Избранные пёсели
        Heart.header-component__svg
</template>

<script>
import Heart from '../heart'
export default {
  name: 'header-component',
  components: {
    Heart
  }
}
</script>

<style lang='scss' scoped>
.header-component {
  padding: 35px 0;
  background: $color-dark;
  width: 100%;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.55);
  @media only screen and (max-width: 500px) {
    padding: 15px 0 15px 10px;
  }
  &__inner {
    align-items: center;
    @media only screen and (max-width: 500px) {
      flex-direction: column;
      gap: 10px;
    }
  }
  &__logo:hover:not(:focus-visible) {
    filter: contrast(150%);
  }
  &__btn {
    position: relative;
    background-color: transparent;
    color: $color-grey;
    margin-right: 15px;
    @include transition;
    &:hover:not(:focus-visible) {
      color: $color-error;
      button {
        @include transition;
        fill: $color-error;
        transform: scale(1.1);
      }
    }
  }
  &__svg {
    right: -29px;
    top: 0;
    width: 16px;
    height: 14px;
    fill: $color-grey;
    @media only screen and (max-width: 500px) {
      top: 7px;
    }
  }
}
</style>
