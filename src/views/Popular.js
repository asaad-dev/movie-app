import React from 'react';
import Card from '../components/Card';

class Popular extends React.Component {
    constructor() {
        super();

        this.state = {
            movies: [],
        };

    }

    componentDidMount() {
        const url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key={9320ab93521ec312f8778f8e1cf4fa97}";

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log("data in popular component did mount", data);

                this.setState({
                    movies: data.results
                })
        })
    }

    render() {
        return (
             <div className="container">
                <h1 className="text-center">Popular</h1>
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

export default Popular;