import React from 'react'
import js from '../assets/js.png'
import ts from '../assets/ts.png'
import react from '../assets/react.png'
import web from '../assets/web.png'
import Arrow from '../assets/arrow-link.svg'


const ProjectItem = (props) => {

    let imageSource = (props.lang.includes('HTML/CSS')) 
        ? web
        : (props.lang.includes('React'))
            ? react
            : (props.lang.includes('TypeScript'))
                ? ts
                : js

    return (
        <div className='projects-items'>
            <a href={props.href} target="_blank" rel="noopener noreferrer">
                <img src={imageSource} className='projects__logo' alt={imageSource} />
            </a>
            <div className='projects__info'>
                <a href={props.href} target="_blank" rel="noopener noreferrer">
                    <h4 className='projects__info-title'>
                        {props.title}
                        <img src={Arrow} alt='arrow-link' className='arrow-link' />
                    </h4>
                </a>
                <p className='color-grey'>
                    {props.info}
                </p>
                <p className='projects__info-subtitle color-grey'>
                    {props.lang}
                </p>
            </div>
        </div>
    )
}

export default ProjectItem