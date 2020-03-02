import React from 'react'

import { ListGroup } from 'react-bootstrap';


export default class Passwords extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            passwords: []
        };
    }

    /* componentDidMount() {
         let list = [];
         const url = 'http://localhost:8080/manager/list';
         axios.get(url)
             .then(response => {
                 console.log(response.data);
                 const data = response.data;
                 this.setState({
                     passwords: data
                 })
 
             }).catch(error => {
                 console.log(error);
             })
         console.log(this.state.passwords);
         return list;
     }*/
    renderList() {
        console.log(this.props.list);

        if (this.props.list.length) {
            const passwords = this.props.list.map((item, index) => {
                console.log(index);
                if (index === 0) {
                    return <ListGroup.Item as="li" key={index} active >{item.pass}</ListGroup.Item>
                }
                else {
                    return <ListGroup.Item as="li" key={index} >{item.pass}</ListGroup.Item>
                }
            });

            return passwords;
        } else {
            return <ListGroup.Item as="li" active >Nenhuma senha</ListGroup.Item>
        }
    }

    render() {
        return (
            <div>
                <ListGroup as="ul">

                    {this.renderList()}

                </ListGroup>
            </div>
        );
    }
}

