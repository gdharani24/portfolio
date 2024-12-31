import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
const About = () => {
  return (
    <div id="about" className='about'>
      <div className='about_title'>
<h1>About me</h1>
<img src={theme_pattern } alt="" />
      </div>
      <div className='about_sections'>
<div className='about_left'>
<img src={profile_img} alt=""/>
</div>
<div className='about_right'>
<div className='about_para'>
<p>I am an experienced FrontEnd Developer with 3 Years.</p>
<p>My passion for FrontEnd Developer is not only</p>

</div>
<div className='about_skills'>
  <div className='about_skill'><p>HTML & CSS</p><hr style={{width:"70%"}}/></div>
  <div className='about_skill'><p>React</p><hr style={{width:"50%"}}/></div>
  <div className='about_skill'><p>Javascript</p><hr style={{width:"60%"}}/></div>
  <div className='about_skill'><p>Boostrap</p><hr style={{width:"50%"}}/></div>
</div>
</div>
      </div>
      <div className='about_achievements'>
<div className='about_achievement'>
<h1>8+</h1>
<p>YEARS OF EXPERIENCE</p>
</div>
<hr />
<div className='about_achievement'>
<h1>10+</h1>
<p>PROJECT COMPLETED</p>
</div>
<hr/>
<div className='about_achievement'>
<h1>5+</h1>
<p>HAPPY CLIENT</p>
</div>
<hr/>
      </div>
      </div>
  )
}

export default About