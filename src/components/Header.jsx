import React from 'react'
import MyImage from '../assets/me.jpg'

const Header = () => {
    return (
        <header className='header-wrapper default-width'>
            <img src={MyImage} className='header__img' alt='me' />
            <div className='header__info'>
                <h1 className='header__info-title'>
                    Schepuk Kamill
                </h1>
                <p className='header__info-subtitle color-grey'>
                    Frontend (React) Web Developer
                </p>
                <a href='https://www.linkedin.com/in/amgod/' className='link'>
                    <p className='header__info-website color-grey'>
                        LinkedIn Profile
                    </p>
                </a>
            </div>
        </header>
    )
}

export default Header