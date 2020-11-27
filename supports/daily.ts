import { readFileSync, writeFileSync } from 'fs'
import { ReversiProblem } from '~/assets/javascripts/engine/reversi-problem'
;(() => {
  const sizes: number[] = [9, 10]
  const values: number[] = [5, 6, 7, 8]
  const wins: number[] = [1]

  const path: string = '../static/daily.json'
  const data: any = JSON.parse(readFileSync(path).toString())

  const from: number = Date.parse(process.argv[2])
  const to: number = Date.parse(process.argv[3])

  for (let i = from; i <= to; i += 24 * 60 * 60 * 1000) {
    const s: number = sizes[Math.floor(Math.random() * sizes.length)]
    const v: number = values[Math.floor(Math.random() * values.length)]
    const w: number = wins[Math.floor(Math.random() * wins.length)]

    data[i] = ReversiProblem.generate(s, w, v).toString()

    // eslint-disable-next-line no-console
    console.log(new Date(i), data[i], s, w, v)
  }

  writeFileSync(path, JSON.stringify(data) + '\n')
})()
