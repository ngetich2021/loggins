'use client'

import { login } from "./Logins"

export const SignInButton = () =>{
    return  <button onClick={()=> login()}>sign in with Google</button>
}