import {Component} from 'react'

import './index.css'

// Sai Teja's Code

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onSearchInputs = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const lettersCount = searchInput.length

    return (
      <div className="main-con">
        <div className="side-con">
          <h1 className="head">Calculate the Letters you enter</h1>
          <label htmlFor="sample-search">Enter the phrase</label>
          <br />
          <input
            type="text"
            id="sample-search"
            placeholder="Enter the phrase"
            className="input-bar"
            value={searchInput}
            onChange={this.onSearchInputs}
          />
          <div className="count-con">
            <p className="count">No.of letters: {lettersCount}</p>
          </div>
        </div>
        <img
          alt="letters calculator"
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
        />
      </div>
    )
  }
}

export default LettersCalculator
