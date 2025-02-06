'use client'

import { Tabs, TabsList, TabsTrigger } from "@/componentss/ui/tabs"
import { Check } from 'lucide-react'
import Carousel from '@/componentss/carousel'

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Main Heading */}
        <div className="mb-8 md:mb-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight text-[#172B4D] lg:text-5xl px-2">
            Discover all the ways teams can use
            <br className="hidden md:block" />
            Confluence
            <br className="hidden md:block" />
            for Project Management
          </h1>
        </div>

        {/* Tabs */}
        <div className="mb-8 md:mb-16">
          <Tabs defaultValue="marketing">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 gap-2 md:flex md:justify-center overflow-x-auto">
              <TabsTrigger 
                value="marketing"
                className="rounded-full bg-gray-100 px-4 md:px-6 py-2 text-sm md:text-base data-[state=active]:bg-blue-600 data-[state=active]:text-white whitespace-nowrap"
              >
                Marketing
              </TabsTrigger>
              <TabsTrigger 
                value="product"
                className="rounded-full bg-gray-100 px-4 md:px-6 py-2 text-sm md:text-base data-[state=active]:bg-blue-600 data-[state=active]:text-white whitespace-nowrap"
              >
                Product Managers
              </TabsTrigger>
              <TabsTrigger 
                value="program"
                className="rounded-full bg-gray-100 px-4 md:px-6 py-2 text-sm md:text-base data-[state=active]:bg-blue-600 data-[state=active]:text-white whitespace-nowrap"
              >
                Program & Project Managers
              </TabsTrigger>
              <TabsTrigger 
                value="software"
                className="rounded-full bg-gray-100 px-4 md:px-6 py-2 text-sm md:text-base data-[state=active]:bg-blue-600 data-[state=active]:text-white whitespace-nowrap"
              >
                Software Development
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Content Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left Column - Text Content */}
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#172B4D]">
              Brainstorming, collaboration, and knowledge – all in one place
            </h2>
            <div className="space-y-4 md:space-y-6">
              <div className="flex gap-3 md:gap-4">
                <Check className="mt-1 h-4 w-4 md:h-5 md:w-5 flex-shrink-0 text-blue-600" />
                <p className="text-base md:text-lg text-gray-700">
                  Make planning collaborative and fun: Work together seamlessly on campaign launches with real-time editing, add flowcharts, and get approvals with inline comments.
                </p>
              </div>
              <div className="flex gap-3 md:gap-4">
                <Check className="mt-1 h-4 w-4 md:h-5 md:w-5 flex-shrink-0 text-blue-600" />
                <p className="text-base md:text-lg text-gray-700">
                  Take creative ideas further: Start with Confluence whiteboards for creative brainstorming and create Jira tickets or Confluence project plans from one place.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Carousel */}
          <div className="relative h-[400px] md:h-[500px]">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  )
}

