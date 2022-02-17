import styled from "styled-components";

export const Header = styled.div`

 display: flex;
 align-items: center;
 justify-content: space-between; // deixa um de cada lado

 img{
    width: 200px;
    object-fit: contain;
  }
 a{
  display: flex;
  align-items: center;
  text-decoration: none; 
  color: #a8a8b3;
  transition: color 0.2s; 
  &:hover{
   color: #666;
  }
  svg{
   margin-right: 5px;

  }
 }

`;

export const RepositoryInfo = styled.div`
  
  margin-top: 80px;

  header{
   display: flex;
   align-items: center;
   img{
    width: 120px;
    height: 120px;
    border-radius: 50%; 
   }
  
   div{
    margin-left: 24px;
   }

   strong{
    font-size: 36px;
    color: ${props => props.theme.colors.text};
   }

   p{
    font-size: 18px;
     color: ${props => props.theme.colors.text};
     margin-top: 45px;
   }

  }

ul{
  display: flex;
  list-style: none;
  margin-top: 40px;
  margin-bottom: 100px;
  li{
   & + li{
    margin-left: 80px;

   }
   strong{
    display: block;
    font-size: 36px;
    color: ${props => props.theme.colors.text};
   }
   span{
    display: block;
    margin-top: 4px;
    color: #99999e;
   }
  }
 }

 `;


export const Issues = styled.div`

margin-top: 20px;
a{
  background: ${props => props.theme.itens.background};
  border-radius: 5px;
  padding: 24px;
  display: block;
  text-decoration: none; 
  display: flex;
  align-items: center;
  transition: transform 0.2s;
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
   font-size: 16px;
   color: #a8a8b3;
   margin-top: 4px;
  }

 }


 svg{
  margin-left: auto;
  color: #3d3d4d;
 }

 &:hover{
  transform: translateX(10px);
  box-shadow: -7px 8px 15px -4px #888888;
 }

 .comments{
  font-size: 12px;
 }

 svg{
  color: #a8a8b3;
 }

}



`
 
 ;

