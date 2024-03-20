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
        display: none;
        justify-content: space-around;
        align-items: center;
    }

    select{
        position: fixed;
        bottom:0px;
        height: 4rem;
        width: 100%;
        text-align: center;
        font-size: 1.5rem;
       
        border:none;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance:  searchfield;
    }
    
 

    @media screen and (min-width:750px){
        z-index: 214;
        left: 0px;
        bottom: 0;

        width: 9rem;
        height: 100vh;
        border-radius: 0;

        nav{
            display: flex;
            flex-direction: column;
            height: 100%;


            font-size: 1.5rem;

            a.active{
                border-bottom: 4px solid rgb(252 196 25);
                color:rgb(252 196 25);

            }
        }



        select{
            display: none;
        }
    }
`