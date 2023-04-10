import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom'

const Home = () => {
    const { jobsCategory } = useLoaderData()

    return (
        <div className="container">
            <div className=' d-flex my-5'>
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
            <div className='text-center my-5'>
                <h1>Job Category List</h1>
            
            </div>

            {/* job category */}


            <div className='container row row-cols-1 row-cols-md-4 g-4'>
                {
                    jobsCategory.map(job => <div className="">
                        <div className="col h-100 w-75 border-0 shadow">
                            <div className="card">
                                <img style={{ width: '2rem' }} src={job.categoryLogo}className="card-img-top mx-auto pt-3" alt="..." />
                                <div className="card-body">
                                    <h4 className="card-title">{job.categoryName}</h4>
                                    <p className="card-text">{job.jobsAvailable}</p>
                                </div>
                            </div>
                        </div>
                        
                       
                        
                    </div>)
                }

            </div>
           <div className='my-5 text-center'>
           <h1>Featured Jobs</h1>
           <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
           </div>
        </div>
    );
};

export default Home;