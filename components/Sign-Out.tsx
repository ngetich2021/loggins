'use client'

import { logout } from "./Logins"

export const SignOutButton = () =>{
    return  <button onClick={()=> logout()}>sign out</button>
}