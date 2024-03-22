import { styled } from 'styled-components';
export const Snack=styled.div`
    display: flex;
    gap:1.5rem;
    padding: .5rem 1rem;
    margin: 1rem 0 ;

    background-color: inherit;


    >div, >div:nth-child(2){
        flex: 1;
    }

    >div:nth-child(1){
        img{
            width: 100%;
            height:100%;
            object-fit: cover;

        }
    }

    >div:nth-child(2){
        strong{
            font-size: 1.5rem;
        }

        >p{
            font-size: 2rem;
            margin:.5rem 0;
        }

        .actions{
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width:100%;
            
           >div:first-child{
                flex: 1;
                display: inherit;
                justify-content: space-around;
                align-items: center;

                margin: 1rem 0;

                input{
                    max-width: 60px;
                    line-height: 2rem;
                    margin: 0 .5rem;
                    text-align: center;

                    outline: none;
                }
                button{
                    width: 2rem;
                    height: 2rem;
                    outline:none;
                    background-color: transparent;
                    font-size: 1.5rem;
                    border-radius: 50%;
                    border: 3px solid white;
                    color: white;


                    &:hover{
                        border: 3px solid #c22;
                        color: #c22;
                    }

                }
           }

           >div:last-child{
                
                margin-left:  .5rem;

                button{
                    background-color: transparent;
                    border: none;
                    font-size:1.5rem;
                    color:white;

                    &:hover{
                       
                        color: #c22;
                    }
                }
           }
        }

        >div:last-child{
            font-size: 1.5rem;
            font-weight: bold;

            margin-top: 4rem;

            span{
                font-size: 2rem;
                display: block;
            }
        }
    }

    @media screen and (max-width:720px){
       display: block;
        /* width: 80%; */
        margin: 1rem auto;
    }
`