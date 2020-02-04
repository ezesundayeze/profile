import React  from "react"
import { withRouter } from "react-router-dom"

const SocialHandle = (props)=>{

    const defaultStyle = {
        background:'grey'
    }
    const fbStyle = {
        visibility: 'visible', 
        animationName: 'fadeIn',
        background:'blue'
      }

      const twStyle = {
        visibility: 'visible', 
        animationName: 'fadeIn',
        background:'blue'
      }

    const {
        username,
        url,
        platform
    } = props

     const handleUrl = (url, username)=>{
        window.open(url+username, '_blank')
    }

    const getStyle=(platform)=>{
        if (platform==='facebook') {
            return fbStyle
        }
        else if (platform==='twitter') {
            return twStyle
        }
        else{
            return defaultStyle
        }
    }
    
    

    return(
        <React.Fragment>
            <button style={getStyle()} onClick={()=>handleUrl(url, username)}>Connect on {platform}</button>
        </React.Fragment>
    )
}

export default withRouter(SocialHandle)