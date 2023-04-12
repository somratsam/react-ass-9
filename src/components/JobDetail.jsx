
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const JobDetail = () => {
    const [job, setJob] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch('/public/featuredJob.json')
            .then(res => res.json())
            .then(data => {
                const job = data.find(job => job.id === id);
                setJob(job);
            });
    }, [id]);

    const handleApplyNowClick = () => {
        const existingJobApplications = JSON.parse(localStorage.getItem('jobApplications')) || [];
        existingJobApplications.push(job);
        localStorage.setItem('jobApplications', JSON.stringify(existingJobApplications));
    };

    return (
        <div className="container" style={{ marginBottom: '10rem' }}>
            <div>
                <h1 className="text-center fw-bold" style={{ margin: '5rem' }}>Job Detail</h1>
            </div>
            <div className="job-details d-flex justify-content-between">
                <div className="job-description">
                    <p><span className="fw-bold">Job Description: </span><small>{job.job_description}</small></p>
                    <p><span className="fw-bold">Job Responsibility: </span><small>{job.job_responsibility}</small></p>
                    <p><span className="fw-bold">Educational Requirements: </span><small>{job.educational_requirements}</small></p>
                    <p><span className="fw-bold">Experiences: </span><small>{job.experiences}</small></p>
                </div>
                <div className="job-info">
                    <div className="card w-75">
                        <div className="card-body bg-success bg-opacity-10">
                            <h5 className="card-title fw-bold"><small>Job Detail</small></h5>
                            <p><span className="fw-bold">Salary: </span><small>{job.salary} (per month)</small></p>
                            <p><span className="fw-bold">Job Title: </span><small>{job.job_title}</small></p>
                            <h5 className="card-title fw-bold"><small>Contact Information</small></h5>
                            <hr />
                            <p><span className="fw-bold">Phone: </span><small>{job.phone}</small></p>
                            <p><span className="fw-bold">Email: </span><small>{job.email}</small></p>
                            <p><span className="fw-bold">Address: </span><small>{job.Address}</small></p>
                        </div>
                    </div>
                    <Button variant="success mt-3 w-75" onClick={handleApplyNowClick}>Apply Now</Button>
                </div>
            </div>
        </div>
    );
};

export default JobDetail;
