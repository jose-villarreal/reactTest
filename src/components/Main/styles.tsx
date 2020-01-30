import styled from 'styled-components';
import { CardArticle } from '../Card/styles';


interface IMainProps {
    twoColumns?: boolean;
}

export const GridColumns = styled.main.attrs((props: IMainProps) => ({
    twoColumns: props.twoColumns || false
}))`
    ${props => props.twoColumns && `
        display: grid;
        grid-template-columns: 2fr 1fr;
        max-height: 100%;
        overflow: hidden;
        div${GridList} {
            grid-template-columns: repeat(3, 1fr);
        }

        article${CardArticle} {
            min-height: 300px;
        }
    `}
`;

export const GridList = styled.div`

    display: grid;
    max-height: 100%;
    grid-gap: 20px;
    grid-template-columns: repeat(5, 1fr);
    padding: 20px 30px 50px 30px;
    overflow-y: scroll;

    @media (min-width: 0px) {
        
        grid-template-columns: repeat(1, 1fr);
        
    }
    
    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        
    }
    
    @media (min-width: 992px) {

        grid-template-columns: repeat(5, 1fr);
        
    }
    

`;