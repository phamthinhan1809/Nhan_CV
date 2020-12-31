import React, { Component } from 'react'
import Footer from '../footer'
export default class Skill extends Component {
    data = [
       {skill_name: 'Qc Tester', level: '70%'},
       {skill_name: 'Html', level: '10%'},
       {skill_name: 'Css', level: '80%'},
       {skill_name: 'Js', level: '70%'},
       {skill_name: 'Sql', level: '70%'},
       {skill_name: 'Teamwork', level: '70%'},
    ];
    render() {
        return (
            <div className="list-skill">
                <div className="container">
                    <div className="row">
                        <div className="card">
                            <div className="row" style={{padding: '20px'}}>
                                <div className="col s12">
                                    <h4 className="title-card">PROFESION SKILLS</h4>
                                    {
                                        this.data.map((item,i) =>(
                                            <div className="col s6 item-skill">
                                                <strong className="progress-label">{item.skill_name}</strong>
                                                <div className="progress">
                                                    <div className="determinate" key={i} style={{width: item.level}}></div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}
