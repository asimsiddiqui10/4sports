import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book Training | 4 Sports',
  description: 'Schedule your training session with Jonathan Mensah - former Columbus Crew Captain and Ghana International.',
}

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-primary-50 dark:bg-primary-900 relative">
      <div className="absolute inset-0 dark:bg-black/30"></div>
      
      {/* Page content */}
      <div className="container-max section-padding relative z-10 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 dark:text-white mb-4">
            Book Your Training Session
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Select your preferred date and time for a training session with Jonathan Mensah. 
            All sessions are held at Warner Woods Park, Columbus, OH.
          </p>
        </div>

                  {/* Booking iframe */}
          <div className="bg-white dark:bg-white p-4 rounded-2xl shadow-lg">
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ12IioEtDaVVMrnqnKcZQ0yIAQOw8CswA7g3t_c5gpe34hFWdsfeotBJ2-ily5PZap9-sWA9jGQ?gv=true"
              className="w-full h-[800px] rounded-xl"
              frameBorder="0"
              allowFullScreen
              allow="camera *; microphone *"
            />
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-white/10 dark:border-white/10">
            <h3 className="text-xl font-semibold text-primary-900 dark:text-white mb-2">Session Duration</h3>
            <p className="text-gray-600 dark:text-gray-300">Each training session is 60 minutes long, designed to maximize your development.</p>
          </div>
          
          <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-white/10 dark:border-white/10">
            <h3 className="text-xl font-semibold text-primary-900 dark:text-white mb-2">Location</h3>
            <p className="text-gray-600 dark:text-gray-300">All sessions take place at Warner Woods Park, Columbus, OH. Directions will be sent with confirmation.</p>
          </div>
          
          <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-white/10 dark:border-white/10">
            <h3 className="text-xl font-semibold text-primary-900 dark:text-white mb-2">What to Bring</h3>
            <p className="text-gray-600 dark:text-gray-300">Bring your cleats, water bottle, and determination. All other training equipment will be provided.</p>
          </div>
        </div>
      </div>
    </div>
  )
} 