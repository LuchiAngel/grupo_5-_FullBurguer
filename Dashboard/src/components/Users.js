import React, { Component } from 'react'
import ListaUsers from './ListaUsers'

class Users extends Component{

    constructor(){
     super()
        this.state = {user:[]}
    }

    async componentDidMount(){
        let respuesta = await fetch('/api/user')
        let users = await respuesta.json()
        console.log(users);
        this.setState({user: users.users})
    }

    render(){   
        return(
        <div className="col-lg-6 mb-4">                    
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h5 className="m-0 font-weight-bold text-gray-800">Lista de usuarios</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        {this.state.user.map((users,i)=> {
                                            return (<ListaUsers key={users+i}{...users}/>)
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
    )}
}



export default Users


