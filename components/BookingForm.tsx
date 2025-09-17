'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { bookingFormSchema, type BookingFormData } from '@/lib/validations'
import { generateTimeSlots } from '@/lib/utils'
import { Calendar, Clock, User, Mail, Phone, Target, MessageSquare } from 'lucide-react'

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      age: 16,
    }
  })

  const watchAge = watch('age')
  const timeSlots = generateTimeSlots()
  
  const trainingOptions = [
    'Individual Skill Development',
    'Tactical Training', 
    'Goalkeeper Training',
    'Speed & Agility',
    'Ball Control & Footwork',
    'Shooting & Finishing',
    'Passing & Vision',
    'General Assessment'
  ]

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)
    setSubmitError('')

    try {
      // Create Google Form URL with pre-filled data
      // Replace with your actual Google Form ID
      const GOOGLE_FORM_ID = 'YOUR_GOOGLE_FORM_ID'
      
      // Map form fields to Google Form entry IDs (you'll need to get these from your form)
      const formData = new FormData()
      formData.append('entry.NAME_FIELD_ID', data.name)
      formData.append('entry.AGE_FIELD_ID', data.age.toString())
      formData.append('entry.EMAIL_FIELD_ID', data.email)
      formData.append('entry.PHONE_FIELD_ID', data.phone)
      if (data.parentName) formData.append('entry.PARENT_NAME_FIELD_ID', data.parentName)
      if (data.parentEmail) formData.append('entry.PARENT_EMAIL_FIELD_ID', data.parentEmail)
      formData.append('entry.DATE_FIELD_ID', data.preferredDate)
      formData.append('entry.TIME_FIELD_ID', data.preferredTime)
      formData.append('entry.TRAINING_FIELD_ID', data.trainingFocus)
      if (data.additionalNotes) formData.append('entry.NOTES_FIELD_ID', data.additionalNotes)

      // Submit to Google Forms
      const response = await fetch(`https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      })

      // Since we're using no-cors, we can't check the response
      // We'll assume success if no error is thrown
      setIsSubmitted(true)
      reset()
      
      // Send confirmation email (optional - you can implement this with a serverless function)
      // await sendConfirmationEmail(data)
      
    } catch (error) {
      setSubmitError('There was an error submitting your booking. Please try again or contact us directly.')
      console.error('Booking submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-primary-900 mb-4">Booking Request Submitted!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for your interest! We'll review your request and get back to you within 24 hours 
          to confirm your training session details.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)} 
          className="btn-primary"
        >
          Book Another Session
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {submitError && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
          {submitError}
        </div>
      )}

      {/* Player Information */}
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h3 className="text-lg font-semibold text-primary-900 mb-4 flex items-center">
          <User className="h-5 w-5 mr-2" />
          Player Information
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              {...register('name')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Enter player's full name"
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
              Age *
            </label>
            <input
              type="number"
              id="age"
              {...register('age', { valueAsNumber: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Age"
              min="5"
              max="50"
            />
            {errors.age && <p className="text-red-600 text-sm mt-1">{errors.age.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="player@example.com"
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              {...register('phone')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="(555) 123-4567"
            />
            {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>}
          </div>
        </div>
      </div>

      {/* Parent Information (if under 18) */}
      {watchAge && watchAge < 18 && (
        <div className="bg-blue-50 rounded-lg p-6 shadow-sm border border-blue-200">
          <h3 className="text-lg font-semibold text-primary-900 mb-4 flex items-center">
            <Mail className="h-5 w-5 mr-2" />
            Parent/Guardian Information
          </h3>
          <p className="text-sm text-blue-700 mb-4">
            Since the player is under 18, we need parent/guardian contact information.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-1">
                Parent/Guardian Name *
              </label>
              <input
                type="text"
                id="parentName"
                {...register('parentName')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Parent's full name"
              />
              {errors.parentName && <p className="text-red-600 text-sm mt-1">{errors.parentName.message}</p>}
            </div>

            <div>
              <label htmlFor="parentEmail" className="block text-sm font-medium text-gray-700 mb-1">
                Parent/Guardian Email *
              </label>
              <input
                type="email"
                id="parentEmail"
                {...register('parentEmail')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="parent@example.com"
              />
              {errors.parentEmail && <p className="text-red-600 text-sm mt-1">{errors.parentEmail.message}</p>}
            </div>
          </div>
        </div>
      )}

      {/* Session Details */}
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h3 className="text-lg font-semibold text-primary-900 mb-4 flex items-center">
          <Calendar className="h-5 w-5 mr-2" />
          Session Details
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Date *
            </label>
            <input
              type="date"
              id="preferredDate"
              {...register('preferredDate')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              min={new Date().toISOString().split('T')[0]}
            />
            {errors.preferredDate && <p className="text-red-600 text-sm mt-1">{errors.preferredDate.message}</p>}
          </div>

          <div>
            <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Time *
            </label>
            <select
              id="preferredTime"
              {...register('preferredTime')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">Select a time</option>
              {timeSlots.map((time) => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
            {errors.preferredTime && <p className="text-red-600 text-sm mt-1">{errors.preferredTime.message}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="trainingFocus" className="block text-sm font-medium text-gray-700 mb-1">
            Training Focus *
          </label>
          <select
            id="trainingFocus"
            {...register('trainingFocus')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">Select training focus</option>
            {trainingOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {errors.trainingFocus && <p className="text-red-600 text-sm mt-1">{errors.trainingFocus.message}</p>}
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h3 className="text-lg font-semibold text-primary-900 mb-4 flex items-center">
          <MessageSquare className="h-5 w-5 mr-2" />
          Additional Information
        </h3>
        
        <div>
          <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 mb-1">
            Additional Notes (Optional)
          </label>
          <textarea
            id="additionalNotes"
            {...register('additionalNotes')}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Any specific goals, concerns, or additional information you'd like to share..."
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary text-lg px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </>
          ) : (
            'Submit Booking Request'
          )}
        </button>
      </div>

      <p className="text-sm text-gray-600 text-center">
        We'll review your request and contact you within 24 hours to confirm your session details.
      </p>
    </form>
  )
} 