import React from 'react'
import linkdin from './linkedin.png'
import insta from './instagram.png'
import fb from './facebook.png'
import './lin.css'
const Lin = (props) => {
  console.log(props.insta)
  return (
    
    <div className='personal'>
        <div className='logo' >{props.linked &&<a href={props.linked}><img src={linkdin} alt="" /></a>}</div>
        <div className='logo' >{props.insta&&<a href={props.insta}><img src={insta} alt="" /></a>}</div>
        <div className='logo' >{props.fb &&<a href={props.fb}><img src={fb} alt="" /></a>}</div>
    </div>
  )
}

export default Lin