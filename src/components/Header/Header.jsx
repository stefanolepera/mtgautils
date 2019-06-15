import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    background-color: #222;
    height: 60px;
    padding: 20px;
    color: white;
`;

const StyledTitle = styled.h1`
    font-size: 1.5em;
`;

const Header = () => {
    return (
        <StyledHeader>
            <StyledTitle>MTGArena Utils</StyledTitle>
        </StyledHeader>
    );
};

export default Header;
