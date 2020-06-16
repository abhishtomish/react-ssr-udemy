import React from 'react';

const Home = () => {

    const handleClick = () => {
        console.log("Hello...");
        localStorage.setItem('user', 'Abhishek');
    }

    return (
        <div>
            <div>
                Hello world
            </div>
            <button onClick={handleClick} >Click Me!</button>
        </div>
    )
};

export default Home;