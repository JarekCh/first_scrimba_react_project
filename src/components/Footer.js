import React from 'react'

import fbIcon from "../img/Facebook_Icon.png"
import instaicon from "../img/Instagram_Icon.png"
import giticon from "../img/GitHub_Icon.png"
import tweeticon from "../img/Twitter_Icon.png"

function Footer() {
  return (
    <div className='footer'>
      <button className='footer__tweeterIc'>
        <img src={tweeticon} />
      </button>
      <button className='footer__facebookIc'>
        <img src={fbIcon} />
      </button>
      <button className='footer__instagramIc'>
        <img src={instaicon} />
      </button>
      <button className='footer__githubIc'>
        <img src={giticon} />
      </button>
    </div>
  )
}

export default Footer