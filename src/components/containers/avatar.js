import React, { Component } from 'react'
import Img from '../../assets/nhann.jpg'
export default class Avatar extends Component {
    render() {
        return (
            <div className="info">
                <div className="waves-effect waves-block waves-light">
                    <img className="activator" src={Img} />
                    <div className="name">PHẠM THỊ NHẪN</div>
                    <div className="position">(Tester)</div>
                </div>
            </div>
        )
    }
}