import { Metadata } from 'next'
import BookingForm from '@/components/BookingForm'
import { Calendar, Clock, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Schedule Training Session - ProSoccer Training',
  description: 'Book your personalized 1-on-1 soccer training session. Choose your preferred date, time, and training focus.',
}

export default function SchedulePage() {
  const benefits = [
    'Personalized coaching tailored to your skill level',
    'Flexible scheduling to fit your availability',
    'Professional training from experienced coaches',
    'Immediate feedback and skill development',
    'Safe and supportive learning environment'
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            Schedule Your Training Session
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to take your soccer skills to the next level? Book a personalized 1-on-1 training session 
            that fits your schedule and focuses on your specific goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <BookingForm />
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* Session Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-primary-900 mb-4">Session Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-accent-500 mr-3" />
                  <div>
                    <p className="font-semibold">Duration</p>
                    <p className="text-gray-600">60 minutes</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-accent-500 mr-3" />
                  <div>
                    <p className="font-semibold">Availability</p>
                    <p className="text-gray-600">7 days a week, 9 AM - 6 PM</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-3" />
                  <div>
                    <p className="font-semibold">Confirmation</p>
                    <p className="text-gray-600">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-primary-900 mb-4">What to Expect</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="bg-primary-900 text-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Need Help?</h3>
              <p className="text-gray-200 mb-4">
                Have questions about our training programs or need assistance with booking?
              </p>
              <div className="space-y-2">
                <p className="flex items-center">
                  <span className="font-semibold mr-2">Phone:</span>
                  (555) 123-4567
                </p>
                <p className="flex items-center">
                  <span className="font-semibold mr-2">Email:</span>
                  info@prosoccertraining.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 