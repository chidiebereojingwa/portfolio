import React from 'react'
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Web development and websites promotions</h1>
                <Typed
                className="typed-text"
                strings={["Full-Stack Web Developer", "Mobile Developer", "Photographer", "Hardware Engineer"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="#" className="btn-main-offer">CONTACT ME</a>
            </div>
        </div>
    )
}

export default Header
