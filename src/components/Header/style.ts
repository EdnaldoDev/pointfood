import  styled  from 'styled-components';


export const HeaderT = styled.header`
    height: 5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    color:white;    
    padding: .5rem;

    background-color: ${props=> props.theme.colors.red};

    position:fixed;
    top:0px;
    left:0;
    right:1rem;

    z-index: 214;

    >div{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        img{
            width: 3rem;
        }

        h4{
            
            text-transform: uppercase;
        }
    }

    a{
        position: relative;

        .bedge{
            background-color: white;
            width:1.2rem;
            height:1.2rem;
            position: absolute;
            top:-10px;
            color:#e03131;
            text-align: center;

            border-radius: 50%;

            transition: all .3s ease-in-out;
           
        }


        &:hover{
            .bedge{
                right:.20rem;
                transition: all .3s ease-in-out;
               
            }        
        }
    }

    @media(min-width:750px){
        margin-left: 9rem;
    }
`