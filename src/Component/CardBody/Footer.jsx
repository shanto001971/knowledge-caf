import React from 'react';

const Footer = () => {
    return (
        <div>
           <div className="">
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

           <div className="">
            <strong>
            How react usestate works :
            </strong>
            <p>
            useState is React Hook that allows you to add state to a functional component. <br /> It returns an array with two values: the current state and a function to update it. 
            </p>
           </div>

           <div className="">
            <strong>
            Purpose of useEffect other than fetching data :
            </strong>
            <p>
            So you're building a component, and need to fetch <br /> some data from an API before rendering your component. <br /> You've been told that useEffect is the way for fetching data, but all you can find is <br /> discussion about side-effects
            </p>
           </div>

        </div>
    );
};

export default Footer;