import React from 'react';

const SingleCard = (props) => {
    const {date,name,time,poster,profile}=props
    return (
        <div>
            <div className="card w-100 bg-base-100 shadow-xl">
                <figure><img src={poster} alt="" /></figure>
                <div className="card-body">
                    <div className="flex justify-between ">
                        <div className="flex">
                            <img className='w-10 rounded-full' src={profile} alt="" />
                            <div className="ml-5 ">
                                <h3 className='font-bold'>
                                    {name}
                                </h3>
                                <p>
                                    {date}
                                </p>
                            </div>
                        </div>
                        <div className="text-center flex gap-2">
                            <p>
                             {time}
                            </p>
                            <p>
                            min read
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SingleCard;