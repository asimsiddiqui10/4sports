# Google Integration Setup Guide

This guide will help you set up Google Forms and Google Calendar integration for your soccer training website.

## Google Forms Integration

### Step 1: Create a Google Form

1. Go to [Google Forms](https://forms.google.com/)
2. Click "Create a new form"
3. Set up your form with the following fields:

#### Required Form Fields:
- **Player Name** (Short answer)
- **Age** (Short answer, number)
- **Email Address** (Short answer, email validation)
- **Phone Number** (Short answer)
- **Parent/Guardian Name** (Short answer) - for players under 18
- **Parent/Guardian Email** (Short answer, email validation) - for players under 18
- **Preferred Date** (Date)
- **Preferred Time** (Multiple choice or dropdown)
- **Training Focus** (Multiple choice or dropdown)
- **Additional Notes** (Paragraph, optional)

#### Time Slot Options:
```
9:00 AM
9:30 AM
10:00 AM
10:30 AM
11:00 AM
11:30 AM
12:00 PM
12:30 PM
1:00 PM
1:30 PM
2:00 PM
2:30 PM
3:00 PM
3:30 PM
4:00 PM
4:30 PM
5:00 PM
5:30 PM
6:00 PM
```

#### Training Focus Options:
```
Individual Skill Development
Tactical Training
Goalkeeper Training
Speed & Agility
Ball Control & Footwork
Shooting & Finishing
Passing & Vision
General Assessment
```

### Step 2: Get Form ID and Entry IDs

1. **Get Form ID:**
   - Open your form in edit mode
   - Look at the URL: `https://docs.google.com/forms/d/{FORM_ID}/edit`
   - Copy the FORM_ID part

2. **Get Entry IDs:**
   - Open your form in edit mode
   - Right-click on each field and select "Inspect Element"
   - Look for `name="entry.XXXXXXXXX"` in the HTML
   - Record each entry ID for the corresponding field

### Step 3: Update the Code

In `components/BookingForm.tsx`, update the form submission section:

```typescript
// Replace with your actual Google Form ID
const GOOGLE_FORM_ID = 'YOUR_ACTUAL_FORM_ID'

// Map form fields to Google Form entry IDs
const formData = new FormData()
formData.append('entry.YOUR_NAME_ENTRY_ID', data.name)
formData.append('entry.YOUR_AGE_ENTRY_ID', data.age.toString())
formData.append('entry.YOUR_EMAIL_ENTRY_ID', data.email)
formData.append('entry.YOUR_PHONE_ENTRY_ID', data.phone)
if (data.parentName) formData.append('entry.YOUR_PARENT_NAME_ENTRY_ID', data.parentName)
if (data.parentEmail) formData.append('entry.YOUR_PARENT_EMAIL_ENTRY_ID', data.parentEmail)
formData.append('entry.YOUR_DATE_ENTRY_ID', data.preferredDate)
formData.append('entry.YOUR_TIME_ENTRY_ID', data.preferredTime)
formData.append('entry.YOUR_TRAINING_ENTRY_ID', data.trainingFocus)
if (data.additionalNotes) formData.append('entry.YOUR_NOTES_ENTRY_ID', data.additionalNotes)
```

### Step 4: Set up Form Responses

1. In your Google Form, click on "Responses"
2. Click the green spreadsheet icon to create a Google Sheets response destination
3. Set up email notifications:
   - Click the three dots menu
   - Select "Get email notifications for new responses"

## Google Calendar Integration (Optional Advanced Feature)

### Step 1: Enable Google Calendar API

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Calendar API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Calendar API"
   - Click "Enable"

### Step 2: Create Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "API Key"
3. Copy your API key
4. (Optional) Restrict the API key to Google Calendar API only

### Step 3: Set up Calendar

1. Create a dedicated Google Calendar for training sessions
2. Get the Calendar ID:
   - Open Google Calendar
   - Click on your training calendar settings
   - Scroll down to "Calendar ID"
   - Copy the calendar ID

### Step 4: Update Environment Variables

Create a `.env.local` file (copy from `env.example`):

```env
GOOGLE_FORM_ID=your_actual_form_id
GOOGLE_CALENDAR_API_KEY=your_api_key
GOOGLE_CALENDAR_ID=your_calendar_id
```

### Step 5: Implement Calendar Integration

You can extend the booking form to:
- Display available time slots from Google Calendar
- Automatically create calendar events when bookings are submitted
- Send calendar invites to customers

Example implementation in a new API route (`app/api/calendar/route.ts`):

```typescript
import { google } from 'googleapis'

export async function GET() {
  const calendar = google.calendar({
    version: 'v3',
    auth: process.env.GOOGLE_CALENDAR_API_KEY
  })

  try {
    const response = await calendar.events.list({
      calendarId: process.env.GOOGLE_CALENDAR_ID,
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    })

    return Response.json(response.data.items)
  } catch (error) {
    return Response.json({ error: 'Failed to fetch calendar events' }, { status: 500 })
  }
}
```

## Testing Your Integration

### Test Google Forms Integration:
1. Fill out and submit the booking form on your website
2. Check your Google Form responses to see if the data appears
3. Verify you receive email notifications (if set up)

### Test Calendar Integration (if implemented):
1. Create a test booking
2. Check if the event appears in your Google Calendar
3. Verify calendar invites are sent to customers

## Troubleshooting

### Common Issues:

1. **Form submissions not appearing:**
   - Double-check your Form ID
   - Verify all entry IDs are correct
   - Check browser console for errors

2. **CORS errors:**
   - The form uses `mode: 'no-cors'` which is normal for Google Forms
   - You won't be able to read the response, but submissions should still work

3. **Calendar API errors:**
   - Verify your API key is valid and has Calendar API access
   - Check that your Calendar ID is correct
   - Ensure the calendar is publicly accessible or you have proper authentication

### Support Resources:

- [Google Forms Help](https://support.google.com/docs/topic/6063584)
- [Google Calendar API Documentation](https://developers.google.com/calendar/api)
- [Google Cloud Console](https://console.cloud.google.com/)

## Security Notes

- Never commit your actual API keys to version control
- Use environment variables for all sensitive data
- Consider implementing rate limiting for form submissions
- Regularly rotate your API keys for security 