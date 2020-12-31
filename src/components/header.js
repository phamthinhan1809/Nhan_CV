import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
export default class Header extends Component {
    render() {
        return (
            <>
                <nav style={{ backgroundColor: '#58D3F7' }}>
                    <div className="container">
                    <div className="nav-wrapper">
                        <Link to='/' className='brand-logo' style={{color: 'black'}}>My CV</Link>
                        <ul className='sidenav' id='side-nav'>
                            <li>
                                <Link to='/' >
                                    <i className="fas fa-home"></i>Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/experiences">
                                    <i className="fas fa-id-badge"></i>Experiences
                                </Link>
                            </li>
                            <li>
                                <Link to="/experiences">
                                    <i className="fas fa-id-badge"></i>Skills
                                </Link>
                            </li>
                            <li>
                                <Link to="/educations">
                                    <i className="fas fa-graduation-cap"></i>Educations
                                </Link>
                            </li>
                            <li>
                                <a href='https://i.topcv.vn/phamthinhan?ref=3660224' target="blank">
                                    <i className="fas fa-download"></i> Download
                            </a>
                            </li>
                        </ul>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li>
                                <Link to='/'>
                                    <i className="fas fa-home"></i> Home
                                </Link>
                            </li>
                            <li>
                                <Link to='/experiences'>
                                    <i className="fas fa-id-badge"></i> Experiences
                                </Link>
                            </li>
                            <li>
                                <Link to="/skills">
                                    <i className="fas fa-id-badge"></i> Skills
                                </Link>
                            </li>
                            <li>
                                <Link to='/educations'>
                                    <i className="fas fa-graduation-cap"></i> Educations
                                </Link>
                            </li>
                            <li>
                                <a href='https://i.topcv.vn/phamthinhan?ref=3660224' target="blank">
                                    <i className="fas fa-download"></i> Download
                                </a>
                            </li>
                        </ul>
                    </div>
                    </div>
                </nav>
            </>
        )
    }
}
