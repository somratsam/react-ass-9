import React from 'react';
import { Button } from 'react-bootstrap';

const Home = () => {
    return (
        <div className='container d-flex my-5'>
            <div className='justify-content-center d-flex flex-column w-100'>
                <h1>One Step <br /> Closer To Your <br /> Dream Job</h1>

                <p>
                    It's a simple fact that technology is <br /> always advancing. If you compare <br /> the technology of the year 2000 to <br /> that of today you can see how much <br /> has changed. </p>
                <Button className='w-50'>Get Started</Button>
            </div>
            <div className='w-100'>
                <img style={{ width: '35rem' }} src="/src/assets/P3OLGJ1 copy 1.png" alt="" />
            </div>
        </div>
    );
};

export default Home;