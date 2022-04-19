<template lang="pug">
.container
  .breed(@click='$emit("list-breeds")')
    button.breed__btn(@click='toggle', :class='{ active: isActive }') Породы
    nuxt-link.breed__selected(to='/') {{ title }}
</template>

<script>
export default {
  name: 'breed-btn',
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    toggle () {
      this.isActive = !this.isActive
    }
  },
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.breed {
  display: flex;
  padding-bottom: 30px;
  position: relative;
  width: 280px;
  height: 60px;
  cursor: pointer;
  align-items: flex-start;
  justify-content: space-between;
  &::before {
    content: '';
    position: absolute;
    bottom: 36px;
    left: 10px;
    display: block;
    width: 77px;
    height: 1px;
    border-bottom: 0.5px dashed $color-white;
    @include transition;
  }
  &:hover:not(:focus-visible) {
    &::before {
      border-bottom: 0.5px dashed $color-error;
    }
    .breed__btn {
      color: $color-error;
      &::before {
        background-color: $color-error;
      }

      &::after {
        background-color: $color-error;
      }
    }
  }
  &__btn {
    position: relative;
    font-family: 'IBM Plex Sans';
    display: block;
    width: 80px;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.01em;
    background-color: transparent;
    color: $color-white;
    @include transition;
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 60%;
      right: -5px;
      display: block;
      width: 10px;
      height: 1px;
      background-color: $color-white;
      transform: translate(-3px, -50%) rotate(45deg);
      @include transition;
    }

    &::after {
      transform: translate(4px, -50%) rotate(-45deg);
    }
    &.active {
      &::before {
        transform: translate(-3px, -50%) rotate(-45deg);
      }

      &::after {
        transform: translate(4px, -50%) rotate(45deg);
      }
    }
  }
  &__selected {
    position: relative;
    display: inline-block;
    padding: 4px 19px 4px 11px;
    border-radius: 20px;
    background-color: transparent;
    font-size: 12px;
    line-height: 16px;
    border: 1px solid $color_blue;
    color: $color_blue;
    display: none;
    &::first-letter {
      text-transform: uppercase;
    }
    &::before,
    &::after {
      position: absolute;
      content: '';
      height: 0.8px;
      width: 8px;
      right: 8px;
      top: 12px;
      background: $color_blue;
    }
    &:after {
      transform: rotate(-45deg);
    }
    &:before {
      transform: rotate(45deg);
    }
  }
}
</style>
