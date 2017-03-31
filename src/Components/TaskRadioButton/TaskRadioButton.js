import React, { Component } from 'react'

import './TaskRadioButton.css'

class TaskRadioButton extends Component {

  render() {

    return (
      <div className="task-radio-wrapper">
        <label className="task-radio-label">
          <input name="test" type="radio" />
          <span className="radio-mock-input" />
          <span className="radio-answer-text">{this.props.children}</span>
        </label>
      </div>
    )
  }
}

export default TaskRadioButton
