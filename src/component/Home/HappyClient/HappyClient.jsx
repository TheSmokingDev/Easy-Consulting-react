import React from 'react'
import './HappyClient.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSmileBeam, faTasks, faHeadset, faUsers } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import Typography from "@mui/material/Typography";
const HappyClient = () => {
    const workDetails = [
        { src: 'https://coverlads.com.au', number: 542, id: 1 },
        // { src: 'https://jmdelectricals.com.au/', number: 623, id: 2 }
    ]
    return (
        <section className="ourValue" style={{height:'800px', textAlign:'center', color: 'black'}}>
            <div className="row container mx-auto">
                <Typography fontWeight={700} variant={'h4'}>
                    Some of our featured work
                </Typography><br/>                {
                    workDetails.map(({ src, number, icon, id }) => {
                        return (<div  style={{width: '100%', display: 'inline-block',height:'400px', marginTop: '20px'}} key={id}>
                                    <iframe style={{width:'100%',height:'600px'}} src={src}></iframe>
                        </div>)
                    })
                }
            </div>
        </section>
    )
}

export default HappyClient
