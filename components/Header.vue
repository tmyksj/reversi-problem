<template>
  <div class="container">
    <header>
      <h1 class="header">
        <NuxtLink class="header-link" to="/">Reversi Problem</NuxtLink>
      </h1>
    </header>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
.container {
  background-color: #0b6a0b;
  padding: 0.6rem 2rem;
}

.header {
  font-size: 1.6rem;
}

.header-link {
  color: #faf9f8;
  text-decoration: none;
}
</style>
