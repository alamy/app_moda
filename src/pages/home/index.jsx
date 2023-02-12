import { React, useState } from "react"
import './style.css';

const Home = () => {
    let [search, setSearch] = useState('');
    return(
        <>
            <section className="HomePage">
                <div>
                    <h1>Veja os estabelecimentos mais proximos para coletar.</h1>
                    <input type='text' 
                            name="search"
                            placeholder="Digite seu usuario"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                    />
                    <h5>Apoiadores</h5>
                </div>
                <ul>
                    <li>
                        
                    </li>
                </ul>

            </section>
        </>
    )
}

export default Home