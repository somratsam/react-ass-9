import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { FaceFrownIcon } from '@heroicons/react/24/solid'
const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <div>
             <section className='container text-center'>
      <div className=''>
        <FaceFrownIcon className=' text-warning' style={{ width: '32rem' }} />
        <div className=''>
          <h2 className=''>
            <span className=''>Error</span>
            {status || 404}
          </h2>
          <h2 className='fw-bold text-danger'>
            {error?.message}
          </h2>
          <Link to='/' className=' text-decoration-none'>
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
        </div>
    );
};

export default ErrorPage;