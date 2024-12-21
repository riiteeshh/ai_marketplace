"use client"
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import React from 'react'

export default function ValidatePage():React.ReactElement {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Validate Your Account</CardTitle>
          <CardDescription className="text-center">
            We've sent a validation link to your email address
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-gray-600">
            Please check your email and click on the validation link to complete your registration.
          </p>
          <p className="text-center text-gray-600">
            If you don't see the email, please check your spam folder.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full" onClick={() => alert('Resend validation email')}>
            Resend Validation Email
          </Button>
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

