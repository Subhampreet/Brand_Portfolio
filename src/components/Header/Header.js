import React from 'react'
import Link from 'next/link';
import Hamburger from './Hamburger';

function Header() {
  return (
    <div className='header'>
        <div className='container'>
            <div className='wrapper'>
                <div className='inner-header'>
                    <div className='logo'>
                        <Link href="/" className='brand'>SM</Link>
                    </div>
                    <div className='menu'>
                        <button>
                            Menu
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <Hamburger />
    </div>
  )
}

export default Header