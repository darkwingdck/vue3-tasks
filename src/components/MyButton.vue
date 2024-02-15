<template>
  <span
    class="my-button"
    :class="{
      'my-button--ripple': ripple,
      'my-button--pressed': pressed,
    }"
    @mousedown="pressed = true"
    @mouseup="pressed = false"
    @blur="pressed = false"
  >
    <slot />
  </span>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  ripple: { type: Boolean, default: true },
})

const pressed = ref(false)
</script>

<style lang="sass">
@keyframes my-button__ripple
  100%
    transform: scale(20)
    opacity: 0

.my-button
  display: inline-block
  cursor: pointer
  position: relative
  overflow: hidden
  padding: 8px 16px
  text-align: center
  border-radius: 8px
  background: #0a0a86
  color: #fcf3de
  transition: all 200ms ease-out

  &:hover, &:active, &:focus
    box-shadow: 4px 4px 4px rgba(0, 0, 0, .3)

  &--ripple::before
    display: block
    position: absolute
    border-radius: 100%
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    width: 12px
    height: 12px
    background: rgba(255, 255, 255, .5)

  &#{&}--pressed#{&}--ripple::before
    content: ''
    animation: my-button__ripple 700ms ease-out forwards
</style>
