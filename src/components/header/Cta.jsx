import React from 'react';
import CV from '../../assets/Yahia_Mohamed_Benabbou.pdf'

const Cta = () => {
    return(
        <div className="cta">
            <a href={CV} download className='btn' targer="_blank">Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            <a href="https://nearvic.com" download className='btn' targer="_blank">Visit My Blog</a>
        </div>
    ) ;
}


export default Cta;