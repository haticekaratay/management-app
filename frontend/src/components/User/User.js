import React from "react"
import {useState,useEffect} from "react"
import '../../index.css';

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

   const save = ()=>  { fetch("http://localhost:8080/api/submit",{
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
                throw Error("User can not be created! TRY AGAIN!")
            }
            resp.json()
        })
        .then(userData => { console.log(userData)   
        }).catch(data => setError(data.message))
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
        setPhone(e.target.value)
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

    return(
       <div style={{ border:"solid", display: "flex", alignItems: "center",justifyContent: "center"}} >
        <div style={{ border:"solid",fontSize:"20px"}}>
        <form onSubmit={handleSubmit} >
             NOTIFICATION FORM
            <div>
                <label>First Name: </label>
                <input placeholder="firstName" onChange={firstNameChange}/>
            <label>Last Name: </label>
            <input placeholder="lastName" onChange={lastNameChange}/>
            </div>

            How do you like to be connected?<br />
            <input type="checkbox" onChange={canSendEmail}
            value="yes"/>

            <label>Email </label>
            <input placeholder="email" onChange={emailChange}/>
           
            <input type="checkbox" onChange={canSendMessage}/>
     

            <label>Phone Number: </label>
            <input placeholder="Phone" onChange={phoneNumberChange}/>
           
            <br />
            <select onChange={supervisorSelect}>
                <option>Select</option>
                {supervisors && supervisors.map(supervisor => (
                    
                    <option value={supervisor.substring(supervisor.indexOf("#")+1)} key={supervisor.substring(supervisor.indexOf("#"),-1)}>{supervisor.substring(0,supervisor.indexOf("#"))}</option>
                ))}
            </select>
            <input type="submit" value="Create User" style={{backgroundColor: "#abb8fc" ,border: "black", fontSize:"20px"}} />

            </form>
            {error && <div style={{font:"red"}}>  {error} </div>}
        </div>
        
        <div className="form-container">
            USERS REGISTERED!!
            {users && users.map(user => 
                <div style={{backgroundColor: "#abb8fc" ,borderStyle: "solid", margin:"20px"}}>
                    <h3>{user.firstName}-{user.lastName} ----> Your Supervisor is {user.supervisor.firstName} {user.supervisor.lastName} </h3>
                </div >
                )}
        </div>
    
       </div>
    )
}

export default User;
