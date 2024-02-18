<template>
  <div class="task-2">
    <h2>Task #1: Table sort</h2>

    <p>
      <strong>Task:</strong>
      implement sorting, based on clicked table header.
      <br />
      <strong>Additional (optional) task:</strong>
      disable sorting for some fields (i.e.: Gender, Eye Color)
    </p>

    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th
              v-for="header in headers"
              :key="header.prop"
              role="button"
              tabindex="0"
              @click="onSort(header.prop)"
              @keydown.enter="onSort(header.prop)"
              @keydown.space.prevent="onSort(header.prop)"
            >
              {{ headerText(header) }}
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td
              v-for="header in headers"
              :key="header.prop"
              v-text="user[header.prop]"
            />
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { DISABLED_SORT_PROPS } from '../constants'

const store = useStore()
const users = store.state.users

const headers = [
  { prop: "name", text: "Name" },
  { prop: "age", text: "Age" },
  { prop: "gender", text: "Gender" },
  { prop: "company", text: "Company" },
  { prop: "email", text: "E-Mail" },
  { prop: "phone", text: "Phone no." },
  { prop: "balance", text: "Balance" },
  { prop: "isActive", text: "Active?" },
  { prop: "eyeColor", text: "Eye Color" },
  { prop: "address", text: "Address" },
]

const sortBy = ref(headers[0].prop)
const sortDesc = ref(false)
const onSort = (prop) => {
  if (DISABLED_SORT_PROPS.includes(prop)) return;

  if (sortBy.value === prop) {
    sortDesc.value = !sortDesc.value
  } else {
    sortBy.value = prop
    sortDesc.value = false
  }
  store.dispatch('sortUsers', { sortBy: sortBy.value, sortDesc: sortDesc.value})
}
const headerText = (header) => {
  let text = header.text;
  if (DISABLED_SORT_PROPS.includes(header.prop)) return text;

  if (sortBy.value === header.prop) {
    text += (sortDesc.value ? "⇧" : "⇩")
  }
  return text
}
</script>

<style lang="sass" scoped>
.task-2
  display: flex
  flex-direction: column

  > *
    flex-shrink: 0

h2
  margin: 0 0 12px

p
  margin: 0 0 8px

.table-wrapper
  overflow: auto
  max-height: calc(100vh - 190px)

td, th
  padding: 8px 12px
  border: 4px solid #ccc

th
  cursor: pointer
  white-space: nowrap
  user-select: none
</style>
