import React  from "react"
import { withRouter } from "react-router-dom"
import './index.css'
import { formating } from '../../Utils/formating'

const SocialHandle = (props)=>{

    const {
        username,
        url,
        platform
    } = props

    const { sentenceCase } = formating

     const handleUrl = (url, username)=>{
        window.open(url+username, '_blank')
    }

    return(
        <React.Fragment>
            <button className='button' onClick={()=>handleUrl(url, username)}>{sentenceCase(platform)}</button>
        </React.Fragment>
    )
}

export default withRouter(SocialHandle)