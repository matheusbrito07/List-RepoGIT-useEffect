import RepositoryItem from "./RepositoryItem";
import "../styles/repositories.css";
import { useEffect, useState } from "react";

//https://api.github.com/orgs/rocketseat/repos

type repositoriesProps = {
    id:number,
    name:string,
    description:string,
    html_url:string
}

export function RepositoryList() {

    const [repositories, setRepositories] = useState <repositoriesProps[]> ([])

    useEffect(() => {
        fetch("https://api.github.com/orgs/rocketseat/repos")
        .then(response => response.json())
        .then(data => setRepositories(data))
    },[]);

console.log(repositories)
    return(
        <section className="repository-list">
            <h1>LISTA DE REPOSITORIOS</h1>
                <ul>
                   {repositories.map((repository) => {
                       return <RepositoryItem key={repository.id} repository={repository} />
                   })}
                </ul>
        </section>
    );
}