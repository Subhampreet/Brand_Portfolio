import React, {useEffect, useRef} from 'react';
import Link from 'next/link';

function Hamburger({state}) {

  let menu = useRef(null);

  useEffect(() => {
    if(state.clicked === false){
      // close our Menu
      menu.current.style.display = "none";
    } else if (state.clicked === true || state.clicked === true && state.inital === null){
      // open our menu
      menu.current.style.display="block";
    }
  })
  
  return (
    <div ref = {menu} className="hamburger-menu">
      <div className="menu-secondary-background-color"></div>
      <div className="menu-layer">
        <div className="menu-city-background"></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link href="/about" className='menu-item'>About Me</Link>
                  </li>
                  <li>
                    <Link href="/projects" className='menu-item'>Projects</Link>
                  </li>
                  <li>
                    <Link href="/contact" className='menu-item'>Let's Connect</Link>
                  </li>
                </ul>
              </nav>
              <div className="info">
                <h3>Our Promise</h3>
                <p>
                  The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.
                </p>
              </div>
              <div className='locations'>
                Locations:
                <span>Mumbai</span>
                <span>Bangalore</span>
                <span>Hyderabad</span>
                <span>Bhubaneswar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hamburger;
