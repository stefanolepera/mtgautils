import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../../actions/fetchCardsAction';
import { Card, SearchBar, Spinner } from '../../components';
import { STANDARD_LEGAL } from '../../utils/constants';

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

    const readFrom = () => navigator.clipboard.readText().then(clipText =>
        console.log('clipboard ', clipText));

    const copyTo = (newClip) => navigator.clipboard.writeText(newClip).then(() => {
        console.log('write successful');
      }, () => {
        console.log('Write failed');
      });

    const stuffToCopy = 'copiamo due cazzate!';

    useEffect(() => {
        dispatch(fetchCards(STANDARD_LEGAL));
    }, [dispatch]);

    return (
        <>
            <SearchBar type='card' />
            <SearchBar type='type' />
            <button onClick={() => copyTo(stuffToCopy)}>copy to clipboard</button>
            <button onClick={() => readFrom()}>read from clipboard</button>
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

export default DeckBuilderScreen;
