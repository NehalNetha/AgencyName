"use client"

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="relative py-16 md:py-24 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-full h-full"
          style={{
            background: 'radial-gradient(circle at 50% 100%, rgba(168, 85, 247, 0.2) 0%, rgba(107, 33, 168, 0.1) 25%, transparent 70%)',
          }}
        />
        <div 
          className="absolute w-full h-full opacity-60"
          style={{
            background: 'linear-gradient(to top, transparent, rgba(0, 0, 0, 0.8))',
          }}
        />
      </div>
      
      {/* Particle effect */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute w-full h-full bg-[url('/particles.svg')] bg-repeat opacity-10" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12 md:mb-16">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="/logo.svg"
                alt="Bald Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="ml-2 text-xl font-bold text-white">Bald</span>
            </Link>
            <p className="text-white/70 mb-6">
              Transforming ideas into digital reality with cutting-edge technology solutions.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                <a 
                  key={social}
                  href={`https://${social}.com`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Image 
                    src={`/icons/${social}.svg`} 
                    alt={`${social} icon`} 
                    width={20} 
                    height={20}
                  />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <Link 
                    href={`/${link.toLowerCase() === 'home' ? '' : link.toLowerCase()}`}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Tech Consulting'].map((service) => (
                <li key={service}>
                  <Link 
                    href={`/services#${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 mt-1 text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <span className="text-white/70">123 Innovation Street, Tech City, TC 10011</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 mt-1 text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <span className="text-white/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 mt-1 text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <span className="text-white/70">hello@baldagency.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter Subscription */}
        <div className="border-t border-white/10 pt-8 pb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Subscribe to our newsletter</h3>
              <p className="text-white/70">Stay updated with our latest news and insights</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-l-full px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:border-purple-500/50 w-full md:w-64"
              />
              <button className="bg-purple-500 hover:bg-purple-600 transition-colors text-white rounded-r-full px-4 py-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Bald Agency. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-white/50 text-sm hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/50 text-sm hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-white/50 text-sm hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer