<template>
  <h2>Task #3: Reactivity</h2>

  <p>
    This code has been written without proper understanding of
    Vue reactivity system. Will you be able to fix it?
  </p>

  <div class="game">
    <div class="balance">
      <strong>Current balance:</strong> ${{ clickerGame.balance }}
    </div>

    <div class="actions">
      <MyButton @click="topUpBalance(5)">
        Add $5
      </MyButton>

      <MyButton @click="topUpBalance(10)">
        Add $10
      </MyButton>

      <div
        v-if="showCustomAmountInput"
        class="custom-top-up"
      >
        Add $<input v-model="customAmount" />
        <MyButton @click="topUpBalanceByCustomAmount">
          Add
        </MyButton>
      </div>
      <MyButton
        v-else
        @click="onCustomAmountButtonCLick"
      >
        Add custom
      </MyButton>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import MyButton from "../components/MyButton.vue"

// This is a game state
const clickerGame = {
  balance: 100
}
const gameState = reactive(clickerGame)
// This function adds money to the player's balance
const topUpBalance = (amount) => {
  clickerGame.balance += amount
}

// We have a custom input for non-predefined top-ups, too!
let customAmount = ref(50)
let showCustomAmountInput = ref(false)
// When we press "Add custom", we show an input
const onCustomAmountButtonCLick = () => {
  showCustomAmountInput = true
}
// Adds the amount from the input to the player's balance
const topUpBalanceByCustomAmount = () => {
  topUpBalance(customAmount)
  customAmount = 50
  showCustomAmountInput = false
}
</script>

<style lang="sass" scoped>
.balance
  font-size: 32px
  margin-bottom: 12px

.actions
  display: flex

.my-button
  margin: 4px

.custom-top-up
  display: flex
  align-items: center

input
  width: 40px
</style>
