import React, { Component } from 'react'
import Header from '../header'

export default class Educations extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="card">
                        <div className="card-content">
                            <h4 className="title-card">EDUCATIONS</h4>
                            <table className="highlight">
                                <thead>
                                    <tr>
                                        <th>Certificate</th>
                                        <th>Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Danang University - University of Education</td>
                                        <td>2017 - Present</td>
                                        <td>
                                            <a href="https://ued.udn.vn/" target="blank" className="btn green lighten-2">
                                                View
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Sakura Japanese Language Center.</td>
                                        <td>Current</td>
                                        <td>
                                            <a href="https://nhatngusakura.com/" target="blank" className="btn green lighten-2">
                                                View
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Nguyen Van Cu High School</td>
                                        <td>2014 - 2017</td>
                                        <td>
                                            <a href="https://www.facebook.com/groups/948004035676331" target="blank" className="btn green lighten-2">
                                                View
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Que Xuan Secondary School</td>
                                        <td>2010 - 2014</td>
                                        <td>
                                            <a href="https://www.facebook.com/Tr%C6%B0%E1%BB%9Dng-THCS-qu%E1%BA%BF-xu%C3%A2n-758424794519720/" target="blank" className="btn green lighten-2">
                                                View
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
