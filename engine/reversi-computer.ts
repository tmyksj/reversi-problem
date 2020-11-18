import { Reversi } from '~/engine/reversi'

export class ReversiComputer {
  public static put(reversi: Reversi): Reversi {
    const r: Reversi = reversi.evaluate()

    let y: number = -1
    let x: number = -1
    let value: number = -Infinity
    for (let i = 0; i < Reversi.size; i++) {
      for (let j = 0; j < Reversi.size; j++) {
        const v: number | null = r.value(i, j)
        if (v !== null && v > value) {
          y = i
          x = j
          value = v
        }
      }
    }

    return r.put(y, x)
  }

  public static putRoughly(reversi: Reversi) {
    const w: { y: number; x: number }[] = this.weight()

    while (true) {
      try {
        const p: { y: number; x: number } =
          w[Math.floor(Math.random() * w.length)]
        return reversi.put(p.y, p.x)
      } catch (e) {}
    }
  }

  private static weight(): { y: number; x: number }[] {
    const ret: { y: number; x: number }[] = []
    for (let i = 0; i < Reversi.size; i++) {
      for (let j = 0; j < Reversi.size; j++) {
        const w: number =
          (i === 0 && j === 0) ||
          (i === 0 && j === Reversi.size - 1) ||
          (i === Reversi.size - 1 && j === 0) ||
          (i === Reversi.size - 1 && j === Reversi.size - 1)
            ? 5
            : (i === 1 && j === 1) ||
              (i === 1 && j === Reversi.size - 2) ||
              (i === Reversi.size - 2 && j === 1) ||
              (i === Reversi.size - 2 && j === Reversi.size - 2)
            ? 1
            : 3
        for (let k = 0; k < w; k++) {
          ret.push({ y: i, x: j })
        }
      }
    }

    return ret
  }
}
