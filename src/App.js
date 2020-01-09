import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
    {
        title: "Matrix",
        poster: "http://2korea.hani.co.kr/files/attach/images/64/981/316/001.jpg"
    },
    {
        title: "Full Metal Jacket",
        poster: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/54889f61456519.5a6f727ec4709.jpeg"
    },
    {
        title: "Oldboy",
        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
    },
    {
        title: "Star Wars",
        poster: "https://fsmedia.imgix.net/d2/6c/c5/1d/7991/47e2/b0be/74ccd76d8ad9/star-wars-rise-of-skywalker-leaks-theories-spoilers.jpeg?rect=3%2C0%2C742%2C371&auto=format%2Ccompress&dpr=2&w=650"
    }
]

class App extends  Component {

    // render : componentWillMount() -> render() -> componentDidMount();

    // update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

    componentWillMount(){
        console.log('will mount');
    }

    componentDidMount(){
        console.log('did mount');
    }

    render() {
      console.log('did render');
      return (
          <div className="App">
              {movies.map((movie, index) => {
                return <Movie key={index} title={movie.title} poster={movie.poster}/>
              })}
          </div>
      );
    }
}

export default App;
