import styled from "styled-components";



export const Title = styled.h1` // TEMPLATE LITERALS
 font-size: 48px;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;


export const Form = styled.form`


margin-top: 40px;
max-width: 700px;
display: flex;

input{
  background:  ${props => props.theme.input.background};
 flex: 1;
 height: 70px;
 padding: 0px 24px;
 border: 0px;
 border-radius:5px 0px 0px 5px;
 color: #3a3a3a;
 font-weight: 600;
 font-size: 20px;
 &::placeholder{
  font-weight: 500;
  color: #3a3a3a;
 }


}

button{
 width:210px;
  height: 70px;
  background: #189f54;
  border: 0;
 color: #fff;
 font-weight: 800;
 transition: background-color 0.2s;
 &:hover{
  background-color: #3f51b5;
 }
}


`;


export const Repositories = styled.div`

margin-top: 20px;
max-width: 700px;
a{
  background: ${props => props.theme.itens.background};
  border-radius: 5px;
  padding: 24px;
  display: block;
  text-decoration: none; 
  display: flex;
  align-items: center;
  transition: transform 0.3s,  box-shadow 0.3s;


  & + a{
   margin-top: 20px;
  }

 img{
  width: 64px;
  height: 64px;
  border-radius: 50%;
 }

 div{
  margin-left: 16px;

  strong{
   font-size: 20px;
   color: ${props => props.theme.itens.text};   
  }

  p{
   font-size: 18px;
   color: #a8a8b3;
   margin-top: 4px;
  }

 }


 svg{
  margin-left: auto;
  color: ${props => props.theme.itens.text};
 }

 &:hover{
  transform: translateX(10px);
  box-shadow: -7px 8px 15px -4px #888888;
 }

}

`

export const Header = styled.header`

  display: flex;
  justify-content: space-between;


  img{
    width: 200px;
    object-fit: contain;
  }
  svg{
    font-size: 20px;
    cursor: pointer;
    transition: transform 0.2s;
    &:hover{
      color: #000000;
      transform: rotate(45deg);
    }
  }

;


`

;