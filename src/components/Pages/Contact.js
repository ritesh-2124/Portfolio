import React from 'react'
import Ritesh from '../images/insta pic.jpg'

function Contact() {
    return (
        <div className="Contact">
            <div className="contact-container">
                <div className="contactimg">
                    <img src={Ritesh} alt="Ritesh" />
                </div>
                <div className="name">Ritesh Kumar Yadav</div>
                <div className="prof">Fullstack Developer</div>
                <div className="conlinks">
                    <div className="twitter"><a target="_blank" rel="noreferrer" href="">Twitter</a></div>
                    <div className="gmail"><a target="_blank" rel="noreferrer" href="">Gmail</a></div>
                    <div className="linkedin"><a target="_blank" rel="noreferrer" href="">LinkedIn</a></div>
                    <div className="whatsapp"><a target="_blank" rel="noreferrer" href="">WhatsApp</a></div>
                </div>
            </div>
        </div>
    )
}

export default Contact
