'use client'

import { Button } from "@/componentss/ui/button"
import { Input } from "@/componentss/ui/input"
import Image from "next/image"
import Link from "next/link"
import Carousel from "@/componentss/carousel"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#EDF2FF]">
      <header className="border-b bg-white p-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/placeholder.svg"
              alt="Confluence"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-xl font-semibold text-[#0052CC]">Confluence</span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto grid min-h-[calc(100vh-4rem)] md:grid-cols-2">
        {/* Left Section */}
        <div className="flex items-center p-8">
          <div className="w-full max-w-md space-y-8 rounded-3xl bg-white p-8 shadow-lg">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-[#1A1F36]">
                Transform Your Business with{" "}
                <span className="text-blue-600">DEMO</span> Solutions
              </h1>
              <p className="text-lg text-gray-600">
                Experience the power of innovation — start your journey today.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-[#1A1F36]">
                    First Name
                  </label>
                  <Input id="firstName" className="h-12 border-gray-300" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-[#1A1F36]">
                    Last Name
                  </label>
                  <Input id="lastName" className="h-12 border-gray-300" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-[#1A1F36]">
                  Company Email
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="you@company.com"
                  className="h-12 border-gray-300"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-[#1A1F36]">
                  Company Name
                </label>
                <Input id="company" className="h-12 border-gray-300" />
              </div>

              <Button className="w-full bg-blue-600 py-6 text-lg font-semibold hover:bg-blue-700">
                Book a Meeting
              </Button>
            </form>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex items-center p-8">
          <div className="relative h-[600px] w-full">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  )
}

