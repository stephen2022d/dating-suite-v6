import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import './App.css'

const heroWomanSmiling = "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
const heroManSmiling = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
const heroDiversePeople = "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";

// Landing Page Component
const LandingPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFF9F6'}}>
      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/95 backdrop-blur-sm border-t border-gray-200 md:hidden">
        <a 
          href="https://tally.so/r/nPNMV5"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-white py-3 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 block text-center"
          style={{backgroundColor: '#D158A5', fontFamily: 'Inter, sans-serif'}}
        >
          👉 Join Our Waiting List – Free
        </a>
      </div>
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-[#D158A5] to-[#D8B4E2] rounded-full flex items-center justify-center">
            <span className="text-white text-lg">💜</span>
          </div>
          <span className="text-xl font-bold text-gray-800" style={{fontFamily: 'DM Serif Display, serif'}}>The Dating Suite</span>
          <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-1 rounded-full" style={{fontFamily: 'Inter, sans-serif'}}>BETA</span>
        </div>
        <button 
          onClick={() => navigate('/login')}
          className="text-[#D158A5] hover:text-[#D8B4E2] font-medium"
        >
          Sign In
        </button>
      </header>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 pb-24 md:pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight" style={{fontFamily: 'DM Serif Display, serif'}}>
                The Dating Suite — A Dating App & Community That 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D158A5] to-[#D8B4E2]"> Cares</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed" style={{fontFamily: 'Inter, sans-serif'}}>
                A dating community built on support, honesty, real conversation — and of course, fun.
              </p>
              <p className="text-lg text-gray-500">
                Connect with people, not just profiles.
              </p>
            </div>
            
            {/* Scroll Down Indicator */}
            <div className="mt-8 text-center lg:text-left">
              <div className="inline-flex flex-col items-center space-y-2 animate-bounce">
                <span className="text-sm text-gray-500" style={{fontFamily: 'Inter, sans-serif'}}>
                  Discover more below
                </span>
                <svg 
                  className="w-6 h-6 text-[#D158A5]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                  />
                </svg>
              </div>
            </div>
            
            <div className="space-y-4">
              <a 
                href="https://tally.so/r/nPNMV5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                style={{backgroundColor: '#7ED6A7', fontFamily: 'Inter, sans-serif'}}
              >
                👉 Join Our Waiting List – It's Free
              </a>
              <p className="text-sm text-gray-500" style={{fontFamily: 'Inter, sans-serif'}}>Free to join • No hidden fees</p>
              
              {/* BETA Notice */}
              <p className="text-sm text-gray-400 text-center italic" style={{fontFamily: 'Inter, sans-serif'}}>
                Now in BETA — help shape the future of dating.
              </p>
              
              {/* Pricing Reassurance */}
              <p className="text-xs text-gray-400 text-center font-light" style={{fontFamily: 'Inter, sans-serif'}}>
                The Dating Suite will always offer a free tier. Paid features will remain affordable and optional.
              </p>
              
              {/* Feature Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-4">
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✅</span>
                  <span className="text-sm text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>Privacy-first</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✅</span>
                  <span className="text-sm text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>Supportive features</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✅</span>
                  <span className="text-sm text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>Meaningful interactions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✅</span>
                  <span className="text-sm text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>AI guidance from Heartmend, The Wingmate & The Mentor</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src={heroWomanSmiling} 
                  alt="Happy woman smiling" 
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <img 
                  src={heroManSmiling} 
                  alt="Happy man smiling" 
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="pt-8">
                <img 
                  src={heroDiversePeople} 
                  alt="Diverse group of happy people" 
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Why We Built The Dating Suite Section */}
        <div className="mt-20 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8" style={{fontFamily: 'DM Serif Display, serif'}}>
            Why We Built The Dating Suite
          </h2>
          <div className="space-y-6 text-lg text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
            <p>
              We heard the same stories over and over again from friends, family, and workmates. Dating apps that felt like shopping catalogs. Endless swiping, ghosting, and surface-level connections. We believe dating should be about genuine human connection, not algorithms optimized for engagement.
            </p>
            <p>
              The Dating Suite is our answer: a space where authenticity matters more than perfect photos, where you get support instead of just matches, and where real conversations happen before you even meet.
            </p>
          </div>
        </div>

        {/* Meet Your In-House AI Coaches Section */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full px-4 py-2 mb-8">
            <span className="text-sm font-medium text-green-700" style={{fontFamily: 'Inter, sans-serif'}}>Coming Soon</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" style={{fontFamily: 'DM Serif Display, serif'}}>
            🧠 Meet Your In-House AI Coaches
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-16" style={{fontFamily: 'Inter, sans-serif'}}>
            Three distinct personalities, each designed to support you through different aspects of your dating journey. Think of them as your personal guides, each with unique strengths to help you navigate love and relationships.
          </p>

          {/* AI Coaches Grid */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Heartmend */}
            <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-3xl p-8 shadow-lg">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-red-400 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-3xl">💔</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900" style={{fontFamily: 'DM Serif Display, serif'}}>
                  Heartmend
                </h3>
                <h4 className="text-xl font-semibold text-pink-600" style={{fontFamily: 'Inter, sans-serif'}}>
                  The Compassionate Healer
                </h4>
                <p className="text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
                  Heartmend is your gentle guide through the tender process of healing and moving forward. If you've experienced heartbreak, a tough breakup, or just need to mend your spirit before diving back into dating, Heartmend offers a safe space for reflection and recovery.
                </p>
                <div className="bg-pink-100 rounded-2xl p-4">
                  <p className="text-pink-700 italic" style={{fontFamily: 'Inter, sans-serif'}}>
                    "Think of me as that wise friend who's been through it all. I help you process emotions, build resilience, and rediscover your self-worth, ensuring you approach new connections from a place of strength and peace."
                  </p>
                </div>
                <div className="text-left space-y-2">
                  <h5 className="font-semibold text-gray-900" style={{fontFamily: 'Inter, sans-serif'}}>Perfect for:</h5>
                  <ul className="text-sm text-gray-600 space-y-1" style={{fontFamily: 'Inter, sans-serif'}}>
                    <li>• Those recovering from breakups or heartbreak</li>
                    <li>• Individuals seeking serious relationships</li>
                    <li>• Those wanting to improve their communication skills</li>
                    <li>• People looking for guidance on long-term compatibility</li>
                    <li>• Anyone focused on personal growth within relationships</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-xl p-4">
                  <p className="text-blue-700 italic text-sm" style={{fontFamily: 'Inter, sans-serif'}}>
                    "The Mentor helped me understand why my relationships kept following the same pattern. Now I'm dating with intention, not just hoping for the best."
                  </p>
                </div>
              </div>
            </div>

            {/* The Wingmate */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 shadow-lg">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-3xl">✨</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900" style={{fontFamily: 'DM Serif Display, serif'}}>
                  The Wingmate
                </h3>
                <h4 className="text-xl font-semibold text-orange-600" style={{fontFamily: 'Inter, sans-serif'}}>
                  The Confident Spark
                </h4>
                <p className="text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
                  The Wingmate is your energetic companion for building confidence and creating genuine connections. Whether you're nervous about first dates or want to add more spark to your interactions, The Wingmate helps you shine authentically.
                </p>
                <div className="bg-yellow-100 rounded-2xl p-4">
                  <p className="text-orange-700 italic" style={{fontFamily: 'Inter, sans-serif'}}>
                    "I'm here to help you discover your natural charm and confidence. Together, we'll work on conversation skills, date ideas, and ways to make meaningful connections that feel genuine and fun."
                  </p>
                </div>
                <div className="text-left space-y-2">
                  <h5 className="font-semibold text-gray-900" style={{fontFamily: 'Inter, sans-serif'}}>Perfect for:</h5>
                  <ul className="text-sm text-gray-600 space-y-1" style={{fontFamily: 'Inter, sans-serif'}}>
                    <li>• Those who want to improve their dating game</li>
                    <li>• People looking to overcome social anxiety</li>
                    <li>• Anyone wanting to add more sparkle to their interactions</li>
                    <li>• Users seeking confidence boosts and conversation starters</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 rounded-xl p-4">
                  <p className="text-orange-700 italic text-sm" style={{fontFamily: 'Inter, sans-serif'}}>
                    "The Wingmate gave me conversation starters that actually worked! I went from awkward small talk to having genuine fun with my matches."
                  </p>
                </div>
              </div>
            </div>

            {/* The Mentor */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-lg">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-3xl">🧠</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900" style={{fontFamily: 'DM Serif Display, serif'}}>
                  The Mentor
                </h3>
                <h4 className="text-xl font-semibold text-blue-600" style={{fontFamily: 'Inter, sans-serif'}}>
                  The Wise Guide to Deeper Connections
                </h4>
                <p className="text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
                  The Mentor is your strategic partner for building meaningful, lasting relationships. Focused on long-term compatibility and personal growth, The Mentor helps you navigate the deeper aspects of dating and relationships.
                </p>
                <div className="bg-blue-100 rounded-2xl p-4">
                  <p className="text-blue-700 italic" style={{fontFamily: 'Inter, sans-serif'}}>
                    "I'm here to help you think strategically about relationships. We'll explore compatibility, communication patterns, and personal growth opportunities that lead to lasting connections."
                  </p>
                </div>
                <div className="text-left space-y-2">
                  <h5 className="font-semibold text-gray-900" style={{fontFamily: 'Inter, sans-serif'}}>Perfect for:</h5>
                  <ul className="text-sm text-gray-600 space-y-1" style={{fontFamily: 'Inter, sans-serif'}}>
                    <li>• Those seeking serious, long-term relationships</li>
                    <li>• People wanting to understand relationship patterns</li>
                    <li>• Anyone focused on personal development</li>
                    <li>• Users looking for deeper compatibility insights</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* How Your Coaches Work */}
          <div className="mt-16 bg-white rounded-3xl p-8 lg:p-12 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6" style={{fontFamily: 'DM Serif Display, serif'}}>
              How Your Coaches Work
            </h3>
            <p className="text-xl text-gray-600 mb-8" style={{fontFamily: 'Inter, sans-serif'}}>
              Your coaches adapt to you.
            </p>
            <p className="text-lg text-gray-700 mb-8" style={{fontFamily: 'Inter, sans-serif'}}>
              Whether you need a pep talk, practical advice, or deep emotional support, they learn your communication style and provide personalized guidance that feels genuinely helpful.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💬</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2" style={{fontFamily: 'Inter, sans-serif'}}>
                  Personalized Conversations
                </h4>
                <p className="text-gray-600 text-sm" style={{fontFamily: 'Inter, sans-serif'}}>
                  Each coach adapts to your unique needs and communication style
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2" style={{fontFamily: 'Inter, sans-serif'}}>
                  Targeted Support
                </h4>
                <p className="text-gray-600 text-sm" style={{fontFamily: 'Inter, sans-serif'}}>
                  Get specific help for your current dating challenges
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📈</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2" style={{fontFamily: 'Inter, sans-serif'}}>
                  Growth-Focused
                </h4>
                <p className="text-gray-600 text-sm" style={{fontFamily: 'Inter, sans-serif'}}>
                  Build lasting skills and confidence for better relationships
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof Section */}
        <div className="mt-20 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12" style={{fontFamily: 'DM Serif Display, serif'}}>
            💬 Why People Love The Dating Suite
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">💭</span>
              </div>
              <p className="text-lg text-gray-700 italic mb-4" style={{fontFamily: 'Inter, sans-serif'}}>
                "Finally, a dating space that feels human again."
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">✨</span>
              </div>
              <p className="text-lg text-gray-700 italic mb-4" style={{fontFamily: 'Inter, sans-serif'}}>
                "I got more value from one chat with a coach than a month of swiping."
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">💖</span>
              </div>
              <p className="text-lg text-gray-700 italic mb-4" style={{fontFamily: 'Inter, sans-serif'}}>
                "You can feel the difference — this place actually cares."
              </p>
            </div>
          </div>
        </div>

        {/* Features Preview Section */}
        <div className="mt-20 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" style={{fontFamily: 'DM Serif Display, serif'}}>
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{fontFamily: 'Inter, sans-serif'}}>
              We're building more than just another dating app — we're creating a supportive community where meaningful connections flourish.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🛡️</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2" style={{fontFamily: 'Inter, sans-serif'}}>
                    Privacy-First Design
                  </h3>
                  <p className="text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>
                    Your data stays yours. No selling information, no invasive tracking.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🤝</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2" style={{fontFamily: 'Inter, sans-serif'}}>
                    Community-Led Support
                  </h3>
                  <p className="text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>
                    Real people sharing experiences and supporting each other's journey.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">⭐</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2" style={{fontFamily: 'Inter, sans-serif'}}>
                    Premium Match Features
                  </h3>
                  <p className="text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>
                    Smart compatibility insights that go beyond surface-level attraction.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-center space-x-2">
                    <span>🛡️</span>
                    <span>Privacy-first</span>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-center space-x-2">
                    <span>💬</span>
                    <span>Real conversations</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-center space-x-2">
                    <span>🤝</span>
                    <span>Community-led support</span>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-center space-x-2">
                    <span>⭐</span>
                    <span>Premium match features</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MicroDate & Micro Lounge - EXCITING FEATURES SECTION */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12">
          {/* MicroDate */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 lg:p-12 shadow-lg">
            <div className="text-center space-y-6">
              <div className="inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-medium text-purple-700" style={{fontFamily: 'Inter, sans-serif'}}>Coming Soon</span>
              </div>
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-3xl">💜</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900" style={{fontFamily: 'DM Serif Display, serif'}}>
                MicroDate
              </h3>
              <h4 className="text-xl font-semibold text-purple-600" style={{fontFamily: 'Inter, sans-serif'}}>
                Our signature 2-minute AI-guided video dates are on the way.
              </h4>
              <p className="text-lg text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
                Get ready — think modern speed dating, 2025 style. No pressure, just spark.
              </p>
            </div>
          </div>

          {/* Micro Lounge */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 lg:p-12 shadow-lg">
            <div className="text-center space-y-6">
              <div className="inline-block bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-medium text-green-700" style={{fontFamily: 'Inter, sans-serif'}}>Coming Soon</span>
              </div>
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-3xl">💬</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900" style={{fontFamily: 'DM Serif Display, serif'}}>
                Micro Lounge
              </h3>
              <h4 className="text-xl font-semibold text-green-600" style={{fontFamily: 'Inter, sans-serif'}}>
                Not just for dating — it's where the fun lives!
              </h4>
              <p className="text-lg text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
                Join group chats, events, and community discussions. Build friendships, find your tribe, and enjoy the journey.
              </p>
            </div>
          </div>
        </div>

        {/* Meet the Founders Section */}
        <div className="mt-20 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8" style={{fontFamily: 'DM Serif Display, serif'}}>
            Meet the Founders
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
            <p className="text-xl font-semibold text-gray-900">
              Founded in Manchester by Stephen and Hayley.
            </p>
            
            <p>
              The Dating Suite was created with real people in mind — not just swipers.
            </p>
            
            <p>
              Hayley, a former sociology teacher turned skills coach, has spent her career helping people build confidence and connection. Stephen works on the ground in construction, where the site chat is often about how hard dating really is — especially when the apps feel cold, crowded, and fake.
            </p>
            
            <p>
              Over cups of tea and late-night chats in their Greater Manchester home, they began shaping something better: a place where people can date smarter, with real support, and actually enjoy the process.
            </p>
            
            <p className="text-xl font-semibold text-gray-900 pt-4">
              Built in Manchester. Designed for connection. Powered by empathy.
            </p>
            
            <p>
              This isn't just another dating app — it's a space that listens, guides, and evolves with you.
            </p>
            
            <p className="text-xl font-bold text-gray-900 pt-6">
              Stephen & Hayley
            </p>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-br from-[#D158A5]/10 to-[#D8B4E2]/10 rounded-3xl p-8 lg:p-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" style={{fontFamily: 'DM Serif Display, serif'}}>
            Ready to Date Differently?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto" style={{fontFamily: 'Inter, sans-serif'}}>
            Join our community of people who believe dating should be supportive, authentic, and actually enjoyable.
          </p>
          <a 
            href="https://tally.so/r/nPNMV5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            style={{backgroundColor: '#D158A5', fontFamily: 'Inter, sans-serif'}}
          >
            👉 Join Our Waiting List – It's Free
          </a>
          <p className="text-sm text-gray-500 mt-4" style={{fontFamily: 'Inter, sans-serif'}}>
            Free to join • No hidden fees • Help shape the future of dating
          </p>
        </div>
      </div>
    </div>
  )
}

// Simple Login Component
const LoginPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simple demo login - in real app, this would authenticate
    if (email && password) {
      navigate('/dashboard')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{backgroundColor: '#FFF9F6'}}>
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-[#D158A5] to-[#D8B4E2] rounded-full flex items-center justify-center">
              <span className="text-white text-lg">💜</span>
            </div>
            <span className="text-xl font-bold text-gray-800" style={{fontFamily: 'DM Serif Display, serif'}}>The Dating Suite</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900" style={{fontFamily: 'DM Serif Display, serif'}}>
            Welcome Back
          </h2>
          <p className="mt-2 text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>
            Sign in to your account
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#D158A5] focus:border-[#D158A5]"
                style={{fontFamily: 'Inter, sans-serif'}}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#D158A5] focus:border-[#D158A5]"
                style={{fontFamily: 'Inter, sans-serif'}}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D158A5]"
              style={{backgroundColor: '#D158A5', fontFamily: 'Inter, sans-serif'}}
            >
              Sign in
            </button>
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="text-[#D158A5] hover:text-[#D8B4E2] font-medium"
              style={{fontFamily: 'Inter, sans-serif'}}
            >
              ← Back to home
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// Simple Dashboard Component
const DashboardPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFF9F6'}}>
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-[#D158A5] to-[#D8B4E2] rounded-full flex items-center justify-center">
                <span className="text-white text-lg">💜</span>
              </div>
              <span className="text-xl font-bold text-gray-800" style={{fontFamily: 'DM Serif Display, serif'}}>The Dating Suite</span>
            </div>
            <button
              onClick={() => navigate('/')}
              className="text-[#D158A5] hover:text-[#D8B4E2] font-medium"
              style={{fontFamily: 'Inter, sans-serif'}}
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4" style={{fontFamily: 'DM Serif Display, serif'}}>
              Welcome to Your Dating Suite
            </h1>
            <p className="text-xl text-gray-600 mb-8" style={{fontFamily: 'Inter, sans-serif'}}>
              Your personalized dating journey starts here.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💔</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{fontFamily: 'Inter, sans-serif'}}>
                  Chat with Heartmend
                </h3>
                <p className="text-gray-600 text-sm" style={{fontFamily: 'Inter, sans-serif'}}>
                  Get support and guidance for healing and growth
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✨</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{fontFamily: 'Inter, sans-serif'}}>
                  Meet The Wingmate
                </h3>
                <p className="text-gray-600 text-sm" style={{fontFamily: 'Inter, sans-serif'}}>
                  Build confidence and spark in your interactions
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🧠</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{fontFamily: 'Inter, sans-serif'}}>
                  Learn from The Mentor
                </h3>
                <p className="text-gray-600 text-sm" style={{fontFamily: 'Inter, sans-serif'}}>
                  Strategic insights for meaningful relationships
                </p>
              </div>
            </div>
            
            <div className="mt-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{fontFamily: 'DM Serif Display, serif'}}>
                Coming Soon: MicroDate & Micro Lounge
              </h2>
              <p className="text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
                Get ready for 2-minute AI-guided video dates and community features that make dating fun again.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

// Main App Component
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App

