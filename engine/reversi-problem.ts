import { Reversi } from '~/engine/reversi'
import { ReversiComputer } from '~/engine/reversi-computer'

export class ReversiProblem {
  public static generate(
    size: number,
    thresholdWin: number,
    thresholdValue: number
  ): Reversi {
    while (true) {
      const reversi: Reversi = this.base(size).evaluate()

      let win = 0
      let value = 0
      for (let i = 0; i < Reversi.size; i++) {
        for (let j = 0; j < Reversi.size; j++) {
          const v: number | null = reversi.value(i, j)
          if (v !== null && v > 0) {
            win++
            value = Math.max(value, v)
          }
        }
      }

      if (win >= 1 && win <= thresholdWin && value <= thresholdValue) {
        return reversi
      }
    }
  }

  private static base(size: number): Reversi {
    let reversi: Reversi = Reversi.initialize()
    for (let i = 0; i < Reversi.size * Reversi.size - size - 4; i++) {
      reversi = ReversiComputer.putRoughly(reversi)
    }

    return reversi
  }
}
