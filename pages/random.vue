<template>
  <div class="container">
    <p>Generating...</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Reversi } from '~/engine/reversi'
import { ReversiProblem } from '~/engine/reversi-problem'

export default Vue.extend({
  created() {
    setTimeout((): void => {
      const s: number[] = [3, 4, 5, 5, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8]
      const w: number[] = [1]
      const v: number[] = [5, 5, 6, 6, 7, 8]

      const r: Reversi = ReversiProblem.generate(
        s[Math.floor(Math.random() * s.length)],
        w[Math.floor(Math.random() * w.length)],
        v[Math.floor(Math.random() * v.length)]
      )

      this.$router.push('/problem/' + r.toString())
    }, 0)
  },
})
</script>

<style scoped>
.container {
  margin: 4rem 0;
}
</style>
