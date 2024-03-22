import { styled } from 'styled-components';

export const Container= styled.main`
   position: relative;
    padding: 7rem 1rem;

    >a{
        display:flex;
        justify-content: end;
        align-items: center;
    }

    @media screen and (min-width:720px){
        margin-left: 10rem;
        .cartItems{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
        gap:2rem
    }
    }

    
`

export const FinishOrder=styled.section`
        height: 5rem;

        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color:inherit;
        margin-top: 2rem;
        border: 2px silver solid;

        h1{
            margin: 0 1rem;
        }

        >div{ 
            span{
                font-size: 2rem;
            }
        }

        button{
            padding: 1rem 1.5rem;
            color:inherit;
            background-color: white;
            border:none;
            font-weight: bolder;

            &:hover{
                filter: brightness(.1);
            }
        }

        @media screen and (max-width: 720px) {
            h1{
                margin: 0 1rem;
            }

            >div{ 
                span{
                    font-size: 1.5rem;
                }
            }
        }


`