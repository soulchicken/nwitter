import { authService } from "fbase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth";
import { useState } from "react";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");
    const onChange = (event) => {
        const {target:{name, value}} = event;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
        console.log(event.target.name);
    };
    const onSubmit = async(event) => {
        event.preventDefault();
        try{
            let data;
            if (newAccount) {
                // create account
                data = await createUserWithEmailAndPassword(authService, email, password);
    
            } else {
                // log in
                data = await signInWithEmailAndPassword(authService, email, password);
            }
            console.log(data);
        } catch(error) {
            console.log(error.message);
        }
    }
    const toggleAccount = () => setNewAccount((prev) => !prev);
    return (
        <div>
                <form onSubmit={onSubmit}>
                    <input  name="email" type="text" placeholder="Email" required value={email} onChange={onChange}/>
                    <input name="password" type="password" placeholder="Password" required value={password} onChange={onChange}/>
                    <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
                {error}
                </form>
                <span onClick={toggleAccount}>{newAccount ? "Sign in" : "Create Account"}</span>
                <div>
                    <button>Continue with Google</button>
                    <button>Continue with GitHub</button>
                </div>
        </div>);
}
export default Auth;