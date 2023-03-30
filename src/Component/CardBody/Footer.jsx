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

        </div>
    );
};

export default Footer;