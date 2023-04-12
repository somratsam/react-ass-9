import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom'
import FeaturedJob from './FeaturedJob';
import JobCategory from './JobCategory';

const Home = () => {
    const [featuredJob, setFeaturedJob] = useState([])
    console.log(featuredJob);

    useEffect(() => {
        fetch('/featuredJob.json')
            .then(res => res.json())
            .then(data => setFeaturedJob(data))
    }, [])

    const { jobsCategory } = useLoaderData()

    return (
        <div className="container">
            <div className=' d-flex my-5'>
                <div className='justify-content-center d-flex flex-column w-100'>
                    <h1>One Step <br /> Closer To Your <br /> Dream Job</h1>

                    <p>
                        It's a simple fact that technology is <br /> always advancing. If you compare <br /> the technology of the year 2000 to <br /> that of today you can see how much <br /> has changed. </p>
                    <Button className='w-50 bg-success'>Get Started</Button>
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
                    jobsCategory.map(job => (
                        <JobCategory
                            key={job.id}
                            job={job}></JobCategory>
                    ))
                }

            </div>
            <div className='my-5 text-center'>
                <h1>Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='container row row-cols-1 row-cols-md-2 g-4'>
                {
                    featuredJob.map(jobs => (
                        <FeaturedJob
                            key={jobs.id}
                            jobs={jobs}></FeaturedJob>
                    ))

                }



            </div>

        </div>
    );
};

export default Home;