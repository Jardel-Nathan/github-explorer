import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Header, RepositoryInfo, Issues } from "./style";
import logo from "../assets/logo.svg";
import logoWhite from "../assets/logo-white.png";
import { FiChevronLeft, FiChevronRight, FiMessageCircle } from "react-icons/fi";
import { Night } from "../style/themes/night";
import { ContextTeste } from "../App";




interface IRepository {
 full_name: string;
 description: string;  
 stargazers_count: number;
 forks_count: number;
 open_issues_count: number;
 owner: {
   login: string;
   avatar_url: string;
 };
}

interface Issue {
 title: string;
 description: string;
 id: number;
 user: {
 login: string;
 };
 html_url: string;
 comments: number;
}


export const Repository = () => {

 const repositoryName = useParams()['*'] as string
 const [details, setDetails] = useState<IRepository | null>(null);
 const [issues, setIssues] = useState<Issue[]>([]);


 useEffect(() => {

  async function fetchDataGithub(){
   const [repositoryDetail, repositoryIssues] = await Promise.all([
    fetch('https://api.github.com/repos/'+repositoryName),
    fetch('https://api.github.com/repos/'+repositoryName+'/issues')
   ]);
   const details = await repositoryDetail.json();
   const issues = await repositoryIssues.json();
   return [details, issues];
  }

  fetchDataGithub().then(([details, issues]) => {
    setDetails(details);
    setIssues(issues);
  });

} , []);

const {theme} = React.useContext(ContextTeste); // pegando o contexto do App

return (
 <>
  <Header>
  <img className="logoheader" src={theme === Night?logoWhite:logo} alt="" />
   <Link to='/'><FiChevronLeft /> Voltar</Link>

  </Header>
 
  <RepositoryInfo>
   <header>
    <img src={details?.owner.avatar_url} alt={details?.full_name} />
    <div>
     <strong>{details?.full_name}</strong>
     <p>{details?.description}</p>
    </div>
   </header>
   <ul>
     <li>
     <strong>{details?.stargazers_count}</strong>
     <span>Star</span>
     </li>
     <li>
     <strong>{details?.forks_count}</strong>
     <span>Forks</span>
     </li>
     <li>
     <strong>{details?.open_issues_count}</strong>
     <span>Issues</span>
     </li>
    </ul>
  </RepositoryInfo>

<Issues>
 
 { (issues.length > 0) ? issues.map(issue => (
  <a target="_blank" href={issue.html_url} key={issue.id} rel="noreferrer">
  <div>
   <strong>{issue.title}</strong>
   <p>{issue.user.login}</p>
   <p className="comments"> <FiMessageCircle /> Comentários ({issue.comments})</p>
  </div>
  <FiChevronRight size={20} />
  </a>
 )) : <div>Nenhuma issue aberta pra este repositório</div> }

</Issues>

 </>

)


}