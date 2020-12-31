import React, { Component } from 'react'
import Footer from '../footer'
import Header from '../header'
import Avatar from '../containers/avatar'
import About from '../containers/about'
import Career from '../containers/career'
import Skill from '../containers/skills'
import Experience from '../containers/Language'
export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <Header />
                <div className="container">
                    <div className="xxxx" style={{"padding-top": '10px'}}>
                        <div className="row" >
                            <div className="col s3">
                                <Avatar />
                            </div>
                            <div className="col s9" >
                                <About />
                                <Career />
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}
