<template>
  <div class="container">
    <h1 class="header">
      <span class="header-term">Reversi</span>
      <span class="header-term">Problem</span>
    </h1>
    <Hr />
    <NuxtLink class="button" to="/random">Random Problem</NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
.button {
  border: thin solid #063c06;
  border-radius: 0.25rem;
  color: #063c06;
  display: block;
  font-size: 1.4rem;
  margin: 2rem 0;
  padding: 0.8rem 2rem;
  text-decoration: none;
}

.container {
  margin-top: 4rem;
}

.header {
  color: #063c06;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-weight: 300;
  font-size: 3rem;
  letter-spacing: 1px;
}

.header-term {
  display: block;
}
</style>
