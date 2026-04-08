import ErrorComponent from '@/components/NotFound';
import React from 'react';

const Error = () => {
    return (
        <div>
            <ErrorComponent/>
        </div>
    );
};

export default Error;
Error.getLayout = function(page){
    return <>{page}</>
}