import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id="home" className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Dharani</span>,front end developer based in India.</h1>
        <p>I am a front end developer from chennai, India with 3 years of experience in UI developer</p>
      <div className='hero-action'>
<div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
<div className='hero-resume'>My resume</div>
      </div>
      
      
      
      
        </div>
  )
}

export default Hero