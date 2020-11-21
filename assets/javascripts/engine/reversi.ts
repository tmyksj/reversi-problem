import { ReversiError } from '~/assets/javascripts/engine/reversi-error'

type Count = {
  None: number
  Dark: number
  Light: number
}

const Disk = {
  None: 'None',
  Dark: 'Dark',
  Light: 'Light',
} as const

type Disk = typeof Disk[keyof typeof Disk]

export class Reversi {
  public static readonly size: number = 8

  private readonly _board: Disk[]

  private readonly _count: Count

  private readonly _turn: Disk

  private readonly _value: (number | null)[]

  private constructor(board: Disk[], turn: Disk, value: (number | null)[]) {
    this._board = board
    this._turn = turn
    this._value = value

    this._count = {
      None: board.filter((value: Disk): boolean => {
        return value === Disk.None
      }).length,
      Dark: board.filter((value: Disk): boolean => {
        return value === Disk.Dark
      }).length,
      Light: board.filter((value: Disk): boolean => {
        return value === Disk.Light
      }).length,
    }
  }

  public count(): Count {
    return this._count
  }

  public evaluate(): Reversi {
    const value: (number | null)[] = new Array<number | null>(
      Reversi.size * Reversi.size
    ).fill(null)

    for (let i: number = 0; i < Reversi.size; i++) {
      for (let j: number = 0; j < Reversi.size; j++) {
        if (Reversi.isReversible(this._board, this._turn, i, j)) {
          const r: Count = Reversi.dfs(this.put(i, j))
          value[Reversi.pos(i, j)] =
            r[this._turn] - r[this._turn === Disk.Dark ? Disk.Light : Disk.Dark]
        }
      }
    }

    return new Reversi(this._board, this.turn(), value)
  }

  public get(y: number, x: number): Disk {
    return this._board[Reversi.pos(y, x)]
  }

  public put(y: number, x: number): Reversi {
    if (!Reversi.isReversible(this._board, this._turn, y, x)) {
      throw new ReversiError()
    }

    const board: Disk[] = Array.from(this._board)
    Reversi.reverse(board, this._turn, y, x)

    const turn: Disk =
      this._turn === Disk.Dark
        ? Reversi.isReversibleSome(board, Disk.Light)
          ? Disk.Light
          : Reversi.isReversibleSome(board, Disk.Dark)
          ? Disk.Dark
          : Disk.None
        : Reversi.isReversibleSome(board, Disk.Dark)
        ? Disk.Dark
        : Reversi.isReversibleSome(board, Disk.Light)
        ? Disk.Light
        : Disk.None

    const value: (number | null)[] = new Array<number | null>(
      Reversi.size * Reversi.size
    ).fill(null)

    return new Reversi(board, turn, value)
  }

  public toString(): string {
    const from: Disk[] = [Disk.None, Disk.Dark, Disk.Light]
    const to: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(
      ''
    )

    let n: BigInt = this._board
      .concat(this._turn)
      .map(
        (value: Disk): BigInt => {
          // eslint-disable-next-line no-undef
          return BigInt(from.indexOf(value))
        }
      )
      .reduce((previousValue: BigInt, currentValue: BigInt): BigInt => {
        // @ts-ignore
        // eslint-disable-next-line no-undef
        return BigInt(from.length) * previousValue + currentValue

        // eslint-disable-next-line no-undef
      }, BigInt(0))

    const ret: string[] = []

    // @ts-ignore
    // eslint-disable-next-line no-undef
    for (; n > BigInt(0); n /= BigInt(to.length)) {
      // @ts-ignore
      // eslint-disable-next-line no-undef
      ret.push(to[n % BigInt(to.length)])
    }

    return ret.reverse().join('')
  }

  public turn(): Disk {
    return this._turn
  }

  public value(y: number, x: number): number | null {
    return this._value[Reversi.pos(y, x)]
  }

  public static fromString(str: string): Reversi {
    const from: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(
      ''
    )
    const to: Disk[] = [Disk.None, Disk.Dark, Disk.Light]

    let n: BigInt = str
      .split('')
      .map(
        (value: string): BigInt => {
          // eslint-disable-next-line no-undef
          return BigInt(from.indexOf(value))
        }
      )
      .reduce((previousValue: BigInt, currentValue: BigInt): BigInt => {
        // @ts-ignore
        // eslint-disable-next-line no-undef
        return BigInt(from.length) * previousValue + currentValue

        // eslint-disable-next-line no-undef
      }, BigInt(0))

    const ret: Disk[] = []

    // @ts-ignore
    // eslint-disable-next-line no-undef
    for (; n > BigInt(0); n /= BigInt(to.length)) {
      // @ts-ignore
      // eslint-disable-next-line no-undef
      ret.push(to[n % BigInt(to.length)])
    }

    ret.reverse()

    const board: Disk[] = new Array<Disk>(this.size * this.size)
      .fill(Disk.None)
      .map(
        (value: Disk, index: number): Disk => {
          if (index - this.size * this.size + ret.length - 1 >= 0) {
            return ret[index - this.size * this.size + ret.length - 1]
          } else {
            return value
          }
        }
      )

    const turn: Disk = ret[ret.length - 1]

    const value: (number | null)[] = new Array<number | null>(
      this.size * this.size
    ).fill(null)

    return new Reversi(board, turn, value)
  }

  public static initialize(): Reversi {
    const board: Disk[] = new Array<Disk>(this.size * this.size).fill(Disk.None)
    board[this.pos(this.size / 2 - 1, this.size / 2 - 1)] = Disk.Light
    board[this.pos(this.size / 2 - 1, this.size / 2)] = Disk.Dark
    board[this.pos(this.size / 2, this.size / 2 - 1)] = Disk.Dark
    board[this.pos(this.size / 2, this.size / 2)] = Disk.Light

    const turn: Disk = Disk.Dark

    const value: (number | null)[] = new Array<number | null>(
      this.size * this.size
    ).fill(null)

    return new Reversi(board, turn, value)
  }

  private static dfs(reversi: Reversi): Count {
    if (reversi._turn === Disk.None) {
      return {
        None: 0,
        Dark:
          reversi._count.Dark +
          (reversi._count.Dark > reversi._count.Light
            ? reversi._count.None
            : 0),
        Light:
          reversi._count.Light +
          (reversi._count.Light > reversi._count.Dark
            ? reversi._count.None
            : 0),
      }
    }

    let ret: Count = {
      None: 0,
      Dark: -1,
      Light: -1,
    }

    for (let i: number = 0; i < this.size; i++) {
      for (let j: number = 0; j < this.size; j++) {
        if (this.isReversible(reversi._board, reversi._turn, i, j)) {
          const r: Count = this.dfs(reversi.put(i, j))
          if (ret[reversi._turn] < r[reversi._turn]) {
            ret = r
          }
        }
      }
    }

    return ret
  }

  private static isReversible(
    board: Disk[],
    turn: Disk,
    y: number,
    x: number
  ): boolean {
    if (board[this.pos(y, x)] !== Disk.None) {
      return false
    }

    const dy: number[] = [-1, -1, -1, 0, 0, 1, 1, 1]
    const dx: number[] = [-1, 0, 1, -1, 1, -1, 0, 1]

    for (let i: number = 0; i < 8; i++) {
      if (this.isReversibleDelta(board, turn, y, x, dy[i], dx[i])) {
        return true
      }
    }

    return false
  }

  private static isReversibleDelta(
    board: Disk[],
    turn: Disk,
    y: number,
    x: number,
    dy: number,
    dx: number
  ): boolean {
    for (
      let i: number = y + dy, j: number = x + dx, k: number = 0;
      i >= 0 && i < this.size && j >= 0 && j < this.size;
      i += dy, j += dx, k++
    ) {
      if (board[this.pos(i, j)] === Disk.None) {
        return false
      } else if (board[this.pos(i, j)] === turn) {
        return k !== 0
      }
    }

    return false
  }

  private static isReversibleSome(board: Disk[], turn: Disk): boolean {
    for (let i: number = 0; i < this.size; i++) {
      for (let j: number = 0; j < this.size; j++) {
        if (this.isReversible(board, turn, i, j)) {
          return true
        }
      }
    }

    return false
  }

  private static pos(y: number, x: number): number {
    return this.size * y + x
  }

  private static reverse(board: Disk[], turn: Disk, y: number, x: number) {
    const dy: number[] = [-1, -1, -1, 0, 0, 1, 1, 1]
    const dx: number[] = [-1, 0, 1, -1, 1, -1, 0, 1]

    for (let i: number = 0; i < 8; i++) {
      if (this.isReversibleDelta(board, turn, y, x, dy[i], dx[i])) {
        this.reverseDelta(board, turn, y, x, dy[i], dx[i])
      }
    }

    board[this.pos(y, x)] = turn
  }

  private static reverseDelta(
    board: Disk[],
    turn: Disk,
    y: number,
    x: number,
    dy: number,
    dx: number
  ) {
    for (
      let i: number = y + dy, j: number = x + dx;
      i >= 0 && i < this.size && j >= 0 && j < this.size;
      i += dy, j += dx
    ) {
      if (board[this.pos(i, j)] === turn) {
        break
      }

      board[this.pos(i, j)] = turn
    }
  }
}
