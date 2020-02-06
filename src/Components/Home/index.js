import React from 'react'

import './index.css'
import BrandDisplay from '../Brands'
import SocialMedia from '../SocialMedia'
import config from '../../Utils/configuration'

 function Home (props) {

    const { brands, social } = config
    
     const style = {
        width: '100%',
        textAlign: 'center'
     }

  return (
   <React.Fragment>
    <div className="container">
        <div className="avatar-flip">
        <img alt='eze' src="https://pbs.twimg.com/profile_images/1195821518267330561/-JH3S3aT_400x400.jpg" height="150" width="150" />
        </div>
            <h2>Eze Sunday Eze</h2>
            <h4>Software Developer</h4>
            <p>I write code, write about other stuff and ...</p>

            <div style={style} className='brands'>
                <h3>Worked For</h3>
                {brands && brands.map((brand)=>{
                    return (
                        <BrandDisplay key={brand.name} name={brand.name} imageUrl={brand.imageUrl} url={brand.url} />)
                })}
            </div>

            <div className='socialMedia'>
                <h3>Social Media</h3>
                {social && social.map((media)=>{
                    return (
                        <SocialMedia key={media.platform} username={media.username} url={media.url} platform={media.platform} ></SocialMedia>)
                    })}
            </div>

            <div className='resume'> 
                <h3>Resume</h3>
                <a rel="noopener noreferrer" target='_blank' href='https://bit.ly/2S1wPik'>View on Google Doc</a>
            </div>
            <div className='email'> 
                <h3>Email</h3>
                <a href="mailto:hi@ezesunday.com">Send an Email</a>
            </div>
        </div>
   </React.Fragment>

  )
}

export default Home