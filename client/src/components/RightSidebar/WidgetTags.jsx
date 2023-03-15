import React from 'react'
// import './RightSidebar.css'
// import blackLogo from '../../assets/blackLogo.svg'


const WidgetTags = () => {

  const tags = ['c', 'css', 'express', 'filebase', 'html', 'java', 'javascript', 'mern', 'mongodb', 'mysql', 'next.js', 'node.js', 'php', 'python', 'reactjs']

  return (
    <div className='widget-tags'>
      <h4>Watched tags</h4>
      <div className='widget-tags-div'>
        {
          tags.map((tag) => (
            <p key={tag}>{tag}</p>
          ))
        }
      </div>

      {/* <div>
        <h3>Collectives</h3>
        <div className='right-sidebar-div-1'>
          <div className='right-sidebar-div-3'>
            <img src={blackLogo} alt="blackLogo" width='18'/>
            <p>Google Cloud provides organizations with leading infrastructure, platform capabilities and industry solutions to help them solve their most critical business problems.</p>
          </div>
          <div className='right-sidebar-div-3'>
            <img src={blackLogo} alt="blackLogo" width='18'/>
            <p>Twilio has democratized channels like voice, text, chat, video, and email by virtualizing the world's communications infrastructure through APIs that are simple enough for any developer, yet robust enough to power the world's most demanding applications.</p>
          </div>
          <div className='right-sidebar-div-3'>
            <img src={blackLogo} alt="blackLogo" width='18'/>
            <p>Amazon Web Services (AWS) is the world's most comprehensive and broadly adopted cloud platform, offering over 200 fully featured services from data centers globally. The AWS Collective is a community-driven site with resources for developers.</p>
          </div>
        </div>
      </div> */}

    </div>
  )
}

export default WidgetTags