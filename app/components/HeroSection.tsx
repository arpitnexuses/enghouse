import Image from 'next/image'
import SignupForm from './SignupForm'

export const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-12 gap-8">
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Your Compelling Headline Here
        </h1>
        <SignupForm />
      </div>
      
      <div className="w-full md:w-1/2">
        <Image
          src="/your-image-path.jpg" // Replace with your actual image path
          alt="Hero image"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  )
} 