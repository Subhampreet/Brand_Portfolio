import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { gsap } from 'gsap';

const cities = [
  { name: 'Mumbai', image: 'https://pbs.twimg.com/media/FBGN4HYVEAA_xYh.jpg' },
  {
    name: 'Kolakta',
    image: 'https://i.ytimg.com/vi/9mxPkKpf5CY/maxresdefault.jpg',
  },
  {
    name: 'Bangalore',
    image:
      'https://media.istockphoto.com/id/1384436794/photo/bangalore-or-bengaluru.jpg?b=1&s=170667a&w=0&k=20&c=i53BC18osO73ew416Z6JevHlu-qM3D-oRtwFbYyjL0Q=',
  },
];

function Hamburger({ state, router }) {
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let cityBackgound = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  const [route, setRoute] = useState(router.pathname);

  const menuItems = [
    {
      route: '/about',
      href: '/about',
      name: 'About Me',
      ref: line1,
      className: 'menu-item',
    },
    {
      route: '/projects',
      href: '/projects',
      name: 'Projects',
      ref: line2,
      className: 'menu-item',
    },
    {
      route: '/contact',
      href: '/contact',
      name: "Let's Meet",
      ref: line3,
      className: 'menu-item',
    },
  ];

  useEffect(() => {
    setRoute(router.pathname);
    //console.log(route)
  });

  // useEffect(() => {
  //   if(router.pathname === route && state.clicked === true) {
  //     menu.current.style.display = "none";
  //     // state.clicked = !state.clicked;
  //     //console.log(state)
  //   }
  // })

  useEffect(() => {
    if (state.clicked === false) {
      // close our Menu
      // menu.current.style.display = 'none';
      gsap.to([revealMenu.current, revealMenuBackground.current], {
        duration: 0.8,
        height: 0,
        ease: 'power3.inOut',
        stagger: {
          amount: 0.07,
        },
      });
      gsap.to(menu.current, {
        duration: 1,
        css: { display: 'none' },
      });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.inital === null)
    ) {
      // open our menu
      // menu.current.style.display = 'block';
      gsap.to(menu.current, {
        duration: 0,
        css: { display: 'block' },
      });
      gsap.to([revealMenuBackground.current, revealMenu.current], {
        duration: 0,
        opacity: 1,
        height: '100%',
      });

      staggerReveal(revealMenuBackground.current, revealMenu.current);
      fadeInUp(info.current);
      // staggerText(line1.current, line2.current, line3.current)
    }
  }, [state]);

  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 0.8,
      height: 0,
      transformOrigin: 'right top',
      skewY: 2,
      ease: 'power3.inOut',
      stagger: {
        amount: 0.1,
      },
    });
  };

  // const staggerText = (node1, node2, node3) => {
  //   gsap.from([node1, node2, node3], {
  //     duration: 0.8,
  //     y: 100,
  //     delay: 0.1,
  //     ease: "power3.inOut",
  //     stagger: {
  //       amount: 0.3
  //     }
  //   });
  // };

  const fadeInUp = (node) => {
    gsap.from(node, {
      y: 60,
      duration: 1,
      delay: 0.2,
      opacity: 0,
      ease: 'power3.input',
    });
  };

  const handleCity = (city) => {
    gsap.to(cityBackgound.current, {
      duration: 0,
      background: `url(${city}) center center`,
    });
    gsap.to(cityBackgound.current, {
      duration: 0.4,
      opacity: 1,
      ease: 'power3.inOut',
    });
    gsap.from(cityBackgound.current, {
      duration: 0.4,
      skewY: 2,
      transformOrigin: 'right top',
    });
  };

  const handleCityReturn = () => {
    gsap.to(cityBackgound.current, {
      duration: 0.5,
      opacity: 0,
    });
  };

  return (
    <div ref={menu} className="hamburger-menu">
      <div
        ref={revealMenuBackground}
        className="menu-secondary-background-color"
      ></div>
      <div ref={revealMenu} className="menu-layer">
        <div ref={cityBackgound} className="menu-city-background"></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  {/* Dynamic Menu */}
                  {menuItems
                    .filter((menuItem) => menuItem.route !== route)
                    .map((menuItem, index) => (
                      <li key={index}>
                        <Link
                          ref={menuItem.ref}
                          href={menuItem.href}
                          className={menuItem.className}
                        >
                          {menuItem.name}
                        </Link>
                      </li>
                    ))}
                  {/* <li>
                    <Link ref={line1} href="/about" className="menu-item">
                      About Me
                    </Link>
                  </li>
                  <li>
                    <Link ref={line2} href="/projects" className="menu-item">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link ref={line3} href="/contact" className="menu-item">
                      Let's Connect
                    </Link>
                  </li> */}
                </ul>
              </nav>
              <div ref={info} className="info">
                <h3>Our Promise</h3>
                <p>
                  The passage experienced a surge in popularity during the 1960s
                  when Letraset used it on their dry-transfer sheets, and again
                  during the 90s as desktop publishers bundled the text with
                  their software.
                </p>
              </div>
              <div className="locations">
                Locations:
                {cities.map((el) => (
                  <span
                    key={el.name}
                    onMouseEnter={() => handleCity(el.image)}
                    onMouseOut={handleCityReturn}
                  >
                    {el.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Hamburger);
