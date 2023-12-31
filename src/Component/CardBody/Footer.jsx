import React from 'react';

const Footer = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 mt-5'>
           <div className="p-5 shadow">
           <strong>
           Difference between props and useState
           </strong>
           <p>
            <strong>
                Props : 
                </strong>
            With props we can recive data and it can read data onely
           </p>
           <p>
            <strong>
            useState : 
            </strong>
            with usestate we can store data and use is later
           </p>
           </div>

           <div className="p-5 shadow">
            <strong>
            How react usestate works :
            </strong>
            <p>
            useState is React Hook that allows you to add state to a functional component. <br /> It returns an array with two values: the current state and a function to update it. 
            </p>
           </div>

           <div className="p-5 shadow">
            <strong>
            Purpose of useEffect other than fetching data :
            </strong>
            <p>
            So you're building a component, and need to fetch <br /> some data from an API before rendering your component. <br /> You've been told that useEffect is the way for fetching data, but all you can find is <br /> discussion about side-effects
            </p>
           </div>

           <div className="p-5 shadow">
            <strong>
            How Does React work?
            </strong>
            <p>
            what is React js in simple words? Simply put, <br /> React JS is a JavaScript-based UI development library <br /> run by Facebook and an open-source developer community. <br /> Its impact lies in the way it helps build web applications. 
            </p>
           </div>

        </div>
    );
};

export default Footer;