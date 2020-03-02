import React from 'react'
import axios from 'axios';
import {Button} from 'react-bootstrap';




export default class Client extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {};
      }

    getPassword(e, type) {
        e.preventDefault();
        const url = 'https://gestao-senhas-api.herokuapp.com/customer/newPassword?priority='+type;
        axios.post(url , 
            {Accept: "*/*"})
            .then(response => {
 
               this.props.updateListApp();

            }).catch(error => {
                console.log(error);
            })
          
    }


    render() {
        return (
            <div  style={{marginTop : 50}}>
                <div style={{marginBottom : 10}}>
                    <Button readOnly as="input"  type="submit"  value="Senha Preferencial" onClick={(e) => {this.getPassword(e, true)}} />
                </div>
                <div>
                    <Button readOnly as="input" type="submit" value="Senha Normal" onClick={(e) => {this.getPassword(e, false)}} />
                </div>
            </div>
        );
    }
}

