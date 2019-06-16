import React, { useEffect, useCallback, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../../actions/fetchCardsAction';
import styled from 'styled-components';
import Card from '../../components/Card';
import SearchBar from '../../components/SearchBar';
import Spinner from '../../components/Spinner';

const StyledCardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const DeckBuilderScreen = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.cards.fetchCardsStarted);
    const isError = useSelector(state => state.cards.fetchCardsError);
    const cards = useSelector(state => state.cards.cardsList);

    useEffect(() => {
        dispatch(fetchCards('legal%3Astandard&order=color'));
    }, [dispatch]);

    const handleOnChange = useCallback(
        cardName => {
            cardName.length >= 2 &&
                dispatch(
                    fetchCards(`${cardName}+legal%3Astandard&order=color`)
                );
        },
        [dispatch]
    );

    return (
        <Fragment>
            <SearchBar handleOnChange={handleOnChange} />
            {isLoading && <Spinner />}
            <p>{isError}</p>
            <StyledCardsContainer>
                {cards.length > 0 &&
                    cards.map(card => (
                        <Card key={JSON.stringify(card.name)} card={card} />
                    ))}
            </StyledCardsContainer>
        </Fragment>
    );
};

export default DeckBuilderScreen;
