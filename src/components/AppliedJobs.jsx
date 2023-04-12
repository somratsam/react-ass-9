import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppliedJobs = () => {
    const jobApplications = JSON.parse(localStorage.getItem('jobApplications')) || [];
    return (
        <div className='container '>
            <h1 className='text-center fw-bold' style={{ margin: '4rem' }}>Applied job</h1>
            <div>
                {jobApplications.map((job, index) => (
                    <div key={index}>
                        <div className="card h-100 border-0">
                            <img style={{ width: '8rem' }} src={job.company_logo} className="card-img-top pt-3 ps-3 h-100" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">{job.job_title}</h5>
                                <h6 className="card-text">{job.company_name}</h6>
                                <p className="card-text"><small className="text-muted"><span>{job.remote_or_onsite}</span> <span>{job.fulltime_or_parttime}</span></small></p>
                                <p><span>{job.location}</span><span className='ps-3'>{job.salary}</span></p>
                                <Link to={`/job-detail/${job.id}`}><Button variant='success'>View Details</Button></Link>
                            </div>
                        </div>
                    </div >
                ))}
            </div>

        </div>
    );
};


export default AppliedJobs;