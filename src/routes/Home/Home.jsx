import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUserAction } from '../../actions/fetchCardsAction';
import { getUrlParams } from '../../utils/urlUtil';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const params = getUrlParams();
        dispatch(setUserAction(params));
    }, [dispatch]);

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
