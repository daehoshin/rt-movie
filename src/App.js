import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';

class App extends  Component {

    // render : componentWillMount() -> render() -> componentDidMount();
    // update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

    state = {}

    componentDidMount() {
        this._getMovies();
    }

    _renderMovies = () => {
        const movies = this.state.movies.map((movie, index) => {
            return <Movie
                title={movie.title_english}
                poster={movie.large_cover_image}
                key={index}
                genres={movie.genres === undefined?['test']:movie.genres}
                synopsis={movie.synopsis}
            />
        })
        return movies
    }

    _getMovies = async () => {
        const movies = await this._callApi();
        this.setState({
            movies
        })
    }

    _callApi = () => {
        return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=download count')
            .then(res=>res.json())
            .then(json => json.data.movies)
            .catch(err=>console.log(err));
    }

    render() {
      const {movies} = this.state;
      return (
          <div className={movies ? "App" : "App--loading"}>
              {movies ? this._renderMovies() : "" }
          </div>
      );
    }
}

export default App;
