import React from "react"
import { Metadata } from "next"
import Register from "@/register/presentation/register"


export const metadata: Metadata = {
  title: 'Create Account',
  description: 'Create a new account for the AI Marketplace',
}

export default function Page(): React.ReactElement {
  return <Register />
}