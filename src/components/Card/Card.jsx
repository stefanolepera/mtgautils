import React from 'react';
import styled from 'styled-components';
import CardImage from '../CardImage/';

const StyledCard = styled.div`
    padding: 2px 2px;
    width: 174px;
    height: 240px;
`;

const Card = ({ card }) => {
    return (
        <StyledCard>
            <CardImage card={card} />
        </StyledCard>
    );
};

export default Card;
