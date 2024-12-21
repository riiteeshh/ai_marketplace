import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: 'AI Marketplace - All AI in One',
  description: 'Access all AI tools in one place with AI Marketplace',
}

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white px-4">
      <h1 className="text-5xl font-bold text-center mb-4 text-blue-600">AI Marketplace</h1>
      <p className="text-2xl text-center text-gray-600 mb-8">All AI in One</p>
      <div className="w-full max-w-md space-y-4">
        <p className="text-center text-gray-700">
          Welcome to the AI Marketplace, your one-stop destination for all AI tools and services.
        </p>
        <div className="flex flex-col space-y-4">
          <Link href="/login" className="w-full">
            <Button className="w-full">Login</Button>
          </Link>
          <Link href="/register" className="w-full">
            <Button variant="outline" className="w-full text-black">Create New Account</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

