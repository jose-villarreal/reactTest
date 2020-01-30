import styled from 'styled-components';
import { RoundImage } from '../../styles';

export const List = styled.ul`

    max-height: 253px;
    min-width: 300px;
    border: 1px solid #d8d8d8;
    border-radius: 5px;
    position: absolute;
    top: 57px;
    box-shadow: 0px 3px 10px #00000017;
    background: white;
    overflow-y: auto;
    z-index: 1;

    & a {

        padding: 10px;
        display: block;

    }

    & li {

        border-bottom: 1px solid #d8d8d8;
        font-size: 13px;
        list-style: none;
        cursor: pointer;

        &:hover {
            background-color: #d8d8d8;
        }

        &:after {
            clear: both;
        }

    }

`;

export const ListImage = styled(RoundImage)`

    width: 25px;
    margin-top: -5px;
    margin-right: 10px;
    border-width: 1px;
    float: left;

`;