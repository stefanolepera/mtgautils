import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div>Home</div>
            <Link to="/deckbuilder">
                <button type="button">Go to Deckbuilder</button>
            </Link>
        </>
    );
};

export default Home;
