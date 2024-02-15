<template>
  <h2>Task #2: Custom Button</h2>

  <p>
    <strong>Improve MyButton implementation:</strong>
  </p>
  <ul>
    <li>MyButton should respond to keyboard (Tab, Space, Enter)</li>
    <li>Ripple should start from pointer position (now always centered)</li>
    <li>
      Any further UX improvements are welcome! <br />
      Imagine if it's a real button for production use,
      does it lack anything else compared to default browser
      <code>button</code>?
    </li>
  </ul>
  <p>
    <strong>Limitations:</strong>
    For this task avoid replacing root element of
    <code>&lt;my-button /&gt;</code>
    from <code>span</code> to <code>button</code>.
    <br />
    This definitely makes sense for this element,
    but would make the task too easy.
  </p>

  <p>
    <my-button @click="onClick">
      I have ripples!
    </my-button>
  </p>
  <p>
    <my-button
      :ripple="false"
      @click="onClick"
    >
      I don't have ripples!
    </my-button>
  </p>
</template>

<script setup>
import MyButton from "../components/MyButton.vue"

const onClick = () => {
  console.log('Hello, World!')
}
</script>
