import React from 'react';
import './nav.css';
import logo from './logo.png';

export default class Nav extends React.Component {
    render() {
        return (
            <div className="nav">
                <div className="wrapp_inner_nav">
                    <img className="img_logo" alt="" src={logo}/>
                    <h3>+38(xxx)-xxx-xx-xx</h3>
                </div>
            </div>
        )
    }
}