import React, { Component } from 'react'
import './search.css';
import pic from '../asset/johnwick.webp';



 class search extends Component {
  render(props) {
        
    return (

      <section>
        <div className="container-fluid">
            <div className="row searchResult">
                <div className="col-2 sideNav">
                    <h2>MovieBox</h2>
                        <aside>
                            <div><a href="">Home</a></div>
                            <div><a href="">Movies</a></div>
                            <div><a href="">TV Series</a></div>
                            <div><a href="">Upcoming</a></div>

                            <div>
                                play Movie quizes and earn free tickets
                                50K people are playing now 
                                <div>
                                <button className='btn btn-outline-danger'>start playing</button>
                                </div>
                            </div>
                        </aside>



                </div>
                <div className="col-10 searchMovie">
                    <img src={pic} alt="" />
                    <div className="row">
                        <div className='col-md-8'>
                        <article>
                            <strong>movietitle</strong>
                            <li>2022</li>
                            <li>pg-13</li>
                            <li>2h 10m</li>
                            <span>Action</span>
                            <span>Drama</span>
                        </article>
                            <h6>
                                Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Ratione facilis expedita
                                aut enim sint aliquam labore perspiciatis soluta dolorem accusamus?
                            </h6>
                        </div>
                        <div className='col-md-4'>
                            <article>favorite 9098798</article>
                            <div className='btn-section-search'>
                                <a href=""><button className='btn btn-danger'>See Showtimes</button></a>
                                <a href=""><button className='btn btn-outline-danger'>More Watch Options</button></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
      </section>
    )
  }
}

export default search
