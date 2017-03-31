import React, { Component } from 'react'

import './TaskBlock.css'
import HelpButton from '../HelpButton/HelpButton.js'
import TaskRadioButton from '../TaskRadioButton/TaskRadioButton.js'

class TaskBlock extends Component {
  render() {
    return (
      <div className="task-block-wrapper">
        <div className="task-text">
          {this.props.taskQuestion}
        </div>
        <div className="help-button-layout">
          <HelpButton />
        </div>
        <form className="task-answers">
          <TaskRadioButton>
            8 минут
          </TaskRadioButton>
          <TaskRadioButton>
            13 минут 30 секунд
          </TaskRadioButton>
          <TaskRadioButton>
            10 минут
          </TaskRadioButton>
          <TaskRadioButton>
            12 минут 30 секунд
          </TaskRadioButton>
        </form>
      </div>
    )
  }
}

export default TaskBlock
