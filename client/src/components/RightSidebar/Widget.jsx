import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/comment-alt-solid.svg'
import pen from '../../assets/pen-solid.svg'
import blackLogo from '../../assets/blackLogo.svg'

const Widget = () => {
  return (
    <div className='widget'>
      <h4>The overflow blog</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
          <img src={pen} alt="pen" width='18'/>
          <p>How to build a universal computation machine with Tetris (Ep. 529)</p>
        </div>
        <div className='right-sidebar-div-2'>
          <img src={pen} alt="pen" width='18'/>
          <p>From your lips to AI's ears (Ep. 530)</p>
        </div>
      </div>

      <h4>Featured on Meta</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
          <img src={comment} alt="comment" width='18'/>
          <p>2022 Community-a-thon Recap</p>
        </div>
        <div className='right-sidebar-div-2'>
          <img src={blackLogo} alt="blackLogo" width='18'/>
          <p>Introducing a new close reason specifically for non-English questions</p>
        </div>
        <div className='right-sidebar-div-2'>
          <img src={blackLogo} alt="blackLogo" width='18'/>
          <p>We're bringing advertisements for technology courses to Stack Overflow</p>
        </div>
        <div className='right-sidebar-div-2'>
          <img src={blackLogo} alt="blackLogo" width='18'/>
          <p>Temporary policy: ChatGPT is banned</p>
        </div>
        <div className='right-sidebar-div-2'>
          <img src={blackLogo} alt="blackLogo" width='18'/>
          <p>Should we burninate the [gpl] tag?</p>
        </div>
      </div>
    </div>
  )
}

export default Widget