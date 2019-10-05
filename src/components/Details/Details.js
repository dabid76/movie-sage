import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

class Details extends Component {

    // state = {
    //     movie: []
    // }

    // componentDidMount() {
    //     this.ID()
    // }
    // ID = (id) => {
    //     console.log(this.props.match.params.id)
    //     this.props.dispatch({ type: 'GET_DETAILS', payload: id })
    // }

    backBtn = () => {
        console.log('back btn click')
        this.props.history.push('/')

    }
    
    editBtn = (id) => {
        console.log('edit btn click')
        this.props.history.push(`/Edit/${this.props.match.params.id}`)
    }

    render() {
        let movieTitle;
        let moviePoster;
        let movieDescription;

        let filmInfo = this.props.reduxStore.genres.map((movie, id) => {
            if( id === 0) {
                movieTitle = <h1 key={id}>{movie.title}</h1>;
                moviePoster = <img src={movie.poster} />;
                movieDescription = <p>{movie.description}</p>;
            }
            return (<ul key = {movie.id}><li>{movie.name}</li></ul>)
        })
        return (
            <div className="description">
                <button  onClick = {this.backBtn}>Back</button>
                <button  onClick = {this.editBtn}>Edit</button>
                {movieTitle}
                {moviePoster}
                {movieDescription}
                {filmInfo}
            </div>
        );
    }
}
const mapStateToProps = reduxStore => {
    return {
        reduxStore
    };
};

export default connect(mapStateToProps)(Details);