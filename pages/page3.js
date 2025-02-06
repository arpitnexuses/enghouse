import Image from 'next/image'

export default function Page3() {
  return (
    <div className="page-content">
      <div className="text-content">
        {/* Your text content */}
      </div>
      <Image
        src="/path/to/your/image.png" // Update with actual image path
        alt="Description"
        width={400} // Adjust size as needed
        height={300}
        className="page-3-image"
      />
    </div>
  )
} 