import React from "react"
import { Metadata } from "next"
import LoginPage from "@/login/presentation/login"


export const metadata: Metadata = {
    title: 'Login | AI Marketplace',
    description: 'Login to access the AI Marketplace',
  }

export default function Page(): React.ReactElement {
  return <LoginPage />
}