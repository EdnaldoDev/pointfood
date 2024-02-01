import { styled } from 'styled-components';
export const Container=styled.aside`
    position: fixed;
    bottom: 0px;
    left:0px;
    right:0px;
   
    width: 100%;

    border-top-right-radius: 2rem;
    border-top-left-radius: 2rem;
    background-color: white;

    color:#e03131;


   

    nav{
        width: 100%;
        height: 5rem;
        display: flex;
        justify-content: space-around;
        align-items: center;


        font-size: 2.5rem;

        a.active{
            border-bottom: 4px solid rgb(252 196 25);
            color:rgb(252 196 25);

        }
    }
 

    @media(min-width:750px){
        left: 0px;
        bottom: 0;

        width: 6rem;
        height: 100vh;
        border-radius: 0;

        nav{
            flex-direction: column;
            height: 100%;
        }
    }
`