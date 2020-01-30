import styled from 'styled-components';

export const MainGrid = styled.div`

    display: grid;
    height: 100vh;
    grid-template-columns: 60px 1fr;
    grid-template-rows: 80px 1fr;

`;

export const MainNav = styled.nav`
    grid-column-start: 1;
    grid-row: 1 / -1;
    background: lightpink;
`;

export const MainHeader = styled.header`

    background-color: #fff;
    border-bottom: 1px solid #d8d8d8;
    padding: 22px 30px;
    position: relative;
    
`; 

export const RoundImage = styled.img`
    width: 45%;
    border-radius: 50%;
    border: 3px solid #d8d8d8;
`;


export const Tag = styled.p`

    display: inline-block;
    padding: 5px 10px;
    border-radius: 3px;
    background-color: #dcdcdc;
    
`;



export const Icon = styled.span`
    &:before {
        
        font-family: "fontello";
        font-style: normal;
        font-weight: normal;
        display: inline-block;
        text-decoration: inherit;
        width: 1em;
        margin-right: .2em;
        text-align: center;
        font-variant: normal;
        text-transform: none;
        line-height: 1em;
        margin-left: .2em;

    }
    
`; 
    
export const IconCancel = styled(Icon)`
    
    &:before { content: '\\e801'; }
`;

export const IconStar = styled(Icon)`

    &:before { content: '\\e802' }

`;

export const IconFork = styled(Icon)`
    &:before { content: '\\f126' }
`;