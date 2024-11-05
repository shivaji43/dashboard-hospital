import React ,{ useState} from "react";

export default function Login(){
   const [email , setEmail]=useState("")
   const [password , setPassword]=useState("")

   return(
    <div>
    <form action="">
        <h3>Login</h3>
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