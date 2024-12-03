import { SessionWrapper } from "@/components/SessionWrapper";
import SignInPage from "@/components/login/LoginComponent";
import SignOutPage from "@/components/login/SignOutComponent";
import { auth } from "./lib/auth";

export default async function Home() {
  const session = await auth()
  const isAuthenticated = !!session?.user

  return(
<div className="min-h-screen bg-gray-100">
  <SessionWrapper>
    {isAuthenticated ? <SignOutPage/> :<SignInPage/> }
{/* <SignInPage/>
<SignOutPage/> */}
  </SessionWrapper>
</div>

  )
}