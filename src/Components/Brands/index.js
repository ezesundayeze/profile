import React from 'react'

const BrandDisplay = (props) =>{

    const style = {
        background: '#f0f0f0',
        height: '20px',
        width: '70px',
        borderRadius:'20px'
    }
    const layoutStyle = {
        display: 'inline-block',
        zoom: '1',
        width:'100px'
    }

    const {
        name,
        url,
        imageUrl
      } = props

    return (
        <React.Fragment>
            <div style={layoutStyle}>
                <a href={url} rel="noopener noreferrer" target='_blank'> 
                    <img style={style} alt={name} src={imageUrl} /> 
                </a>
            </div>
       </React.Fragment>
    )
}

export default BrandDisplay