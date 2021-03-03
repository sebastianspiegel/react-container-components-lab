import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {

    state={
        reviews: [],
        searchTerm: ""
    }

    handleChange = (event) => {
        const value = event.target.value
        this.setState({
            searchTerm: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(URL.concat(this.state.searchTerm))
        .then(resp => resp.json())
        .then(json => this.setState({ reviews: json.results }))
    }

    render(){
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange}/>
                    <input type="submit" />
                </form>
                {/* {this.state.reviews !== [] ? <MovieReviews reviews={this.state.reviews} /> } */}
                {typeof this.state.reviews === 'object' &&
          this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
        <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}