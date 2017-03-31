import React, { Component } from 'react'

import './Title.css'
import pencil from '../../images/png/pencil.png'

class Title extends Component {

  declOfNum (number, titles) {
    let cases = [2, 0, 1, 1, 1, 2]
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]]
  }

  render() {

    const ratingWord = this.declOfNum(this.props.qstnRating, ['балл', 'балла', 'баллов'])

    const rating = this.props.qstnRating + ' ' + ratingWord

    return (
      <div className="title-wrapper">
        <div className="title-qstn-type-wrapper">
          <div className="title-img-wrapper">
            <img
              src={pencil}
              alt="pencil icon"
              className="title-icon"
            />
          </div>
          <div className="title-qstn-type">
            {this.props.qstnType}
          </div>
        </div>
        <div className="title-qstn-rating">
          {rating}
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default Title
