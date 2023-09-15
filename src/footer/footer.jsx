import React, { Component } from 'react';
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiFillFacebook} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';
import './footer.css';

const year = new Date().getFullYear()
 class footer extends Component {
  render() {
    return (
      <section>
        <div className="container-fluid">
        <footer>
            <div className="footer-icons">
                <AiFillFacebook />
                <AiOutlineInstagram />
                <AiOutlineTwitter />
                <AiFillYoutube />
            </div>
            <article>
                <span>Conditions of use</span>
                <span>Privacy & policy</span>
                <span>Press Room</span>
            </article>
            <small>© {year} MovieBox by jozzydgr8</small>
        </footer>
        </div>

      </section>
    )
  }
}

export default footer
