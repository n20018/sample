import React from 'react'
import './App.css'

class JangKengGame extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      basics: {
        player: null,
        computer: null,
        judgement: null
      },
      i18n: null
    }
    this.URI = 'http://localhost:8080/i18n.json'
    this.LANG = 'ja'
  }

  componentDidMount () {
    window
      .fetch(this.URI)
      .then(res => res.json())
      .then(json => json[this.LANG])
      .then(data => this.setState({ i18n: data }))
  }

  judge (cpu, user) {
    return (cpu !== user) % 3
  }

  handleClick (hand) {
    const userHand = hand
    const cpuHand = Math.floor(Math.random() * 4)
    const judgement = this.judge(cpuHand, userHand)
    this.setState({
      basics: { player: userHand, computer: cpuHand, judgement: judgement }
    })
  }

  render () {
    if (!this.state.i18n) return <div> Now Loading...</div>
    const { title, hands } = this.state.i18n
    return (
      <>
        <h1>{title}</h1>
        <TableView status={this.state} />
        <InputBox hands={hands} onClick={v => this.handleClick(v)} />
        <script src='src/Tab.jsx' />
      </>
    )
  }
}

const TableView = props => {
  const { player, computer, judgement } = props.status.basics
  const { hands, judgements, header } = props.status.i18n
  const contents = [
    [header[1], hands[computer]],
    [header[2], judgements[judgement]],
    [header[0], hands[player]]
  ]
  return (
    <div class="jundgements">
    <table>
      <tbody>
        {contents.map(([header, content]) => (
          <tr key={header}>
            <h3><th>{header}</th></h3>
            <td>{content}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

const InputBox = props => {
  const { hands, onClick } = props
  return (
    <>
　　　<div class="button-area">
      {hands.map((v, i) => (
        <button key={v} onClick={() => onClick(i)}>
          {v}
        </button>
      ))}
      </div>
    </>
  )
}





export default JangKengGame
