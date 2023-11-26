import React from 'react';
import Cards from './Cards';
import CategoriasInDb from './CategoriasInDb';
import ListaProductos from './ListaProductos';



let moviesInDB = {
    titulo: 'Total de productos',
    color: 'primary',
    cantidad: 1,
    icono: "fa-hamburger",
}
let totalAwards = {
    titulo:' Total de categorias',
    color:'success',
    cantidad: 79,
    icono:'fa-list'
}
let actorsQuantity = {
    titulo:'Total de usuarios' ,
    color:'warning',
    cantidad:49,
    icono:'fa-user'
}
let cartProps = [moviesInDB, totalAwards, actorsQuantity];


function ContentRowTop({burguerInfo}){
    if (burguerInfo.count > 0 ){
    return(
        <React.Fragment>
                {/*<!-- Content Row Top -->*/}
                <div className="container-fluid">
                    <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                    </div>
               
                    {/*<!-- Content Row Movies-->*/}
                    <div className="row">
                        <Cards datos = {cartProps}/>
                       


                       
                    </div>
                    {/*<!-- End movies in Data Base -->*/}
                   
   
                    {/*<!-- Content Row Last Movie in Data Base -->*/}
                    <div className="row">
                        {/*<!-- Last Movie in DB -->*/}
                        <div className="col-lg-6 mb-4">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h5 className="m-0 font-weight-bold text-gray-800">Ultima hamburguesa cargada</h5>
                                </div>
                                <div className="card-body">
								<p>{burguerInfo.productos[burguerInfo.productos.length -1].name}</p>
                                    <div className="text-center">
                                    <img className="imagenHamburguesa" style={{width: 40 +'rem'}} src={burguerInfo.productos[burguerInfo.productos.length -1].imagen} alt="Imagen-Ultima-Hamburguesa"></img>
                                    </div>
                                    <p>{burguerInfo.productos[burguerInfo.productos.length -1].description}</p>
                                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/VerDetalle">Ver detalle</a>
                                </div>
                            </div>
                        </div>
                        {/*<!-- End content row last movie in Data Base -->*/}


                        {/*<!-- Categorias in DB -->*/}
                        <CategoriasInDb/>
                    </div>
                </div>


                   {/*<!-- Productos in DB -->*/}
                   <ListaProductos/>
                    <div/>
        

                {/*<!--End Content Row Top-->*/}


        </React.Fragment>
    )}


}
export default ContentRowTop;


