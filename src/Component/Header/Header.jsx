import React from 'react';

const Header = () => {
    return (
        <div className=''>
            <nav className='p-4 shadow flex justify-between'>
                <h1 className='text-2xl font-bold'>
                Knowledge Cafe
                </h1>
                <img className='w-10 rounded-full ' src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" alt="" />
            </nav>
        </div>
    );
};

export default Header;