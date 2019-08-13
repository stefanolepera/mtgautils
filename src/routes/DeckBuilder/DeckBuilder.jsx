import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../../actions/fetchCardsAction';
import { Card, SearchHeader, Spinner } from '../../components';
import { STANDARD_LEGAL } from '../../utils/constants';

const StyledCardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const DeckBuilder = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.cards.fetchCardsStarted);
    const isError = useSelector(state => state.cards.fetchCardsError);
    const cards = useSelector(state => state.cards.cardsList);

    useEffect(() => {
        dispatch(fetchCards(STANDARD_LEGAL));
    }, [dispatch]);

    return (
        <>
            <SearchHeader />
            {isLoading && <Spinner />}
            <p>{isError}</p>
            <StyledCardsContainer>
                {cards.length > 0 &&
                    cards.map(card => (
                        <Card key={JSON.stringify(card.name)} card={card} />
                    ))}
            </StyledCardsContainer>
        </>
    );
};

export default DeckBuilder;
