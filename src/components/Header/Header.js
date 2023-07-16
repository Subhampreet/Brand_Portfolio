import React, {useState} from 'react'
import Link from 'next/link';
import Hamburger from './Hamburger';

function Header() {
  const [state, setState] = useState({
    initial:false,
    clicked: null,
    menuName: "Menu"
  }) 

  const [disabled, setDisabled] = useState()

  const handleMenu = () => {
    if(state.initial === false){
        setState({
            initial: null,
            clicked : true,
            menuName:"Close",
        });
        console.log(1)
    }
    else if (state.clicked === true){
        setState({
            clicked: !state.clicked,
            menuName :"Menu",
        });
        console.log(2)
    } else if(state.clicked === false){
        setState({
            clicked:!state.clicked,
            menuName :"Close",
        });
        console.log(3);
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
                        <Link href="/" className='brand'>SM</Link>
                    </div>
                    <div className='menu'>
                        <button disabled={disabled} onClick={handleMenu}>
                            Menu
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <Hamburger state={state} />
    </div>
  )
}

export default Header