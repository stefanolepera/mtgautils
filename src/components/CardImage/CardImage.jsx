import React, { Fragment, useState } from 'react';
import CardBack from '../../assets/cardBack.png';
import styled from 'styled-components';

const StyledImg = styled.img`
    width: 174px;
    height: 240px;
`;

const CardImage = ({ card }) => {
    const { name } = card;
    const imagePath = card.image_uris
        ? card.image_uris.normal
        : card.card_faces[0].image_uris.normal;

    const [isLoading, setLoadingComplete] = useState(true);

    return (
        <Fragment>
            {isLoading ? <StyledImg src={CardBack} /> : null}
            <StyledImg
                title={name}
                alt={name}
                onLoad={() => setLoadingComplete(false)}
                src={imagePath}
            />
        </Fragment>
    );
};

export default CardImage;
