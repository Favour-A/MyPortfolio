import React from 'react'
import "./styles/Footer.css";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <FacebookOutlinedIcon />
            <LinkedInIcon />
            <EmailIcon />
        </div>
        <p> &copy; 2023 FavourAltraide.co.uk</p>

    </div>
  )
}

export default Footer