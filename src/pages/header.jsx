import React from 'react';
import Search from './header/Search';

const Header = () => {
    return (
        <div className='Header'>
            <div className='img_Header_box' >
                <img src="/Pokemon.png" alt="pokemon" className='img_Header' />
            </div>
            <Search/>
        </div>
    );
}

export default Header;
