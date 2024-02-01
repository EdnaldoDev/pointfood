import { styled } from 'styled-components';

export const Container=styled.main`
   
    position:relative;
    margin:8rem 0;

    h2{
        margin: 2rem;
        border-bottom: 4px white solid;
        width: fit-content;
    }
    .snacks{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap:2rem;

        img{
            max-width: 90%;
        }
    }

    >div{
        margin:2rem;
        

        >div{
            margin:2rem 0;
        }
        .d-flex{
            display:flex; 
            flex-direction: row;
            justify-content: space-between;
        }


    }

    
    @media(min-width:750px){
        margin-left: 6rem;
    }
`