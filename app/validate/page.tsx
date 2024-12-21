import React from "react"
import { Metadata } from "next"
import ValidatePage from "@/validate/presentation/validate"


export const metadata: Metadata = {
    title: 'Validate Account | AI Marketplace',
    description: 'Validate your account for the AI Marketplace',
  }
  
export default function Page(): React.ReactElement {
  return <ValidatePage />
}