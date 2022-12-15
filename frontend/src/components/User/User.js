import React from "react"
import {useState,useEffect} from "react"
import '../../index.css';
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import AddUser from "./Users";
import Users from "./Users";


const User =  () => {
  const [supervisors,setSupervisors] = useState([]);
  const [users,setUsers] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [canEmail, setCanEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [canMessage, setCanMessage] = useState(false);
  const [phone, setPhone] = useState("");
  const [supervisorId, setSupervisorId] = useState();
  const [error,setError] = useState(null);

   const save = () =>  { 
    fetch("http://localhost:8080/api/submit",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    firstName: firstName,
                    lastName: lastName,
                    canEmail: canEmail,
                    email: email,
                    canMessage: canMessage,
                    phone: phone,
                    supervisorId: supervisorId
                }
            )
        })
        .then((resp )=> {
            if(!resp.ok){
                console.log(resp)
                throw Error("User can not be created! TRY AGAIN!")
            }
            resp.json()
        })
        .then(b => console.log(b))
        .catch(data => setError(data.message))
   }

   useEffect(() => {
    fetch('http://localhost:8080/api/supervisors', {
    })
        .then(resp => resp.json())
        .then((data) => {
            setSupervisors(data)
        })
        .catch(console.log)
    },[supervisors])

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('supervisorId', supervisorId)
         save();
         e.target.reset();
         //reset();
    }
    const reset = () => {
        setFirstName("")
        setLastName("")
        setCanEmail(false)
        setCanMessage(false)
        setError("")
        setPhone("")
        setEmail("")
    
    }

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
    
    const firstNameChange = (e) => {
        console.log(e.target.value)
        setFirstName(e.target.value)
    }

    const lastNameChange = (e) => {
        setLastName(e.target.value)
    }

    const emailChange = (e) => {
        setEmail(e.target.value)
    }

    const phoneNumberChange = (e) => {
        setPhone(parseInt(e.target.value))
    }

    const supervisorSelect = (e) => {
        console.log("supervisorSelect", e)
        console.log("supervisorID", e.target.value)
        setSupervisorId(parseInt(e.target.value))
    }

    const canSendEmail = (e) => {
        console.log("supervisorSelect", e)
        console.log("supervisorID", e.target.checked)
        setCanEmail(!e.target.checked)
    }

    const canSendMessage = (e) => {
        console.log("supervisorSelect", e)
        console.log("supervisorID", e.target.checked)
        setCanMessage(!e.target.checked)
    }

    return(<>
    <Container className="form-container">
    <Card className="notification-card">
        <Row>
            <Col>
                 <form onSubmit={handleSubmit} >
                    <div >
                    NOTIFICATION FORM
                    </div>
              
            <div>
                 <label>First Name: </label>
                 <input placeholder="firstName" onChange={firstNameChange} required/>
                <label>Last Name: </label>
                <input placeholder="lastName" onChange={lastNameChange} required/>
             </div>
            <div>
                How do you like to be connected?<br />
            </div>
            <div >
                <input type="checkbox" onChange={canSendEmail}
                value="yes"/>

                <label>Email </label>
                <input placeholder="email" type="email" onChange={emailChange}/>
            
                <input type="checkbox" onChange={canSendMessage}/>
        
                <label>Phone Number: </label>
                <input placeholder="Phone" type="tel" onChange={phoneNumberChange}/>
           
             <br />
             </div >
             <div className="form-container">
             <select onChange={supervisorSelect}>
                 <option>Select</option>
                 {supervisors && supervisors.map(supervisor => (
                    
                     <option value={supervisor.substring(supervisor.indexOf("#")+1)} key={supervisor.substring(supervisor.indexOf("#"),-1)}>{supervisor.substring(0,supervisor.indexOf("#"))}</option>
                 ))}
             </select>
            
             <input type="submit" value="Create User" style={{backgroundColor: "#abb8fc" ,border: "black", fontSize:"20px"}} />
             </div>
             </form>
             {error && <div style={{font:"red"}}>  {error} </div>}
            </Col>
        </Row>
       
    </Card>
    
    </Container>
   
    </>


    ) 
}

export default User;
