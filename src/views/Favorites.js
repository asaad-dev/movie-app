import React from 'react';
import Card from '../components/Card'

class Favorites extends React.Component {
    state = {
        movies: [],
        favIds: this.getStorage()
    }

    getStorage() {
        return JSON.parse(localStorage.getItem('favorites')) || []
    }

    getMovie(id) {

        getMovieAPI(id)
            .then(data => {
                const newMovies = {...this.state.movies, data: data}

                this.setState({ 
                    movies: newMovies
                })
            })
    }

    componentDidMount() {
        this.state.favIds.map(elem => this.getMovie(elem))
    }

    render() {
        return (
             <div className="container">
                 <h1 className="text-center">Favorite</h1>
                 <div className="row">
                     {this.state.movies.map(elem => {
                         return ( 
                             <div className="col-6">
                                 <Card {...elem} />
                             </div>
                         )
                     })}
                 </div>
             </div>
        );
    }
}

export default Favorites;