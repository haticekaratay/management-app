import React from "react";
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import {useState,useEffect} from "react"
import '../../index.css';

function Users(){
    const [users,setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/users', {
            method: "GET",
        })
            .then(resp => resp.json())
            .then((data) => {
                setUsers(data)
            })
            .catch(console.log)
        },[users])

        
    return(
        <Container>
        <Card>
    <Row>
        <div>
             USERS REGISTERED!!
             {users && users.map(user => 
                 <div style={{backgroundColor: "#abb8fc" ,borderStyle: "solid", margin:"20px"}}>
                     <h3>{user.firstName}-{user.lastName} ----> Your Supervisor is {user.supervisor.firstName} {user.supervisor.lastName} </h3>
                 </div >
                 )}
         </div>
        </Row>
    </Card>
    </Container>
    )
}
export default Users;