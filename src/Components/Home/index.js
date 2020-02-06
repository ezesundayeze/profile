import React from 'react'

import './index.css'
import BrandDisplay from '../Brands'
import SocialMedia from '../SocialMedia'
import config from '../../Utils/configuration'

 function Home (props) {

    const { brands, social, user } = config

    const style = {
        width: '100%',
        textAlign: 'center'
        }

  return (
   <React.Fragment>
    <div className="container">
        <div className="avatar-flip">
        <img alt='eze' src={user.image} height="150" width="150" />
        </div>
            <h2>{user.name}</h2>
            <h4>{user.title}</h4>
            <p>{user.slogan}</p>

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
                <a rel="noopener noreferrer" target='_blank' href={user.resume}>View on Google Doc</a>
            </div>
            <div className='email'> 
                <h3>Email</h3>
                <a href={user.email}>Send an Email</a>
            </div>
        </div>
   </React.Fragment>

  )
}

export default Home