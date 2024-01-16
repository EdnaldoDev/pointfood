import styled from 'styled-components'

export const Container= styled.div`
    h3{
        margin:1rem;
    }

    img{
        min-width:100% ;
        height:250px;
        object-fit: cover;
    }

    p{
        margin:1rem 0;
    }

    >div{
        display: flex;
        justify-content: space-between;

        p{
            font-size: 2rem;
        }
        button{
            width: 50px;
            height: 50px;
            border: none;
            color:white;
            background-color:rgba(238, 204,204, 0.5);

            &:hover{
                background-color: rgba(238, 204,204, 0.8);
            }
        }
    }
`