import React from 'react'
import './HappyClient.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSmileBeam, faTasks, faHeadset, faUsers } from '@fortawesome/free-solid-svg-icons';
import Typography from "@mui/material/Typography";
const HappyClient = () => {
    const workDetails = [
        { src: 'https://coverlads.com.au', number: 542, id: 1 },
        // { src: 'https://jmdelectricals.com.au/', number: 623, id: 2 }
    ]
    return (
        <section id="HappyClient">
            <div className="row container mx-auto" style={{ textAlign:'center', color: 'black', minWidth: '100%'}}>
                <Typography fontWeight={700} variant={'h4'}>
                    Some of our featured work
                </Typography><br/>                {
                    workDetails.map(({ src, number, icon, id }) => {
                        return (<div  style={{width: '100%', display: 'inline-block',height:'610px', marginTop: '20px', border: '0.2px solid black'}} key={id}>
                                    <iframe  title={'Coverlads'} style={{width:'100%',height:'600px'}} src={src}></iframe>
                        </div>)
                    })
                }
            </div>
        </section>
    )
}

export default HappyClient
