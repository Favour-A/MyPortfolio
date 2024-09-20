import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import DehazeRoundedIcon from '@mui/icons-material/DehazeRounded';
import "../styles/NavBar.css";

function NavBar() {
    const [expandNavBar, setExpandNavBar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavBar(false);
    }, [location]);

  return (
    <div className='navbar' id={expandNavBar ? "open" : "close"}>
        <div className='toggleButton'>
            <button 
            onClick={() => {
                setExpandNavBar((prev) => !prev);
            }}
            >
                <DehazeRoundedIcon />
            </button>
        </div>

        <div className='links'>
            <Link to='/'> Home </Link>
            <Link to='/projects'> Projects </Link>
            <Link to='/experience'> Experience </Link>

        </div>

    </div>
  )
}

export default NavBar