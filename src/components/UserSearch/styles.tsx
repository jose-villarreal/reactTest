import styled from 'styled-components';

interface IHideableDivProps {
    hide: boolean;
}

export const HideableDiv = styled.div.attrs((props:IHideableDivProps) => ({
    hide: props.hide
}))`
    ${props => props.hide && `
        display: none;
    `}
`;