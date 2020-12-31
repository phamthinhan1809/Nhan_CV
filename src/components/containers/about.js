import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className='row' style={{'padding-top': '10px'}}> 
                  <div className="col s12">
                     <div className="offset-s4">
                        <p>My name is Phạm Thị Nhẫn, 21 years old. I was born and growth in Quang Nam. I have lived in Danang for 4 years. I am currently a final year student of Danang Pedagogical University majoring in information technology. The part that I'm following is the front-end. I look forward to devoting all my abilities at the company.</p>
                     </div>
                  </div>
                  <div className="col s6">
                     <div className="offset-s4 col s6">
                        <strong>Full Name: </strong>
                        <span>Phạm Thị Nhẫn</span>
                     </div>
                     <div className="offset-s4 col s6">
                        <strong>Phone number: </strong>
                        <span>076.4844.563</span>
                     </div>
                  </div>
                  <div className="col s6">
                     <div className="offset-s1 col s6">
                        <strong>Date Of Birth: </strong>
                        <span>18/09/1999</span>
                     </div>
                     <div className="offset-s1 col s11">
                        <strong>Address: </strong>
                        <span>95 Hoàng Văn Thái - Liên Chiểu - Đà Nẵng</span>
                     </div>
                     
                  </div>
                  <div className="col s12">
                     <div style={{width: '50%', margin: '0 auto', "padding-top": '20px'}}>
                        <a className="waves-effect waves-light btn-small" style={{"margin-right": '20px'}} target="_bank" href='https://i.topcv.vn/phamthinhan?ref=3660224'>
                           <i className="fas fa-download"></i> Download
                        </a>
                        <a className="waves-effect waves-light btn-small" target="_bank" href='https://i.topcv.vn/phamthinhan?ref=3660224'>
                           <i className="fas fa-envelope"></i> Call me
                        </a>
                     </div>
                     
                  </div>
            </div>
        )
    }
}
