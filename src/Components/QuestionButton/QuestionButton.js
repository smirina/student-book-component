import React, { Component } from 'react'

import './QuestionButton.css'

class QuestionButton extends Component {

  render() {

    return (
      <button className="question-button">
        <div className="button-tag">Проверить ответ</div>
        <div className="button-tag-attempt">Попытка {this.props.thisAttempt} из {this.props.allAttempts}</div>
      </button>
    )
  }
}

export default QuestionButton
