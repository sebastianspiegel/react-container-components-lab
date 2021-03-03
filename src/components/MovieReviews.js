// Code MovieReviews Here

import React from 'react'

const Review = ({
    headline,
    display_title,
    byline,
    summary_short
}) => {
    return (
        <div className="review">
            <h1>{display_title}</h1>
            <h2>{headline}</h2>
            <h5>{byline}</h5>
            <p>{summary_short}</p>
            ____
        </div>
    )
}

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews