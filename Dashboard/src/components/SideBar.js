import React, {useEffect, useState} from 'react';
import image from '../assets/images/LOGO.jpeg';
import { Link, Route,Switch } from 'react-router-dom';
import ContentWrapper from './ContentWrapper';
import CategoriasInDb from './CategoriasInDb';
import ListaProductos from './ListaProductos';


function SideBar(){


const [burguerInfo, setBurguerInfo] = useState({
            count: 0,
            countByTipo: {},
            productos: [],
})
    async function fetchApi(){
        let respuesta = await fetch("/api/product")
        let data = await respuesta.json()
        setBurguerInfo(data)
    }
    useEffect(() =>{
        fetchApi()
    },[])


    console.log(burguerInfo);


    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
            <br/>


                {/*<!-- Sidebar - Brand -->*/}
                <br/>
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </a>


                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>


                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard </span></a>
                </li>


                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>


                {/*<!-- Heading -->*/}
                <br/>
                <div className="sidebar-heading">Acciones</div>


                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Información</span>
                    </Link>
                </li>


                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to ="/CategoriasInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Categorias</span></Link>
                </li>

                    {/*<!-- Nav Item - Charts -->*/}
                    <li className="nav-item">
                    <Link className="nav-link" to ="/ListaProductos">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Listado de Productos</span></Link>
                </li>


                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            <Switch>
                <Route path="/" exact={true} ><ContentWrapper burguerInfo = {burguerInfo}></ContentWrapper></Route>
                <Route path="/CategoriasInDb" exact={true} ><CategoriasInDb/></Route>
                <Route path="/ListaProductos" exact={true} ><ListaProductos/></Route>
            </Switch>
            {/*<!-- End of Sidebar -->*/}
           
        </React.Fragment>
    )
}
export default SideBar;
