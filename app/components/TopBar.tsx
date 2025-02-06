import Image from 'next/image';

export default function TopBar() {
  return (
    <div className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-4 h-16 sm:h-20 flex items-center justify-between">
        <div className="flex items-center h-full py-2 sm:py-3">
          {/* KRV Logo */}
          <div className="h-full w-auto relative">
            <Image
              src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Enghouse/download%20(9).png"
              alt="KRV Auditing Logo"
              width={120}
              height={40}
              priority
              className="object-contain h-full w-auto sm:w-[140px]"
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 