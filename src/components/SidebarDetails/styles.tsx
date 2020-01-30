import styled from 'styled-components';

export const DetailsWrapper = styled.header`
    padding: 30px;
    text-align: center;

    h2 {

        margin: 10px 0;
        font-weight: bolder;
        font-size: 18px;
        text-transform: capitalize;

    }

    a {

        display: block;
        margin: 0 auto;

    }

`;

export const GridFourColumns = styled.div`

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5px;
    margin: 20px 0;
    margin-bottom: 0;
    
`; 

export const NumericValue = styled.span`

    font-weight: 800;
    display: block;

`;