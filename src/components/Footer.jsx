import React from 'react'
import Arrow from '../assets/arrow-link.svg'

const initialLinks = [
    {title: 'GitHub', href: 'https://github.com/amgod1', name: '@amgod',},
    {title: 'LinkedIn', href: 'https://www.linkedin.com/in/amgod/', name: '@amgod',},
    {title: 'Mail', href: 'mailto:kamillschepuk@gmail.com', name: 'kamillschepuk@gmail.com',},
    {title: 'Instagram', href: 'https://www.instagram.com/amgod_1/', name: '@amgod_1',},
]

const LinkItem = (props) => {
    return (
        <div className='footer__links-item'>
            <h4 className='footer__title color-grey'>
                {props.title}
            </h4>
            <a href={props.href} className='footer__link' target="_blank" rel="noopener noreferrer">
                {props.name}
                <img src={Arrow} alt='arrow-link' className='arrow-link' />
            </a>
        </div>
    )
}

const allLinks = initialLinks.map(el => <LinkItem title={el.title} href={el.href} name={el.name} key={el.title} />)

const Footer = () => {
    return (
        <footer className='footer-wrapper default-width margin-top'>
            <h2 className='footer__title'>
                Links
            </h2>
            { allLinks }
        </footer>
    )
}

export default Footer