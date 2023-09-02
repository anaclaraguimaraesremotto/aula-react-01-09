import './Home.css'

export default function Home(props){
    
    return(
        <main className="home">
            <h1>Home</h1>
            <p>Valor State: {props.num}</p>
            <button onClick={props.adicionar}>Adicionar</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt impedit provident, pariatur tempora obcaecati distinctio dignissimos suscipit quidem optio necessitatibus.</p>
            <button>Clique Aqui</button>
        </main>
    )
}