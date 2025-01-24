import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Profile() {
  const { isAuthenticated, getUser } = getKindeServerSession();

 
  if (!isAuthenticated()) {
    redirect("/api/auth/login"); 
  }

  
  const user = await getUser();


  if (user?.given_name === "User" || !user?.email) {
    redirect("/api/auth/login"); 
  }


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300">
      <div className="bg-white shadow-md rounded-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to your Profile!</h1>
        <p className="text-lg text-gray-600 mt-2">
          Hello, <span className="text-teal-600 font-semibold">{user?.given_name || "User"}</span>! 🎉
        </p>
      </div>
    </div>
  );
}
