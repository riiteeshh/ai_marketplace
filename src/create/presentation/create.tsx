"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Create():React.ReactElement{
  const router = useRouter()
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white">
          <Card className="w-full max-w-md">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">AI Marketplace</CardTitle>
              <CardDescription className="text-center">
                All AI in One
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <h2 className="text-xl font-semibold text-center">Create New Account</h2>
              <p className="text-center text-gray-600">
                Join the AI Marketplace to access all AI tools in one place.
              </p>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button onClick={()=>{
                router.push("/register")
              }} className="w-full">Start Creating Your Account</Button>
              <div className="text-center text-sm">
                <Link href="/login" className="text-blue-500 hover:underline">
                  Already have an account? Login
                </Link>
              </div>
              <div className="text-center text-sm">
                <Link href="/" className="text-gray-500 hover:underline">
                  Back to home
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      )
}