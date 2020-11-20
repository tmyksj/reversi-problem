<template>
  <div class="container">
    <div class="info-computer">
      <div
        :style="{ width: cellSize / 2 + 'px', height: cellSize / 2 + 'px' }"
        class="info-computer-cell"
      >
        <span v-if="turnComputer === 'Dark'" class="disk-dark"></span>
        <span v-if="turnComputer === 'Light'" class="disk-light"></span>
      </div>
      <div class="info-computer-label">Computer</div>
      <div class="info-computer-label">{{ reversi.count()[turnComputer] }}</div>
    </div>
    <div ref="board" class="board">
      <div v-for="i in reversiSize" :key="i" class="board-row">
        <div
          v-for="j in reversiSize"
          :key="j"
          :style="{ width: cellSize + 'px', height: cellSize + 'px' }"
          class="board-cell"
          @click="put(i - 1, j - 1)"
        >
          <span
            v-if="reversi.get(i - 1, j - 1) === 'Dark'"
            class="disk-dark"
          ></span>
          <span
            v-if="reversi.get(i - 1, j - 1) === 'Light'"
            class="disk-light"
          ></span>
          <span v-if="showValue" class="value">{{
            reversi.value(i - 1, j - 1)
          }}</span>
        </div>
      </div>
    </div>
    <div class="info-player">
      <div
        :style="{ width: cellSize / 2 + 'px', height: cellSize / 2 + 'px' }"
        class="info-player-cell"
      >
        <span v-if="turnPlayer === 'Dark'" class="disk-dark"></span>
        <span v-if="turnPlayer === 'Light'" class="disk-light"></span>
      </div>
      <div class="info-player-label">Player</div>
      <div class="info-player-label">{{ reversi.count()[turnPlayer] }}</div>
    </div>
    <Hr />
    <div class="tools">
      <button class="button tools-item" @click="reload()">Reload</button>
      <button v-if="showValue" class="button tools-item" @click="hide()">
        Hide value
      </button>
      <button v-if="!showValue" class="button tools-item" @click="show()">
        Show value
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Reversi } from '~/engine/reversi'
import { ReversiComputer } from '~/engine/reversi-computer'

export default Vue.extend({
  data() {
    const id: string = this.$route.params.id
    const reversi: Reversi = Reversi.fromString(id).evaluate()

    return {
      cellSize: 0,
      id,
      readonly: false,
      reversi,
      reversiSize: Reversi.size,
      showValue: false,
      timeout: 500,
      timeoutId: 0,
      turnComputer: reversi.turn() === 'Dark' ? 'Light' : 'Dark',
      turnPlayer: reversi.turn(),
    }
  },

  mounted() {
    this.cellSize = (this.$refs.board as any).clientWidth / this.reversiSize
  },

  methods: {
    hide() {
      this.showValue = false
    },

    put(y: number, x: number) {
      if (this.readonly) {
        return
      }

      try {
        this.reversi = this.reversi.put(y, x).evaluate()
      } catch (e) {
        return
      }

      const next: () => void = (): void => {
        if (this.reversi.turn() === this.turnPlayer) {
          this.readonly = false
        } else if (this.reversi.turn() === 'None') {
          this.readonly = true
        } else {
          this.readonly = true
          this.timeoutId = window.setTimeout((): void => {
            this.reversi = ReversiComputer.put(this.reversi).evaluate()
            next()
          }, this.timeout)
        }
      }

      next()
    },

    reload() {
      window.clearTimeout(this.timeoutId)

      this.reversi = Reversi.fromString(this.id).evaluate()
      this.readonly = false
    },

    show() {
      this.showValue = true
    },
  },
})
</script>

<style scoped>
.board {
  background-color: #0b6a0b;
  border: 1rem solid #063c06;
}

.board-cell {
  align-items: center;
  border: 0.1rem solid #063c06;
  display: flex;
  justify-content: center;
}

.board-row {
  display: flex;
}

.button {
  background-color: #faf9f8;
  border: thin solid #063c06;
  border-radius: 0.25rem;
  color: #063c06;
  cursor: pointer;
  display: block;
  font-size: 1.2rem;
  margin: 1rem 0;
  outline: none;
  padding: 0.4rem 1rem;
}

.button:hover {
  background-color: #edebe9;
}

.button:focus {
  box-shadow: 0 0 0.1rem #063c06;
}

.button:active {
  background-color: #c8c6c4;
}

.container {
  margin: 4rem 0;
}

.disk-dark {
  background-color: #201f1e;
  border-radius: 50%;
  display: block;
  height: 79%;
  width: 79%;
}

.disk-light {
  background-color: #faf9f8;
  border: 0.1rem solid #0b6a0b;
  border-radius: 50%;
  display: block;
  height: 76%;
  width: 76%;
}

.info-computer {
  align-items: center;
  display: flex;
  flex-direction: row-reverse;
  padding: 0 1rem 1rem;
}

.info-computer-cell {
  align-items: center;
  display: flex;
  justify-content: center;
}

.info-computer-label {
  font-size: 1.2rem;
  margin-right: 1rem;
}

.info-player {
  align-items: center;
  display: flex;
  padding: 1rem 1rem 0;
}

.info-player-cell {
  align-items: center;
  display: flex;
  justify-content: center;
}

.info-player-label {
  font-size: 1.2rem;
  margin-left: 1rem;
}

.tools {
  display: flex;
}

.tools-item {
  margin-right: 1rem;
}

.value {
  color: #fce100;
  cursor: default;
  font-size: 1.4rem;
}
</style>
