import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <footer style={{ backgroundColor: '#58D3F7', height: '100px', paddingTop: '20px' }}>
                        <div className="row">
                            <div className="col s6">
                                <div className="">
                                    <span>
                                        <a style={{color: '#fff'}} href="mailto:m.bluth@example.com"> 
                                            <i class="fas fa-envelope"> nhanmomss1999@gmail.com</i>
                                        </a>
                                    </span>
                                </div>
                            </div>
                            
                            <div className="col s6">
                                <div className="">
                                    <strong></strong>
                                    <span>
                                        <a style={{color: '#fff'}} href="https://www.facebook.com/khongbao.gio.165/">
                                            <i class="fab fa-facebook-square"> Facebook</i>
                                        </a>
                                    </span>
                                </div>
                                <div className="">
                                    <strong></strong>
                                    <span>
                                        <a style={{color: '#fff'}} href="https://www.facebook.com/khongbao.gio.165/">
                                            <i class="fab fa-twitter-square"> Twitter</i>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* <table className="striped">
                            <tbody>
                                <tr>                                   
                                    <td>EMAIL: </td>
                                    <td>nhanmomss1999@gmail.com</td>
                                    <td>
                                        <a
                                            target="blank"
                                            href="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=CllgCKCJDtpDcPnpczfvVmVppCXvjsMKvbzZqqvmFLPJMsXwdJPQcNcMXVqgMRGhcvrCGMqtjWL"
                                            className="btn green lighten-2 "
                                        >
                                            Click to send mail
                                                                </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="striped"> */}
                            {/* <tbody>
                                <tr>                                   
                                    <td>FACEBOOK: </td>
                                    <td>Nhẫn Móm's</td>
                                    <td>
                                        <a
                                            target="blank"
                                            href="https://www.facebook.com/khongbao.gio.165/"
                                            className="btn green lighten-2 "
                                        >
                                            Click to Facebook
                                                                </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                         */}

                </footer>
            </div>
        )
    }
}
