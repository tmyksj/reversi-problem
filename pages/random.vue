<template>
  <div class="container">
    <p>Generating...</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ReversiProblemWorker from '~/assets/javascripts/workers/reversi-problem.worker'

export default Vue.extend({
  data() {
    return {
      sizes: [3, 4, 5, 5, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8],
      values: [5, 5, 5, 5, 6, 6, 6, 7, 7, 8],
      wins: [1],
      worker: null,
    }
  },

  created() {
    const worker: any = new ReversiProblemWorker()

    worker.addEventListener('message', (event: any): void => {
      this.$router.replace('/problem/' + event.data)
    })

    worker.postMessage([
      this.sizes[Math.floor(Math.random() * this.sizes.length)],
      this.wins[Math.floor(Math.random() * this.wins.length)],
      this.values[Math.floor(Math.random() * this.values.length)],
    ])

    this.worker = worker
  },

  beforeDestroy() {
    const worker: any = this.worker
    if (worker !== null) {
      worker.terminate()
    }
  },
})
</script>

<style scoped>
.container {
  margin: 4rem 0;
}
</style>
