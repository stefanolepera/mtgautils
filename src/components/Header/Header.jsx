import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledHeader = styled.header`
    background-color: #222;
    height: 60px;
    padding: 20px;
    color: white;
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: white;
`;

const StyledTitle = styled.h1`
    font-size: 1.5em;
`;

const Header = () => (
    <StyledHeader>
        <StyledTitle>
            <StyledNavLink to="/">MTGArena Utils</StyledNavLink>
        </StyledTitle>
    </StyledHeader>
);

export default Header;
