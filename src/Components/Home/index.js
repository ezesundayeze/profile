import React from 'react'

import './index.css'
import BrandDisplay from '../Brands/BrandDisplay.js'
import SocialMedia from '../SocialMedia'

 function Home (props) {
     const style = {
        width: '100%',
        textAlign: 'center'
     }
     const brands = [
         {
             name:'Snapilabs',
             imageUrl:'https://snapilabs.com/img/snapilabsBLAC2.png',
             url:'http://snapilabs.com'
         },
         {
            name:'Field Intelligence',
            imageUrl:'https://media-exp1.licdn.com/dms/image/C561BAQGOmHa6QG3qtA/company-background_10000/0?e=2159024400&v=beta&t=btyBHgyFloK8g3gwiUx9FsyMzbMYGEOb8e7dNqsE1ic',
            url:'https://field.partners'
        },
        {
            name:'Helium Health',
            imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Helium_health_logo.png/1200px-Helium_health_logo.png',
            url: 'https://heliumhealth.com'
        }
     ]
     const social = [
        {
            username:'ezesundayeze',
            url:'https://fb.com/',
            platform:'facebook'
        },
        {
            username:'twitter',
            url:'https://twitter.com/',
            platform:'twitter'
        },
        {
            username:'ezesundayeze',
            url:'https://github.com/',
            platform:'github'
        }
       
    ]

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