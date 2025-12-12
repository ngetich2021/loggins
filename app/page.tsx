import { auth } from "@/auth";
import { SignInButton } from "@/components/Sign-in";
import { SignOutButton } from "@/components/Sign-Out";
import Image from "next/image";




export default async function Home() {
  const session = await auth();

  if(session?.user){
  return (
    <main>
      <h2>hey{session?.user?.name}</h2>
      <h2>user email:{session?.user?.email}</h2>
      <h2>userId:{session?.user?.id}</h2>
      {session?.user?.image &&
      <Image src={session?.user?.image} alt="" width={24} height={24}/>
      }  
      <div>
        <SignOutButton/>
      </div>  
    </main>

  );
  }

  return (
    <main>
      <p>You are not signed in</p> 
      <SignInButton/>    
    </main>
  );
}
