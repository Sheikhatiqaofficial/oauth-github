// "use client";
// import { signIn } from "next-auth/react";

// export default function SignInPage(){
//     return(
//         <div>
//             <h1>Sign In</h1>
//             <button onClick={()=>signIn('github')}>Sign In with Github</button>
//         </div>
//     )
// }
"use client";
import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
        <h1 className="text-3xl font-semibold text-center mb-6">Sign In</h1>
        <button
          onClick={() => signIn('github')}
          className="w-full py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
        >
          Sign In with GitHub
        </button>
      </div>
    </div>
  );
}
