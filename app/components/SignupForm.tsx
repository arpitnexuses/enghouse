'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
};

export default function SignupForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessage('Thank you! We will contact you soon.');
        reset(); // Reset form using react-hook-form
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    } catch {
      setMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        {/* Form Header */}
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold bg-gradient-to-r from-[#05539D] to-[#6BB8D4] bg-clip-text text-transparent">
            Start Your Journey
          </h3>
          <p className="text-[#05539D]/80 text-sm">
            Book your free consultation today
          </p>
        </div>

        {/* Name Fields */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium text-[#05539D] mb-1">
              First Name
            </label>
            <input
              {...register('firstName', { required: true })}
              type="text"
              className="w-full px-3 py-2 bg-white border border-[#6BB8D4]/30 rounded-lg 
                       focus:outline-none focus:border-[#05539D] text-[#05539D]
                       hover:border-[#05539D]/50 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#05539D] mb-1">
              Last Name
            </label>
            <input
              {...register('lastName', { required: true })}
              type="text"
              className="w-full px-3 py-2 bg-white border border-[#6BB8D4]/30 rounded-lg 
                       focus:outline-none focus:border-[#05539D] text-[#05539D]
                       hover:border-[#05539D]/50 transition-colors"
            />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-[#05539D] mb-1">
            Company Email
          </label>
          <input
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            type="email"
            placeholder="you@company.com"
            className="w-full px-3 py-2 bg-white border border-[#6BB8D4]/30 rounded-lg 
                     focus:outline-none focus:border-[#05539D] text-[#05539D]
                     hover:border-[#05539D]/50 transition-colors"
          />
        </div>

        {/* Company Name Field */}
        <div>
          <label className="block text-sm font-medium text-[#05539D] mb-1">
            Company Name
          </label>
          <input
            {...register('companyName', { required: true })}
            type="text"
            className="w-full px-3 py-2 bg-white border border-[#6BB8D4]/30 rounded-lg 
                     focus:outline-none focus:border-[#05539D] text-[#05539D]
                     hover:border-[#05539D]/50 transition-colors"
          />
        </div>

        {/* Message Display */}
        {message && (
          <div className={`p-2 rounded-lg text-sm ${
            message.includes('Thank you') 
              ? 'bg-gradient-to-r from-green-500/10 to-green-600/10 text-green-700 border border-green-500/20'
              : 'bg-gradient-to-r from-red-500/10 to-red-600/10 text-red-700 border border-red-500/20'
          }`}>
            {message}
          </div>
        )}

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-[#05539D] to-[#6BB8D4] text-white py-2.5 rounded-lg 
                   font-medium text-sm hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed
                   transition-opacity duration-200 mt-4"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Processing...
            </div>
          ) : (
            'Book a Consultation'
          )}
        </motion.button>
      </form>
    </div>
  );
} 