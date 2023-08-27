import '../styles/Footer.css'

import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

export default function Footer() {

    return (
        <div className='FooterSectionContainer'>
            <div className='NavlinksContainer'>
                <ul className='NavLinks'>
                    <li><a href="#">Home</a></li>
                    <li><a href="https://github.com/JohnCunan" target={'_blank'}>Github</a></li>
                </ul>
            </div>
            <div className='ContactsContainer1'>
                <ul className='NavLinks'>
                    <li><a href="https://www.facebook.com/John.Cunan.E07/" target={'_blank'}>Facebook</a></li>
                    <li><a href="https://www.linkedin.com/in/john-cunan-b46793228/" target={'_blank'}>LinkedIn</a></li>
                </ul>
            </div>
            <div className='ContactsContainer2'>
                <ul className='NavLinks'>
                    <Tooltip 
                        title={<Typography variant="subtitle1" style={{ fontSize: '16px' }}>
                            f.nando</Typography>} placement="top" arrow>
                        <li><p>Discord</p></li>
                    </Tooltip>
                    <li><a href="https://www.reddit.com/user/Rikonama" target={'_blank'}>Reddit</a></li>
                </ul>  
            </div>
        </div>
  )
}

