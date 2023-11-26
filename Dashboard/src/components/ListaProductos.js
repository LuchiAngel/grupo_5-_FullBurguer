import React, { Component } from 'react'
import Productos from './Productos'




class ListaProductos extends Component{

    constructor(){
     super()
        this.state = {producto:[]}
    }

    async componentDidMount(){
        let respuesta = await fetch('/api/product')
        let productos = await respuesta.json()
        console.log(productos);
        this.setState({producto: productos.productos})
    }

    render(){
        return(
        <div className="col-lg-6 mb-4">                    
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h5 className="m-0 font-weight-bold text-gray-800">Listado de productos</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        {this.state.producto.map((productos,i)=> {
                                            return (<Productos key={productos+i}{...productos}/>)
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
    )}
}


export default ListaProductos

