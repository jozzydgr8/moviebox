import React, { Component } from 'react';
import './feature.css';
import axios from 'axios';

class feature extends Component {
    constructor(props){
        super(props);
        this.state={
             topMovies:[]
            
        };
    }
    componentDidMount(){
        axios.get('https://api.themoviedb.org/3/movie/top_rated',{
            params: {
                api_key: '89707361b16946b90801886bc1f0622c'  
            }
        })
        .then(response => {
            console.log(response.data);
            const topMovies = response.data.results.slice(0, 10);
            

            this.setState({ topMovies });
            

        })
        .catch(error => {
            console.error(error);
        })

        
    }


    render () {

        const {topMovies} = this.state


        return (
            <section id='feature-section'>
            <div className="container-fluid">
                <h1>Featured Movie</h1>
                <div className="grid-feature">
                    {topMovies.map((file)=> (
                    <article key = {file.id}>
                            <img src={`https://image.tmdb.org/t/p/original/${file.poster_path}`} alt={file.title} />
                            <h2>{file.title}</h2>
                            <small>{file.release_date}</small>
                        </article>
                    ))}
                </div>


            </div>
          </section>
        )
    }
}



export default feature


    