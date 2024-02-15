<template>
  <div class="app">
    <div class="heading">
      <h1>Js & Vue 3 tasks:</h1>

      <section class="level-selector">
        <button @click="task = TASK[1]">#1</button>
        <button @click="task = TASK[2]">#2</button>
        <button @click="task = TASK[3]">#3</button>
      </section>
    </div>

    <section class="tasks">
      <component :is="task" />
    </section>
  </div>
</template>

<script setup>
import { shallowRef } from 'vue'

import Task1 from './tasks/Task1.vue'
import Task2 from './tasks/Task2.vue'
import Task3 from './tasks/Task3.vue'

const TASK = {
  1: Task1,
  2: Task2,
  3: Task3,
}

const task = shallowRef(TASK[1])
</script>

<style scoped lang="sass">
.app
  height: 100vh
  display: flex
  flex-direction: column

.heading
  display: flex
  align-items: center
  flex: 0 0 auto
  padding: 12px 24px 0

h1
  margin: 0 20px 0 0
  flex-grow: 1

.level-selector
  align-self: center
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  flex: 0 1 auto

  button
    font-weight: bold
    margin: .1rem
    padding: .5rem
    min-width: 60px

.tasks
  flex: 1 1 auto
  overflow: hidden auto
  padding: 24px
</style>
