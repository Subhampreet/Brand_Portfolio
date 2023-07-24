import React, {useEffect, useState} from 'react'
import Link from 'next/link';
import Hamburger from './Hamburger';
import { withRouter } from 'next/router';
import logo from '../../../public/logo.jpg'

function Header({router}) {
  // State for menu button
  const [state, setState] = useState({
    initial:false,
    clicked: null,
    menuName: "Menu"
  }) 
  // State for disabled button
  const [disabled, setDisabled] = useState()

//   console.log(router.pathname)
  

  const handleMenu = () => {
    if(state.initial === false){
        setState({
            initial: null,
            clicked : true,
            menuName:"Close",
        });
        // console.log(1)
    }
    else if (state.clicked === true){
        setState({
            clicked: !state.clicked,
            menuName :"Menu",
        });
        // console.log(2)
    } else if(state.clicked === false){
        setState({
            clicked:!state.clicked,
            menuName :"Close",
        });
        // console.log(3);
        console.log(state)
    }
  }

  // Determin if our menu button should be disbaled 
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(()=>{
        setDisabled(false)
    },1200);
  };

  return (
    <div className='header'>
        <div className='container'>
            <div className='wrapper'>
                <div className='inner-header'>
                    <div className='logo'>
                        <Link href="/" className='brand'><img src='/logo.jpg' className='logo-icon' /></Link>
                    </div>
                    <div className='menu'>
                        <button disabled={disabled} onClick={handleMenu}>
                            <div className='ham-bar-1'></div>
                            <div className='ham-bar-2'></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <Hamburger state={state} />
    </div>
  )
}

export default withRouter(Header)