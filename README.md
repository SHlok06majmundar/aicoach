# Carrernova - Your AI Career Coach

An AI-powered platform designed to accelerate your career growth through personalized guidance, interview preparation, smart document creation, and industry insights.

## Features

- **AI-Powered Career Guidance:** Get personalized advice and insights.
- **Interview Preparation:** Practice with role-specific questions and get feedback.
- **Smart Resume Creation:** Generate ATS-optimized resumes with AI assistance.
- **AI Cover Letter Generator:** Create tailored cover letters for your applications.
- **Industry Insights:** Stay updated with real-time trends, salary data, and market analysis.

## Technologies Used

- Next.js
- Neon DB
- Tailwind CSS
- Prisma
- Inngest
- Shadcn UI
- Clerk (for authentication)
- Google Generative AI

## Setup

1. Clone the repository.
2. Install dependencies using npm or yarn:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Set up your environment variables. Create a `.env` file in the root directory with the following variables:

   ```env
   DATABASE_URL=

   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=

   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

   GEMINI_API_KEY=
   ```
   Replace the placeholder values with your actual credentials.

4. Push your Prisma schema and generate the client:
   ```bash
   npx prisma db push
   npx prisma generate
   ```
5. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Logo

![Carrernova Logo](/logo.png)

## About the Developer

Made by Shlok Majmundar

Connect with me:

- LinkedIn: https://www.linkedin.com/in/shlok-majmundar-988851252/
- GitHub: https://github.com/SHlok06majmundar
- Instagram: https://www.instagram.com/shlok.majmundar 