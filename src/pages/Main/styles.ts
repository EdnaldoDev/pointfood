import { styled } from 'styled-components';

export const Container=styled.main`
   
    position:relative;
    margin:8rem 0;

    h2{
        margin: 2rem;
        border-bottom: 4px white solid;
        width: fit-content;
    }
    .snacks, .cartItems{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap:1rem;
    }

    .cartItems{
        grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
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