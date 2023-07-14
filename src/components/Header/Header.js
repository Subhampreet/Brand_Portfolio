import React from 'react'
import Link from 'next/link';

function Header() {
  return (
    <div className='header'>
        <div className='container'>
            <div className='wrapper'>
                <div className='inner-header'>
                    <div className='logo'>
                        <Link href="/">SM</Link>
                    </div>
                    <div className='menu'>
                        <button>
                            Menu
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header