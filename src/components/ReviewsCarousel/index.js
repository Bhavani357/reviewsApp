import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    currentIndex: 0,
  }

  onRightArrowClick = () => {
    const {currentIndex} = this.state
    const {reviewsList} = this.props

    if (currentIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
      }))
    }
  }

  itemChange = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="reviews-container">
        <img src={imgUrl} alt={username} className="image" />

        <p className="name">{username}</p>
        <p className="company">{companyName}</p>
        <p className="company">{description}</p>
      </div>
    )
  }

  onLeftArrowClick = () => {
    const {currentIndex} = this.state

    if (currentIndex > 0) {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {currentIndex} = this.state

    const currentReview = reviewsList[currentIndex]

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="card-container">
          <button
            type="button"
            className="arrow"
            data-testid="leftArrow"
            onClick={this.onLeftArrowClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.itemChange(currentReview)}
          <button
            type="button"
            className="arrow"
            data-testid="rightArrow"
            onClick={this.onRightArrowClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
