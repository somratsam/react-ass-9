import React from 'react';

const JobCategory = ({job}) => {
    return (
        <div className="">
                        <div className="col h-100 w-75 border-0 shadow">
                            <div className="card">
                                <img style={{ width: '2rem' }} src={job.categoryLogo} className="card-img-top mx-auto pt-3" alt="..." />
                                <div className="card-body">
                                    <h4 className="card-title">{job.categoryName}</h4>
                                    <p className="card-text">{job.jobsAvailable}</p>
                                </div>
                            </div>
                        </div>

                    </div>
    );
};

export default JobCategory;