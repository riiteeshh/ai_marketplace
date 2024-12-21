import React from "react"
import { Metadata } from "next"
import Create from "@/create/presentation/create"


export const metadata: Metadata = {
  title: 'Create Account | AI Market Place',
  description: 'Create a new account for the AI Marketplace',
}

export default function Page(): React.ReactElement {
  return <Create />
}