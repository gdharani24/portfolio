import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'

import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import { Alert } from 'bootstrap'


const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "a9efffe5-362e-4ca4-b77f-954f50a6e2b9");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
         alert(res.message);
        }
      };
  return (
    <div id="contact"className='contact'>
        <div className='contact-title'>
<h1>
    Get in touch
</h1>
<img src={theme_pattern} alt="" />
        </div>
        <div className='contact-section'>
<div className='contact-left'>
    <h1>Let's talk</h1>
    <p>I'm currently available to 
        take on new project,so if you any work you can conatct anytime</p>

<div className='contact-details'>
<div className='conatct-detail'>
<img src={mail_icon}  alt="" /><p>dharani24@gmail.com</p>
</div>
<div className='conatct-detail'>
<img src={call_icon}  alt="" /><p>9629126836</p>

</div>
<div className='conatct-detail'>
<img src={location_icon}  alt="" /><p>31E,Kamarajar Street,Meenambakkam</p>

</div>
</div>
</div>
<form onSubmit={onSubmit} action="" className='contact-right'>
<label htmlFor="">Your Name</label>
<input type="text" placeholder='Enter the name' name='name'/>
<label htmlFor="">Your Email</label>
<input type="email" placeholder='Enter the gmail' name='gmail'/>
<label htmlFor="">write your Message here</label>
<textarea name="message" row="8" placeholder='Enter the Message'>
    </textarea>
    <button className='contact-submit'>
submit Now
    </button>
    </form>
        </div>
        </div>
  )
}

export default Contact