import React from 'react';

const SingleCard = (props) => {

    

    const { date, name, time, poster, profile, CardTitle,cardHandelar } = props
    return (
        <div className='mt-5'>
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
                    <div className="">
                        <h1 className='mt-4 font-bold text-lg' >
                            {CardTitle}
                        </h1>

                        <p className='p-4 '>
                            #beginners  #programming
                        </p>
                        <a href="" className='mt-5 underline decoration-solid decoration-blue-500 text-blue-500'>
                            Mark as read
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;