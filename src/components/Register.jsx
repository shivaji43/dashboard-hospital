import { createUserWithEmailAndPassword } from "firebase/auth";
import React , {useState} from "react";
import auth from "../config/firebase";
export default function Register(){
   const [email , setEmail] =useState("")
   const [password , setPassword] =useState("")
   const [fname , setfname] =useState("")
   const [lname , setlname] =useState("")
   const doRegister = async (e) => {
    e.preventDefault()
    try {
        await createUserWithEmailAndPassword(auth,email,password);
        const user = auth.currentUser; 
        console.log(user)
        console.log("User Registered successfully")
    } catch (error) {
        console.log(error.message)
    }
   }
   return(
    <div>
    <form onSubmit={doRegister}>
        <h3>Register</h3>
        <div>
            <label>First Name</label>
            <input 
            type="text"
            placeholder="First Name"
            value={fname}
            onChange={(e) => setfname(e.target.value)}
            />
        </div>
        <div>
            <label>Last Name</label>
            <input 
            type="Last Name"
            placeholder="Last Name"
            value={lname}
            onChange={(e) => setlname(e.target.value)}
            />
        </div>
        <div>
            <label>Email address</label>
            <input 
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>

        <div>
            <label>Password</label>
            <input 
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>

        <div>
            <button type="submit">
                Submit
            </button>
        </div>
    </form>
    </div>
   )

}