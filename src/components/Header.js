import React from 'react'

// 画像をそれぞれimportします。パスに注意してください。
import CoverImage from '../images/demo.jpg';
import ProfileImage from '../images/myface.jpg';
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Header = () => {

  const componentName = () => 'Header';
  return (
    <header className="main-cover" style={{ backgroundImage: `url(${CoverImage})`}}>
        <div className="overlay"></div>
        <div className="container">
            <div className="display-table">
                <div className="display-table-contents">
                    <div className="profile-thumb" style={{backgroundImage: `url(${ProfileImage})`}}></div>
                    <h1 className="title-text">Takuya Machida</h1>
                    <h3 className="title-text">I am a software engineer at Machimaru System.</h3>
                    <ul className="social-icons">
                        <li className="icon-link">
                            <a href="https://github.com/ta9son" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                        </li>
                        <li className="icon-link">
                            <a href="https://twitter.com/Machimaru_s" target="_blank" rel="noopener noreferrer">
                                <FaTwitter />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
