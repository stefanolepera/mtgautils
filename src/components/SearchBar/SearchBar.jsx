import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { fetchCards } from '../../actions/fetchCardsAction';
import { STANDARD_LEGAL } from '../../utils/constants';

const StyledInput = styled.input`
    border: none;
    padding: px 5px;
    margin: 0 auto;
    font-size: 1em;
    width: 400px;
    height: 30px;
    color: #000;
    background: #ccc;
    border-radius: 4px;
    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px maroon;
    }
`;

const SearchBar = ({ type }) => {
    const dispatch = useDispatch();
    const isTypeCard = type === 'card';
    const [searchName, setSearchName] = useState('');
    const queryPrefix = isTypeCard ? '' : 'type%3A';

    useEffect(() => {
        searchName.length === 0 && dispatch(fetchCards(STANDARD_LEGAL));

        searchName.length >= 2 &&
            dispatch(fetchCards(`${queryPrefix}${searchName}${STANDARD_LEGAL}`));
    }, [dispatch, searchName, queryPrefix]);

    return (
        <StyledInput
            type="text"
            name="searchName"
            placeholder={isTypeCard ? 'Search Card' : 'Search Type'}
            onChange={e => setSearchName(e.target.value)}
            value={searchName}
            autoFocus={isTypeCard}
        />
    );
};

export default SearchBar;
