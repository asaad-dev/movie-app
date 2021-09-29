import React from 'react';

class Card extends React.Component {
    render() {
        return (
             <div className="text-center">
                <img src={`https://image.tmdb.org/t/p/w300${this.props.poster_path}`} alt="" />
                <h2>{this.props.title}</h2>
                <h3>{this.props.release_date}</h3>
                <p>{this.props.overview}</p>
             </div>
        );
    }
}

export default Card;