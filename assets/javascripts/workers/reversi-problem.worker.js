import { ReversiProblem } from 'assets/javascripts/engine/reversi-problem'

export default class {}

addEventListener('message', (event) => {
  postMessage(
    ReversiProblem.generate(
      event.data[0],
      event.data[1],
      event.data[2]
    ).toString()
  )
})
