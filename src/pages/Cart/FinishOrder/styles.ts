import { styled } from 'styled-components';

export const Box=styled.main`
     position: 'absolute';
     top:20%;
     height: 80vh;
     padding:2rem;
     margin: 2rem;
    background-color: rgba(0,0,0,.9);

    color:inherit;

    overflow-y: scroll;

    input{
        border:1px solid white;
        color:wheat
    }

    .details{
        margin:1rem 0;
    }

    label{
        color:inherit
    }

    .delivery-info{

        button{
            background-color: white;
            color:black;
            margin:1rem auto;

            &+button{
                margin-left: 1rem;
            }
        }
    }

    .values-infos{
        h3{
            margin:1rem 0;
        }

        p{
            display: flex;
            justify-content: space-between;
            margin-bottom: .5rem;
        }

        hr{
            background-color: #00000099;
        }
    }

    .payment-info{
        >div{
            display: flex;

            
        }
    }

    button:last-child{
        background-color:#c00;
        color:white;
        margin:1rem 0;
    }

    .pix-copy{
        padding:1rem;
        border-radius:1rem;
        border: none;

        :hover{
            filter:brightness(.8)
        }
    }
`

export const Items= styled.section`
    ul{
        margin: 1rem 0 ;
        li{
            display: flex;
            margin: 1rem 0;
            /* justify-content: space-between; */

            img{
                width: 4rem;
                object-fit: cover;
            }

            >div{
                margin-left: 1rem;

                p{
                    margin: 1rem 0;
                }
            }

        }
    }
`