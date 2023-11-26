import React, { Component } from 'react'
import Genre from './Genre'

class GenresInDb extends Component{

    constructor(){
     super()
        this.state = {generos:[]}
    }

    async componentDidMount(){
        let respuesta = await fetch('/api/product')
        let countByTipo = await respuesta.json()
        console.log(countByTipo);
        this.setState({generos: countByTipo.countByTipo})
    }

    render(){
        return(
        <div className="col-lg-6 mb-4">                    
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h5 className="m-0 font-weight-bold text-gray-800">Tipo de producto</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        {this.state.generos.map((genero,i)=> {
                                            return (<Genre key={genero+i}{...genero}/>)
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
    )}
}



export default GenresInDb


