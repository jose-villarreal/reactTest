import styled from 'styled-components';
import { RoundImage, IconCancel } from '../../styles';

export const SideBarAside = styled.aside`

    position:relative;
    border-left: 1px solid #d8d8d8;
    background-color: white;

    img${RoundImage} {
        width: 100px;
    }

`;

export const SideBarCancel= styled(IconCancel)`

    position: absolute;
    top: 10px;
    right: 10px;
    color: #d8d8d8;
    cursor: pointer;

    &:hover {

        color: #4e4e4e;
        
    }
    
`;
