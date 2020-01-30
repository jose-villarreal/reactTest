import styled from 'styled-components';

export const CardArticle = styled.article`

    position: relative;
    padding: 30px 15px;
    min-height: 250px;
    border: 1px solid #d8d8d8;
    border-radius: 5px;
    background-color: #fff;
    font-size: 13px;
    text-align: center;
    cursor: pointer;
    opacity: 0.9;
    box-shadow: 0px 3px 10px #00000017;

    &:hover {

        opacity: 1;

    }

    & h2 {

        margin: 10px 0;
        font-weight: bolder;
        font-size: 18px;
        text-transform: capitalize;

    }

`;

