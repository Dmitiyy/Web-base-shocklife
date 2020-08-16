import React from 'react';
import './join.css';
import './media.css';
import emailjs from 'emailjs-com';
import {connect} from 'react-redux';
import {nameChange, emailChange, phoneChange, clear} from '../../actions/actions';
import InputMask from 'react-input-mask';

class Join extends React.Component {
    sendEmail = (e) => {
        e.preventDefault();

        const {name, email, phone} = this.props;
        const {clear} = this.props;

        let templateParams = {
            from_name: email,
            to_name: 'Dima',    
            phone: phone,
            name: name,
        }

        if (name === '' || email === '' || phone === '') {
            alert('Change the inputs');
        } else {
            emailjs.send('mail_d', 'template_yo8QW3pV', templateParams, 'user_FdSSkP6FkMjpjLsajouWD')
            .then((result) => {
                console.log(result.text);
                alert('Thank you, we will contact you soon');
            })
            .catch((error) => {
                console.log(error.text)
                alert('Error...');
            })

            console.log(e.target);

            clear();
        }
    }

    render(){
        const {name, email, phone} = this.props;
        const {nameChange, emailChange, phoneChange} = this.props;

        return (
            <div className="join" id="join">
                <div data-aos="fade-right" className="wrap_title jn">
                    <h2>HOW CAN I JOIN?</h2>
                    <div className="stick"/>
                </div>
                <div data-aos="zoom-in" className="wrap_content">
                    <div className="block_border1"/>
                    <div className="inner_join">
                        <p
                        className="block_text">
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco
                            laboris nisi ut  ex ea
                            commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt
                            mollit anim id est laborum.
                        </p>
                        <form id="form" className="form" onSubmit={this.sendEmail.bind(this)}>
                            <div className="wrap_inps">
                                <input className="inp_name inp" 
                                value={name} 
                                onChange={(e) => nameChange(e)} 
                                placeholder="Enter your name" name="name"/>  

                                <input className="inp_email inp" 
                                value={email} 
                                onChange={(e) => emailChange(e)} 
                                placeholder="Enter your email" name="email"/>

                                <InputMask mask="+38(099)-999-99-99" maskChar="_" className="inp_phone inp" 
                                value={phone}  
                                onChange={(e) => phoneChange(e)} 
                                placeholder="Enter your phone number" name="phone"/>
                                
                                <button type="submit" className="btn_send">Send request</button>
                            </div>
                        </form>
                    </div>
                    
                    <div className="block_border2"/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.name,
        email: state.email,
        phone: state.phone
    }
}

const mapDispatchToProps = {
    nameChange,
    emailChange,
    phoneChange,
    clear
}

export default connect(mapStateToProps, mapDispatchToProps)(Join);