import SignupForm from "./components/SignupForm";
import AutoCarousel from "./components/AutoCarousel";
import TopBar from "./components/TopBar";
import FeatureSection from "./components/FeatureSection";
import TrustedFeaturesSection from './components/TrustedFeaturesSection';
import ConsultationSection from "./components/ConsultationSection";
import Footer from "./components/Footer";
import CompanyIntroSection from './components/CompanyIntroSection';

export default function Home() {
  return (
    <>
      <TopBar />
      <main className="min-h-screen bg-[#f5f9ff]">
        <div className="pt-16 sm:pt-20 pb-8 sm:pb-12 px-3 sm:px-4 md:px-6">
          <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-center lg:items-start justify-center">
            {/* Left Side - Form */}
            <div className="w-full lg:w-[500px] bg-white p-4 sm:p-6 md:p-8 lg:p-12 rounded-[20px] sm:rounded-[32px] shadow-lg">
              <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[38px] leading-tight mb-2 sm:mb-3">
                Revolutionize Patient Care with{" "}
                <span className="font-bold bg-gradient-to-r from-[#05539D] to-[#6BB8D4] bg-clip-text text-transparent">
                  Enghouse Video
                </span>{" "}
              </h1>
              <p className="text-[#667085] text-sm sm:text-base mb-4 sm:mb-6 lg:mb-10">
                Seamlessly connect patients and providers with secure, scalable, and intuitive video conferencing solutions tailored for healthcare.
              </p>
              <SignupForm />
            </div>

            {/* Right Side - Carousel */}
            <div className="w-full lg:flex-1 flex justify-center">
              <AutoCarousel />
            </div>
          </div>
        </div>
        <FeatureSection />
        <CompanyIntroSection />
        <TrustedFeaturesSection />
        <ConsultationSection />
      </main>
      <Footer />
    </>
  );
}
