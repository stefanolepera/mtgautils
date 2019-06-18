import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { fetchCards } from '../../actions/fetchCardsAction';
import { STANDARD_LEGAL } from '../../utils/constants';

const StyledInput = styled.input`
    border: none;
    padding: 0 10px;
    margin: 0 auto;
    font-size: 1.2em;
    width: 600px;
    height: 40px;
    color: #000;
    background: #ccc;
    border-radius: 4px;
    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px maroon;
    }
`;

const SearchBar = () => {
    const dispatch = useDispatch();
    const [cardName, setCardName] = useState('');

    useEffect(() => {
        cardName.length === 0 && dispatch(fetchCards(STANDARD_LEGAL));

        cardName.length >= 2 &&
            dispatch(fetchCards(`${cardName}${STANDARD_LEGAL}`));
    }, [dispatch, cardName]);

    return (
        <StyledInput
            type="text"
            name="cardName"
            placeholder="Search Card"
            onChange={e => setCardName(e.target.value)}
            value={cardName}
            autoFocus
        />
    );
};

export default SearchBar;
