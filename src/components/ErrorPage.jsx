import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { FaceFrownIcon } from '@heroicons/react/24/solid'
import { Button } from 'react-bootstrap';
const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <div>
            <section className='container text-center'>
                <div className=''>
                    <FaceFrownIcon className=' text-warning w-25' />
                    <div className=''>
                        <h2 className='text-warning' style={{ fontSize: '4rem' }}>
                            <span>Error</span>
                            {status || 404}
                        </h2>
                        <h2 className='fw-bold text-danger'>
                            {error?.message}
                        </h2>
                        <Button variant='success mt-3'> <Link to='/' className=' text-white text-decoration-none'>
                            Back to homepage
                        </Link></Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;