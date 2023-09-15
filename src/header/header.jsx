import React, { Component } from 'react';
import './header.css';
import headerBg from '../asset/johnwick.webp';
import axios from 'axios';
import {BiMoviePlay} from 'react-icons/bi';
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {AiOutlinePlayCircle} from 'react-icons/ai';
import Search from '../search/search';


 class header extends Component {
    constructor(props){
        super(props);
        this.state = {
          
            johnWick: "",
            query: '',
            results: []
        };

    }
    componentDidMount(){
        axios.get('https://api.themoviedb.org/3/movie/458156',{
            params: {
                api_key: '89707361b16946b90801886bc1f0622c'  
            }
        })
        .then(response => {
           
            const johnWick = response.data;
            

            this.setState({ johnWick });
            

        })
        .catch(error => {
            console.error(error);
        })}
    handleInputChange = (event) => {
        this.setState({query: event.target.value});
    };
    handleSearch=()=> {
        const apikey = '89707361b16946b90801886bc1f0622c' ;
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${this.state.query}`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState({results: data.results});
            // if (data.results && data.results.length > 0){
                
            // }
            // else{
            //     this.setState({results:[]})
            //

            
        })
        .catch (error=> {console.log(error);
        });
    }
     
  render() {
    const {results} =this.state
    return (
      <section id='header-section'>
        <div>
            <nav className='navbar navbar-expand-lg'>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"> <BiMoviePlay /> MovieBox</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className='navbar-nav'>
                        <form  className="d-flex col-md-6 mx-auto" role="search" >
                            <input className="form-control me-2 search" type="search" placeholder="What do you want to watch?" aria-label="Search" value={this.state.query} onChange={this.handleInputChange}/>
                            <button className="btn btn-primary" type="submit" onClick={this.handleSearch}>Search</button>
                        </form>

                            <li className='nav-item'>
                                <a href="" className='nav-link'>Sign in</a>
                            </li>
                            <li className='nav-item'>
                                <a href="" className='nav-link'><HiOutlineMenuAlt4/></a>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
            
        </div>


        {/* //section-first-section */}



        <section id='first-section'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <h1>{this.state.johnWick.title}</h1>
                        
                        <p>
                            {/* =====space for icons */}
                            {this.state.johnWick.overview}

                        </p>

                        <a href=""><button className='btn btn-danger'><AiOutlinePlayCircle/>WATCH TRAILER</button></a>
                    </div>
                </div>
            </div>
        </section>
        {/* <Search result = {results} /> */}
        {this.state.results}
      </section>

      
    )

  }
}



export default header;

