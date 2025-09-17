export interface BookingFormData {
  name: string;
  age: number;
  email: string;
  phone: string;
  parentName?: string;
  parentEmail?: string;
  preferredDate: string;
  preferredTime: string;
  trainingFocus: string;
  additionalNotes?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  age?: number;
  content: string;
  rating: number;
  image?: string;
}

export interface TimeSlot {
  date: string;
  time: string;
  available: boolean;
} 