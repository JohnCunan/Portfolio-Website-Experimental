import '../styles/Connect.css'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import LoadingIcon from '../material_ui_components/loading_icon';

export default function Connect() {

    const form = useRef();

    const [showLoading, setShowLoading] = useState(false);
    const [showSuccessSend, setShowSuccessSend] = useState(false);

    const handleModal = () => {
        setShowSuccessSend(false);
    };

    const sendEmail = (e) => {
      e.preventDefault();
      setShowLoading(true)
  
      emailjs.sendForm('service_gjjvni8', 'template_2xal5ua', form.current, 'HGl6qsDZH-bh_lr82')
        .then((result) => {
            console.log(result.text);
            setShowLoading(false);
            setShowSuccessSend(true);
        }, (error) => {
            console.log(error.text);
            alert("Error in sending your message");
        });
    };

    return(
        <div className='ConnectSectionContainer'>
            <h2>Connect with me</h2>
            <div className='MessageContainer'>
                <h3>Feel free to send me a message</h3>
                <form ref={form} onSubmit={sendEmail} className='EmailForm'>
                    <label>Name</label>
                    <input type="text" name="from_name" placeholder='Enter your name (optional)'/>
                    <label>Message</label>
                    <textarea name="message" placeholder="Enter your message here..." />
                    <input type="submit" value="SEND"/>
                    {showLoading && 
                        <div className='LoadingContainer'>
                            <p>Sending Your Message...</p>
                            <LoadingIcon className='LoadingIcon'/>
                        </div>
                    }
                </form>
            </div>
            {showSuccessSend && 
                <div className='MessageModalBackground'>
                    <div className='MessageModalContainer'>
                    <h4>Your Message Was Successfully sent!</h4>
                    <button onClick={handleModal}>OK</button>
                </div>
                </div>
            }
        </div>
    )
}