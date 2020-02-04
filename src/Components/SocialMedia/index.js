import React  from "react"
import { withRouter } from "react-router-dom"

const SocialHandle = (props)=>{

    const defaultStyle = {
        background:'grey'
    }
    const fbStyle = {

      }

      const twStyle = {

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
        console.log(platform)
        if (platform==='facebook') {
            return fbStyle
        }
        if (platform==='twitter') {
            return twStyle
        }
        else{
            return defaultStyle
        }
    }
    
    

    return(
        <React.Fragment>
            <button style={getStyle(platform)} onClick={()=>handleUrl(url, username)}>Connect on {platform}</button>
        </React.Fragment>
    )
}

export default withRouter(SocialHandle)