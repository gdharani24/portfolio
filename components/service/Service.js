import React from 'react'
import './Service.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'


 const Service = () => {
  return (
    <div id="service" className='Service'>
        <div className='service_title'>
            <h1>My Service</h1>
<img src={theme_pattern} alt="" />
        </div>
        <div className='Services-container'>
{
    Services_Data.map((Service,index)=>{
return <div key={index}className='service-format'>
  <h3>{Service.s_no}</h3>
  <h2>{Service.s_name}</h2>
  <p>{Service.s_desc}</p>
  <div className='services-readmore'>
<p>Read More</p>
<img  src={arrow_icon} alt=""/>
  </div>
  </div>
    })}
        </div>
        </div>
  ) 
}

export default Service