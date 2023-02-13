import { React, useState } from "react"
import './style.css';
import Companias from '../../db/companias.json'

const Home = () => {
    let [search, setSearch] = useState('');
    var companias = Companias;

    const mapCompanias = companias.map((companias) => 
        <li>
           
            <img src={"http://localhost:3000/companias/" + companias.img}  alt={companias.name} title={companias.name}/>
            <h2> {companias.name}</h2>
        </li>
    )

    return(
        <>
            <section className="HomePage">
                <div>
                    <h1>Veja os estabelecimentos mais proximos para coletar.</h1>
                    <div className="inputSearch">
                        <span class="material-symbols-outlined icon">search</span>
                        <input type='text' 
                                name="search"
                                placeholder="Digite seu usuario"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <h5>Apoiadores</h5>
                </div>
                <ul className="companias">
                   {mapCompanias}
                </ul>

            </section>
            <div className="menu-footer">
                <span class="material-symbols-outlined">person</span>
                <span class="material-symbols-outlined">home</span>
                <span class="material-symbols-outlined">shopping_cart</span>
                <span class="material-symbols-outlined">chat</span>
            </div>
        </>
    )
}

export default Home