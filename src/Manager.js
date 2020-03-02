import React from 'react'

import { Button } from 'react-bootstrap';

import axios from 'axios';


export default class Manager extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    callNext(e) {
        e.preventDefault(e);
        console.log("callNext");
        const url = 'https://gestao-senhas-api.herokuapp.com/manager/callNext';
        axios.get(url)
            .then(() => {
                this.props.updateListApp();
            })
            .catch(error => {
                console.log(error);
            })

    }
    resetPasswords(e) {
        e.preventDefault();
        console.log("resetPasswords");
        const url = 'https://gestao-senhas-api.herokuapp.com/manager/reset';
        axios.get(url)
            .then(() => {
                this.props.updateListApp();
            })
            .catch(error => {
                console.log(error);
            })
      
    }
    render() {
        return (

            <div style={{ marginTop: 50 }}>
                <div style={{ marginBottom: 10 }}>
                    <Button readOnly as="input" type="submit" value="Chamar Próxima"  onClick={(e) => {this.callNext(e)}}></Button>
                </div> 
                <div>
                    <Button readOnly as="input" type="submit" value="Reiniciar Contagem"  onClick={(e) => {this.resetPasswords(e)}}></Button>
                </div>
            </div>
        );
    }
}
