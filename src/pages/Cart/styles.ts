import { styled } from 'styled-components';

export const Container= styled.main`
   position: relative;
    margin: 8rem 1rem;

    

    @media screen and (min-width:720px){
        margin-left: 7rem;
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
        background-color:#f24242;
        margin-top: 2rem;


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
            color:#f24242;
            background-color: white;
            border:none;
            font-weight: bold;
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