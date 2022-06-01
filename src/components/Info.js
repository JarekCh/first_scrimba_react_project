import React from 'react'
import anastasiaPhoto from "../img/anastasia-shuraeva.jpg"
import linkedin from "../img/linkedin.png"
import mail from "../img/Mail.png"

function Info() {
  return (
    <div className='info__container'>      
      <img src={anastasiaPhoto} alt=""
      className='info__picture'/>
      <h2 className='info__fullName'>Anastasia Shura</h2>
      <p className='info__jobPossition'>Frontend Developer</p>
      <p className='info__website'>anashura.website</p>
      <div className='info__btnContainer'>
        <button className='info__mailBtn'>
          <img src={mail} />
          <span>Email</span>
        </button>
        <button className='info__linkedinBtn'>
          <img src={linkedin} />
          <span>LinkedIn</span>
        </button>        
      </div>

    </div>

  )
}

export default Info