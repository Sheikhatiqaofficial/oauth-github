// "use client";
// import { signOut } from "next-auth/react";

// export default function SignOutPage(){
//     return(
//         <div>

//             <h1>Sign Out</h1>
//             <button onClick={()=>signOut()}>Sign out from Github</button>

//         </div>
//     )
// }
"use client";
import { signOut } from "next-auth/react";

export default function SignOutPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
        <h1 className="text-3xl font-semibold text-center mb-6">Sign Out</h1>
        <button
          onClick={() => signOut()}
          className="w-full py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-500 transition duration-300"
        >
          Sign Out from GitHub
        </button>
      </div>
    </div>
  );
}
