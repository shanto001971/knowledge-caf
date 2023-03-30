import React, { useState } from 'react';
import SingleCard from '../singleCard/SingleCard';

const CardBody = () => {
    const [newItem, setNewItem] = useState([])
    
    let oldNumber = 0;
    const cardHandelar = (Item) => {
        const cardItem = [...newItem, Item]
        setNewItem(cardItem)
    }
    {
        newItem.map(SingleItem => {
            const { time } = SingleItem;
            const newNamber = parseInt(time)
            oldNumber = oldNumber + newNamber;
           
            
        })

    }


    return (
        <div className='shadow mt-4 lg:flex justify-between p-4'>
            <div className=" w-100 lg:w-9/12 p-5">
                <SingleCard
                    poster={'https://media.istockphoto.com/id/1294521676/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=1024x1024&w=is&k=20&c=youRva8itsJNkxQ0FWjN-tr61933yRKJActkznQXcA8='}
                    profile={"https://media.licdn.com/dms/image/C5603AQFRJKFQfHBHTg/profile-displayphoto-shrink_800_800/0/1607733649420?e=2147483647&v=beta&t=PCU-TW1hgRNcexS1fUhrxGpE2B5pTIPcVPB6KBjU0tw"}
                    date={'April 2 (2 Day ago)'}
                    name={'Mr Mojnu'}
                    time={'07'}
                    CardTitle={'Once upon a time, the world of computer programming was a mysterious and exclusive place.'}
                    id={1}
                    cardHandelar={cardHandelar}
                />

                <SingleCard
                    poster={'https://media.istockphoto.com/id/1424248629/photo/digital-technology-big-data-storage-digital-software-development-cyber-security-concept.jpg?s=1024x1024&w=is&k=20&c=IGbpz2fiYpxef7iPgKV02skQ04Z9AkeiwvV9y4rECBE='}
                    profile={'https://www.aiphotoof.me/_next/image?url=%2Fart%2Fvivid.png&w=3840&q=30'}
                    date={'April 7 (2 Day ago)'}
                    name={'Jon Thomas'}
                    time={'12'}
                    CardTitle={'Today, many IT jobs require a solid grasp of the top programming languages, and yes, we mean more than one. '}
                    id={2}
                    cardHandelar={cardHandelar}
                />
                <SingleCard
                    poster={'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80'}
                    profile={'https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY='}
                    date={'November 7 (5 Day ago)'}
                    name={'Robart PRC'}
                    time={'3'}
                    CardTitle={'If your plans to advance your career or change careers completely requires you to master a programming language, you might wonder which one to learn.'}
                    id={3}
                    cardHandelar={cardHandelar}
                />
                <SingleCard
                    poster={'https://media.istockphoto.com/id/1356847803/photo/hacker-in-the-hood-on-a-blue-background.jpg?s=1024x1024&w=is&k=20&c=ijMTTw7jUo-lsrsIQ4LIczCX6dvX8DhpcsfkOy9cmCc='}
                    profile={'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg'}
                    date={'January 4 (15 Day ago)'}
                    name={'Ali Hossine'}
                    time={'16'}
                    CardTitle={'When making your decision, you should bear several considerations in mind, like the difficulty level you’re willing to tackle.'}
                    id={4}
                    cardHandelar={cardHandelar}
                />
                <SingleCard
                    poster={'https://media.istockphoto.com/id/1253918571/photo/hacker-using-laptop-with-abstract-euro-icon.jpg?s=1024x1024&w=is&k=20&c=ZcKb1ilLBz91FIISkbb-FD1BfazPh5I2bjq8ZfsJVZY='}
                    profile={'https://www.shutterstock.com/image-photo/portrait-serious-confident-businessman-entrepreneur-260nw-2022462281.jpg'}
                    date={'August 15 (29 Day ago)'}
                    name={'Ali Hossine'}
                    time={'9'}
                    CardTitle={'Generally speaking, a program is a set of instructions written in a particular language (C, C++, Java, Python) to achieve a particular task.'}
                    id={5}
                    cardHandelar={cardHandelar}
                />
                <SingleCard
                    poster={'https://media.istockphoto.com/id/1143135693/photo/hacking-and-innovation-concept.jpg?s=1024x1024&w=is&k=20&c=mbm1IiIcCIJh3_1K8Xd8KU0gf7C6ZeWJfzqeSyqctj0='}
                    profile={'https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU='}
                    date={'September 20 (17 Day ago)'}
                    name={'Charle'}
                    time={'18'}
                    CardTitle={'Whether you want to develop a mobile application, get certification for programming knowledge, or learn new skills'}
                    id={6}
                    cardHandelar={cardHandelar}
                />
                <SingleCard
                    poster={'https://media.istockphoto.com/id/1143133445/photo/malware-and-technology-concept.jpg?s=1024x1024&w=is&k=20&c=9f_LGkHuIxYZfuI0svjQb3MWpbXAHqkJ14qfYRVtdb0='}
                    profile={'https://media.istockphoto.com/id/1313193690/photo/portrait-of-smiling-attractive-young-african-american-multiracial-woman.jpg?s=612x612&w=0&k=20&c=oBE17l08yu_AYC-B7kt-HuSxHG0yAGTVMldmwOraTR0='}
                    date={'July 10 (01 Day ago)'}
                    name={'Mark Lous'}
                    time={'13'}
                    CardTitle={'A programming language is a way for programmers (developers) to communicate with computers. Programming languages consist of a set of rules that allows string values to be converted into various'}
                    id={7}
                    cardHandelar={cardHandelar}
                />
                <SingleCard
                    poster={'https://media.istockphoto.com/id/1360520324/photo/stock-market-investment-concept-with-businessman-hand-touching-digital-screen-with-forex.jpg?s=1024x1024&w=is&k=20&c=2RT0iPszaSVxb4Y4NBw7Bt5mXI_4h8ch0XQ8oFVWswc='}
                    profile={'https://img.freepik.com/premium-photo/head-shot-profile-picture-smiling-attractive-mixed-race-woman-happy-caucasian-girl-looking-camera-enjoying-communicating-with-friends-via-video-call-female-client-satisfied-with-service_704049-985.jpg'}
                    date={'Marc 20 (25 Day ago)'}
                    name={'Stefn Robart'}
                    time={'14'}
                    CardTitle={'programming languages in demand among employers in 2023. You’ll be briefed about the details of each language, its complexity, and how it is used.'}
                    id={8}
                    cardHandelar={cardHandelar}
                />
            </div>
            <div className="w-100 bg-slate-100 lg:w-96 ">
                <div className="text-center mt-6 shadow-lg p-5">
                    <h1>
                        Spent time on read : {oldNumber}
                    </h1>
                </div>
                <div className=" text-center mt-5 shadow-lg p-5 ">

                    <h1 className='font-bold'>
                        Bookmarked Blogs: {newItem.length}
                    </h1>
                </div>
                <div className=" mt-5 p-5 ">
                    
                    {
                        newItem.map(data=>{
                           return <div className=" mt-5 shadow-lg p-5 ">
                                <h1 className='font-bold'>{data.CardTitle}</h1>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default CardBody;