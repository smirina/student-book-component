import React, { Component } from 'react'

import './Main.css'
import Title from '../Title/Title.js'
import TaskWrapper from '../TaskWrapper/TaskWrapper.js'
import TaskBlock from '../TaskBlock/TaskBlock.js'
import arrowBack from '../../images/png/arrow-left.png'
import anchorIcon from '../../images/png/anchor.png'
import mark from '../../images/png/mark.png'

class Main extends Component {
  render() {

    let taskQuestion = 'Сколько времени Борис решал 6 уравнений, если на каждое уравнение ему требовалось 2 мин 30 сек?'

    return (
      <div className="main-wrapper">
        <div className="tabs-block">
          <div className="tab tab-back">
            <img
              src={arrowBack}
              alt="arrow back icon"
              className="tab-icon"
            />
          </div>
          <div className="tab tab-stay">
            <img
              src={anchorIcon}
              alt="stay icon"
              className="tab-icon"
            />
          </div>
          <div className="tab tab-apply">
            <img
              src={mark}
              alt="apply icon"
              className="tab-icon"
            />
            <span className="tab-text">Применить</span>
          </div>
        </div>

        <div className="title-layout">
          <Title
            qstnType={'Контрольный вопрос'}
            qstnRating={3}
          />
        </div>
        <TaskWrapper
          thisAttempt={1}
          allAttempts={3}
          thisTaskVar={1}
          allTaskVars={5}
          taskLevel={'Повышенная сложность'}
        >
          <TaskBlock
            taskQuestion={taskQuestion}
          />
        </TaskWrapper>
      </div>
    )
  }
}

export default Main
