import React from 'react'
import Image from 'react-bootstrap/Image';

function ComunityProfile({ ComunityProfileImg, ComunityCargo, ComunityName }) {
    return (
        <div className='profile-display-comunity'>
            <div className='profile-img'>
            <Image src={ComunityProfileImg} alt='' 
                    fluid
                    style={{
                        objectFit: 'cover',
                        margin: '0', 
                        padding: '0', 
                        display: 'block', 
                      }}/>
            </div>
            <div className='profile-display-text'>
            <h5 className='profile-display-name'>{ComunityCargo}</h5>
            <h6 className='profile-display-bank'>{ComunityName}</h6>
            </div>
        </div>
        );
    }
    
    export default ComunityProfile;