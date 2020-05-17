import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="nav">
                <div className="left-div">
                    <img src="" alt="logo" />
                </div>
                <div className="search-container">
                    <img className="search-icon" src="https://image.flaticon.com/icons/svg/483/483356.svg" alt="searchIcon" />
                    <input placeholder="Search" />
                    <div className="search-results">
                        <ul>
                            <li className="search-results-row">
                                <img src="https://image.flaticon.com/icons/svg/2154/2154651.svg" alt="user-dp" />
                                <span>John Doe</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="right-nav">
                    <div className="user">
                        <img src="https://image.flaticon.com/icons/svg/2154/2154651.svg" alt="user-dp" id="user-dp" />
                        <span>John Doe</span>
                    </div>
                    <div className="nav-links">
                        <ul>
                            <li>Log in</li>
                            <li>Log out</li>
                            <li>Register</li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
