import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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

const SearchBar = ({ handleOnChange }) => {
    const [cardName, setCardName] = useState('');

    useEffect(() => {
        handleOnChange(cardName);
    }, [handleOnChange, cardName]);

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
