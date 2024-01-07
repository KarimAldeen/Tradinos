import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

const OurProjects = () => {
    const projectsArray = [
        {
            image: '../Home/OurProjects/1.png',
            bgImage: "../Home/OurProjects/B1.svg",
            color : "#3f9ce9",

            logo: '../Home/OurProjects/L1.svg',
            title: 'Case Study - Carlo',
            description1:
                "With a vision to revolutionize the way we transact, Carlo was born. A payment app that rewards users for supporting their local economy, Carlo offers an effortless and seamless payment experience through its cashback system and QR codes.",
            description2:
                "As a mobile application developed by Tradinos, Carlo's success has paved the way for us to continue pushing the boundaries of software development. Dreaming of a world where transactions are seamless and rewarding, Carlo is changing the game.",
        },
        {
            image: '../Home/OurProjects/2.png',
            logo: '../Home/OurProjects/L2.png',
            color : "#f07c00",
            title: '2Case Study - Carlo',
            description1:
                "With a vision to revolutionize the way we transact, Carlo was born. A payment app that rewards users for supporting their local economy, Carlo offers an effortless and seamless payment experience through its cashback system and QR codes.",
            description2:
                "As a mobile application developed by Tradinos, Carlo's success has paved the way for us to continue pushing the boundaries of software development. Dreaming of a world where transactions are seamless and rewarding, Carlo is changing the game.",
        },
        {
            image: '../Home/OurProjects/4.png',
            logo: '../Home/OurProjects/L4.png',
            bgImage: "../Home/OurProjects/B4.png",
            color : "#e21e26",
            title: '3Case Study - Carlo',
            description1:
                "With a vision to revolutionize the way we transact, Carlo was born. A payment app that rewards users for supporting their local economy, Carlo offers an effortless and seamless payment experience through its cashback system and QR codes.",
            description2:
                "As a mobile application developed by Tradinos, Carlo's success has paved the way for us to continue pushing the boundaries of software development. Dreaming of a world where transactions are seamless and rewarding, Carlo is changing the game.",
        },
    ];

    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [animateOut, setAnimateOut] = useState(false);


    const handleNextProject = () => {
        setAnimateOut(true);
        setTimeout(() => {
            setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projectsArray.length);
            setAnimateOut(false);
        }, 1500);
    };


    const handlePrevProject = () => {
        setAnimateOut(true);
        setTimeout(() => {
            setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projectsArray.length) % projectsArray.length);
            setAnimateOut(false);
        }, 1500);
    };




    const currentProject = projectsArray[currentProjectIndex];

    return (
        <div className='OurProjects'>
            <h1>OUR PROJECTS</h1>
            <div className={`in_OurProjects ${animateOut ? 'animate-out' : ''}`}>
                <span>

                    <img src={currentProject.image} className='Image' alt={`${currentProject.image}`} />
                    {currentProject.bgImage ?
                     <img src={currentProject.bgImage} className='BgImage' alt={`${currentProject.bgImage}`} />
                    : "" }
                   
                </span>
                <div className='ProjectDetails'>
                    <img src={currentProject.logo} alt={`Logo ${currentProjectIndex + 1}`} />
                    <span className='BG' style={{background:currentProject.color }}
                     />

                    <div className='ProjectContent'>
                        <div className='Swiper_Controller'>
                            <div onClick={handlePrevProject}>
                                <FaChevronLeft />
                            </div>
                            <div onClick={handleNextProject}>
                                <FaChevronRight />
                            </div>
                        </div>
                        <h2>{currentProject.title}</h2>
                        <p>{currentProject.description1}</p>
                        <p>{currentProject.description2}</p>
                        <button>View Case Study</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProjects;
