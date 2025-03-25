'use client'

import { Home, ArrowLeft } from 'lucide-react';
import Link from "next/link";




export default function NotFoundPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      {/* Simple badge */}
      <div className="py-4 mb-2">
        <iframe className='w-auto h-[250px]' src="https://lottie.host/embed/2bc2c313-d540-420b-9c01-0297a027defe/QnZD0cEBvc.json"></iframe>
      </div>

      {/* Main heading */}
      <h1 className="text-4xl font-bold mb-4">
        Page Not Found
      </h1>

      {/* Styled subheading */}
      <p className="relative inline-block mb-8">
        <span className="relative z-10 px-2 text-xl text-gray-600">We couldn&#39;t find that page</span>
        <span className="absolute inset-0 bg-rose-200/50 -rotate-1 rounded-lg" aria-hidden="true"></span>
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <Link href="/" className="flex items-center gap-2 bg-gradient-to-r from-slate-900 to-rose-500 hover:from-rose-500 hover:to-slate-900 text-white rounded-full px-6 py-2 font-medium">
          <Home size={18} />
          <span>Back to Home</span>
        </Link>

        <Link href="#" onClick={() => window.history.back()} className="flex items-center gap-2 text-rose-600 border-rose-200 rounded-full px-6 py-2 hover:bg-rose-50">
          <ArrowLeft size={18} />
          <span>Go Back</span>
        </Link>
      </div>
    </section>
  );
}