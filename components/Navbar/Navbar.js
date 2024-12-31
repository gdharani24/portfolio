import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const[menu,setMenu] = useState("home");
  const menuref =useRef();

  const openMenu = () =>{
    menuref.current.style.right = '0';
  }
  const closeMenu = () =>{
    menuref.current.style.right = '-350px';
  }
  return (
    <div className='navbar'>
              <img src={logo} alt=""/>

      <img src={menu_open} onClick={openMenu} className="nav-mob-open" alt=""/>
        <ul ref={menuref} className='nav-menu'>
 <img className="nav-mob-close" onClick={closeMenu} src={menu_close} alt=""/>
<li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p ></AnchorLink>{menu==="about"?<img src={underline} alt=""/> : <></>}</li>
<li><AnchorLink  className='anchor-link' offset={50} href='#home'><p onClick={()=>setMenu("home")}>Home</p ></AnchorLink>{menu==="home"?<img src={underline} alt=""/> : <></>}</li>
<li><AnchorLink className='anchor-link' offset={50} href='#service'><p onClick={()=>setMenu("service")}>Service</p ></AnchorLink>{menu==="service"?<img src={underline} alt=""/> : <></>}</li>
<li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Work</p ></AnchorLink>{menu==="work"?<img src={underline} alt=""/> : <></>}</li>
<li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p ></AnchorLink>{menu==="contact"?<img src={underline} alt=""/> : <></>}</li>

        </ul>
        <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        </div>
  )
}

export default Navbar