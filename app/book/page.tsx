'use client'

import { useState } from 'react'

export default function BookingPage() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] relative">
      <div className="absolute inset-0 bg-transparent dark:bg-black/20"></div>
      
      {/* Page content */}
      <div className="container-max section-padding relative z-10 py-32">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Book Your Training Session
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Select your preferred date and time for a training session with Jonathan Mensah. 
            All sessions are held at Warner Woods Park, Columbus, OH.
          </p>
        </div>

        {/* Booking iframe */}
        <div className="bg-white dark:bg-white p-4 rounded-2xl shadow-lg relative min-h-[800px]">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white rounded-2xl">
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 border-3 border-accent-500/30 border-t-accent-500 rounded-full animate-spin"></div>
                <p className="text-gray-500 text-sm font-medium animate-pulse">Loading calendar...</p>
              </div>
            </div>
          )}
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0TAu308KJwQ0C7k5ah6T6FNS4TtNqlKTVHkfxHF2Tj7UyGFaaeC2fNVJWxc0GxJuA1xIyGhLO4?gv=true"
            className={`w-full h-[800px] rounded-xl transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            frameBorder="0"
            allowFullScreen
            allow="camera *; microphone *"
            onLoad={() => setIsLoading(false)}
          />
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-gray-100 dark:border-white/10">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Session Duration</h3>
            <p className="text-gray-600 dark:text-gray-300">Each training session is 60 minutes long, designed to maximize your development.</p>
          </div>
          
          <div className="bg-gray-50 dark:bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-gray-100 dark:border-white/10">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Location</h3>
            <p className="text-gray-600 dark:text-gray-300">All sessions take place at Warner Woods Park, Columbus, OH. Directions will be sent with confirmation.</p>
          </div>
          
          <div className="bg-gray-50 dark:bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-gray-100 dark:border-white/10">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">What to Bring</h3>
            <p className="text-gray-600 dark:text-gray-300">Bring your cleats, water bottle, and determination. All other training equipment will be provided.</p>
          </div>
        </div>
      </div>
    </div>
  )
} 