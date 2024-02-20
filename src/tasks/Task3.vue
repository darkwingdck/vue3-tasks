<template>
  <h2>Task #3: Reactivity</h2>

  <p>
    This code has been written without proper understanding of
    Vue reactivity system. Will you be able to fix it?
  </p>

  <div class="game">
    <div class="balance">
      <strong>Current balance:</strong> ${{ gameState.balance }}
    </div>

    <div class="actions">
      <MyButton @click="topUpBalance(5)">
        Add $5
      </MyButton>

      <MyButton @click="topUpBalance(10)">
        Add $10
      </MyButton>

      <div
        v-if="gameState.showCustomAmountInput"
        class="custom-top-up"
      >
        Add $<input v-model="gameState.customAmount" />
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
import { reactive } from 'vue'
import MyButton from "../components/MyButton.vue"
import { DEFAULT_BALANCE, DEFAULT_CUSTOM_AMOUNT } from '../constants'

const clickerGame = {
  balance: DEFAULT_BALANCE,
  customAmount: DEFAULT_CUSTOM_AMOUNT,
  showCustomAmountInput: false,
}
const gameState = reactive(clickerGame)

const topUpBalance = (amount) => {
  gameState.balance += amount
}

const onCustomAmountButtonCLick = () => {
  gameState.showCustomAmountInput = true
}

const topUpBalanceByCustomAmount = () => {
  topUpBalance(parseInt(gameState.customAmount))
  gameState.customAmount = DEFAULT_CUSTOM_AMOUNT
  gameState.showCustomAmountInput = false
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
