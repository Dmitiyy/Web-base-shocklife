import React from 'react';
import './footer.css';
import logo from './logo.png';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="wrap_footer">
                    <img src={logo} alt="" className="logo_footer"/>
                    <h2 className="title_footer">WEB-BASE SHOCKLIFE 2020</h2>
                </div>
            </footer>
        )
    }
}