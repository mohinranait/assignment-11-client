import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <>
             <Link to={'/'}>
                <p className="text-5xl font-extrabold bg-gradient-to-l from-blue-700 to-purple-600 bg-clip-text text-transparent  "><span className="">Study</span> </p>
            </Link>
        </>
    );
};

export default Logo;