<template>
  <span
    class="my-button"
    role="button"
    tabindex="0"
    @touchstart="handlePress"
    @mousedown="handlePress"
    @keydown.space="handlePress"
    @keydown.enter="handlePress"
  >
    <slot />
    <span
      v-if="pressed && ripple"
      :style="rippleStyles"
      class="my-button__ripple"
    />
  </span>
</template>

<script setup>
import { ref, reactive, nextTick } from 'vue'

defineProps({
  ripple: { type: Boolean, default: true },
})

const pressed = ref(false)

const rippleStyles = reactive({
  width: 0,
  height: 0,
  left: 0,
  top: 0,
})

const emit = defineEmits(['click'])

const handlePress = async (event) => {
  updateRippleStyles(event)
  pressed.value = false
  await nextTick()
  pressed.value = true
  emit('click')
}

const updateRippleStyles = (event) => {
  const button = event.currentTarget
  const diameter = Math.max(button.clientWidth, button.clientHeight)
  const radius = diameter / 2
  
  // handling enter and space events
  if (!event.clientX || !event.clientY) {
    event.clientX = button.offsetLeft + button.clientWidth / 2
    event.clientY = button.offsetTop + button.clientHeight / 2
  }

  rippleStyles.width = `${diameter}px`
  rippleStyles.height = `${diameter}px`
  rippleStyles.left = `${event.clientX - button.offsetLeft - radius}px`
  rippleStyles.top = `${event.clientY - button.offsetTop - radius}px`
}
</script>

<style lang="sass">
@keyframes my-button__ripple
  100%
    transform: scale(2)
    opacity: 0

.my-button
  display: inline-block
  cursor: pointer
  position: relative
  overflow: hidden
  padding: 8px 16px
  text-align: center
  border-radius: 8px
  background: #307D80
  color: #fcf3de
  transition: all 200ms ease-out
  user-select: none

  &:hover
    box-shadow: 4px 4px 6px rgba(0, 0, 0, .15)
    transform: translate(-2px, -2px)

  &__ripple
    position: absolute
    border-radius: 50%
    transform: scale(0)
    background-color: rgba(255, 255, 255, 0.7)
    animation: my-button__ripple 700ms ease-out forwards
</style>
