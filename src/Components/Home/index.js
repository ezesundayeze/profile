import React from 'react'
import SocialHandle from '../SocialMedia'

import './index.css'

 function Home (props) {

  return (
   <React.Fragment>
      <div>
          <p>Eze Sunday, Eze</p>
      </div>
      <div>
          I am a software engineer who is highly driven, a team player with a can-do attitude, phenomenal time management skills, and strong problem-solving skills.
      </div>
      <div>
          <SocialHandle username='rexeze' platform='facebook' url='https://fb.com/'/>
      </div>
      <div>
          <SocialHandle username='ezesundayeze' platform='twitter' url='https://twitter.com/'/>
      </div>
   </React.Fragment>

  )
}

export default Home