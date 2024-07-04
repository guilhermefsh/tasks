import { Link } from "react-router-dom"
import { NavStyle } from "./stylesNavbar"
import { v4 as uuidv4 } from 'uuid';


const NavBar = () => {

    const routes = [
        {
            id: uuidv4(),
            Rota: 'Estudos',
            Path: 'estudos'
        },
        {
            id: uuidv4(),
            Rota: 'Trabalho',
            Path: '/'
        },
        {
            id: uuidv4(),
            Rota: 'Treino',
            Path: 'rotina'
        }
    ]


    return (
        <header>
            <NavStyle>
                <ul>
                    {routes.map(rota =>
                        <li key={rota.id}><Link to={rota.Path}>{rota.Rota}</Link></li>
                    )}
                </ul>
            </NavStyle>
        </header>
    )
}

export default NavBar