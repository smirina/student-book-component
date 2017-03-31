import React, { Component } from 'react'

import './TaskWrapper.css'
import ray from '../../images/png/ray.png'

import QuestionButton from '../QuestionButton/QuestionButton.js'

class TaskWrapper extends Component {
  render() {
    return (
      <div className="task-wrapper">
        <div className="task-header">
          <div className="task-variant">
            Вариант {this.props.thisTaskVar} из {this.props.allTaskVars}
          </div>
          <div className="task-level">
            <img
              src={ray}
              alt="level icon"
              className="task-header-icon"
            />
            <span className="task-level-tag">
              {this.props.taskLevel}
            </span>
          </div>
        </div>
        <div className="task-block">
          {this.props.children}
        </div>
        <div className="task-bottom">
          <QuestionButton
            thisAttempt={this.props.thisAttempt}
            allAttempts={this.props.allAttempts}
          />
        </div>
      </div>
    )
  }
}

export default TaskWrapper
