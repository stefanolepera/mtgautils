import React from 'react';
import styled from 'styled-components';
import { CardImage } from '../../components';

const StyledCard = styled.div`
    padding: 2px 2px;
    width: 174px;
    height: 240px;
`;

const Card = ({ card }) => (
    <StyledCard>
        <CardImage card={card} />
    </StyledCard>
);

export default Card;
