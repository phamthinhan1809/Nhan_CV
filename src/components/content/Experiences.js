import React, { Component } from 'react'
import Header from '../header'

export default class Experiences extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="card">
                        <div className="card-content experience">
                            <h4 className="title-card">EXPERIENCES</h4>
                            <div className="row">
                                <div className="col s12 m4">
                                    <p className=" lighten-3 white-text center-align" style={{ backgroundColor: '#58D3F7' }}>August <strong>2020</strong> - Present <strong>2020</strong></p>
                                </div>
                                <div className="col s12 m8">
                                    <blockquote className ="" >
                                        <h6 className="">
                                            <strong>TESTER</strong>
                                        </h6>
                                        <p>
                                        Internship at Lien Ket So Viet Nam company.
                                        </p>
                                    </blockquote>
                                </div>
                                <div className="col s12 m4">
                                    <p className=" lighten-3 white-text center-align" style={{ backgroundColor: '#58D3F7' }}>May <strong>2020</strong> - Present <strong>2020</strong></p>
                                </div>
                                <div className="col s12 m8">
                                <blockquote>
                                    <h6>
                                        <strong>TEST</strong>
                                    </h6>
                                        <p>
                                        Study at the Da Nang tester training center
                                        </p>
                                </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
