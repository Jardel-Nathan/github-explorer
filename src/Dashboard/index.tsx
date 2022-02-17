import React, { FormEvent, useEffect } from "react";
import { Form, Title, Repositories, Header } from "./style";
import logo from "../assets/logo.svg";
import logoWhite from "../assets/logo-white.png";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import BasicMenu from "./menu";
import { Night } from "../style/themes/night";
import { ContextTeste } from "../App";



interface Repository {
  full_name: string;
  description: string;  
  owner: {
    login: string;
    avatar_url: string;
  };
}


export const Dashboard = () => {
const [input, setInput] = React.useState("");
const [repositories, setRepositories] = React.useState<Repository[]>([]);
const [errorAlert, setErrorAlert] = React.useState('');


useEffect(() => {
  const repositoriesStorage = localStorage.getItem('@githubExplorer:repositories');
  if(repositoriesStorage){
    setRepositories(JSON.parse(repositoriesStorage));
  }
} , [])


// 
function handleAddRepository(event: FormEvent<HTMLFormElement>): void {
  event.preventDefault();


  fetch('https://api.github.com/repos/'+input)
  .then(function (resp){
    resp.json().then(function(data){
   
    
            
      if(resp.status === 200){
        //verifica se o repositorio ja existe
        const repositoryExists = repositories.find(repository => repository.full_name === data.full_name);

        if(repositoryExists){
          throw new Error('Repository already exists');
        }

        setRepositories([...repositories, data]);
        localStorage.setItem('@githubExplorer:repositories', JSON.stringify([...repositories, data]));
        setErrorAlert('');
      }else{
        throw new Error('Repository not found');
      }

    }).catch(function(error) {
      setErrorAlert(error.message);
    });

  }).catch(function(error) {
    setErrorAlert(error.me);
  });


}


const {theme} = React.useContext(ContextTeste); // pegando o contexto do App

return (
<> 
<Header>
<img src={theme === Night?logoWhite:logo} alt="" />
<BasicMenu></BasicMenu>
</Header>
<Title>Explore Repositórios Github</Title>
<Form onSubmit={handleAddRepository}>
 <input type="text" placeholder="Digite o nome do repositorio" onChange={(e)=>{setInput(e.target.value)}}/>
 <button type="submit">Pesquisar</button>
</Form>
 <span className="errorAlert">{errorAlert}</span>

 {repositories.map((repository)=>{
   return (
   <Repositories key={repository.full_name} >
      <Link to={"/repository/"+repository.full_name}  >
        <img src={repository.owner.avatar_url} alt="" />
        <div>
        <strong>{repository.full_name}</strong>
        <p>{repository.description}</p>
        </div>
      <FiChevronRight size={20} />
      </Link>
  </Repositories>
   )

 })}


</>
)


}