import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    generatedNum: 0,
  }

  Generate = () => {
    this.setState({
      generatedNum: Math.ceil(Math.random() * 100),
    })
  }

  render() {
    const {generatedNum} = this.state

    return (
      <div className="random-number-container">
        <div className="random-container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            onClick={this.Generate}
            className="generate-button"
          >
            Generate
          </button>
          <p className="random-num">{generatedNum}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
