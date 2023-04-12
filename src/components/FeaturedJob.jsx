import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FeaturedJob = ({ jobs }) => {
  return (

    <div>
      <div className="card h-100">
        <img style={{ width: '8rem' }} src={jobs.company_logo} className="card-img-top pt-3 ps-3 h-100" alt="..." />
        <div className="card-body">
          <h5 className="card-title fw-bold">{jobs.job_title}</h5>
          <h6 className="card-text">{jobs.company_name}</h6>
          <p className="card-text"><small className="text-muted"><span>{jobs.remote_or_onsite}</span> <span>{jobs.fulltime_or_parttime}</span></small></p>
          <p><span>{jobs.location}</span><span className='ps-3'>{jobs.salary}</span></p>

          <Link to={`/job-detail/${jobs.id}`}><Button variant='success'>View Details</Button></Link>


        </div>
      </div>
    </div>
  );
};

export default FeaturedJob;