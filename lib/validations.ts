import { z } from 'zod'

export const bookingFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  age: z.number().min(5, 'Age must be at least 5').max(50, 'Age must be less than 50'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  parentName: z.string().optional(),
  parentEmail: z.string().email('Please enter a valid parent email').optional().or(z.literal('')),
  preferredDate: z.string().min(1, 'Please select a preferred date'),
  preferredTime: z.string().min(1, 'Please select a preferred time'),
  trainingFocus: z.string().min(1, 'Please select a training focus'),
  additionalNotes: z.string().optional(),
}).refine((data) => {
  // If age is under 18, require parent information
  if (data.age < 18) {
    return data.parentName && data.parentName.length > 0 && data.parentEmail && data.parentEmail.length > 0
  }
  return true
}, {
  message: 'Parent name and email are required for players under 18',
  path: ['parentName']
})

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export type BookingFormData = z.infer<typeof bookingFormSchema>
export type ContactFormData = z.infer<typeof contactFormSchema> 