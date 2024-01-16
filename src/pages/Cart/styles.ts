import { styled } from 'styled-components';
export const FinishOrder=styled.section`
        width: calc(100%-4rem);
        height: 5rem;
        margin: 0 2rem;

        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color:#f24242;
        
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

`