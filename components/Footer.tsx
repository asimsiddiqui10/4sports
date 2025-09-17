import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary-900 dark:bg-gradient-to-b dark:from-primary-900 dark:via-primary-950 dark:to-slate-950 text-white border-t border-primary-800 dark:border-primary-700 relative">
      <div className="absolute inset-0 bg-black/10 dark:bg-gradient-to-b dark:from-black/40 dark:via-black/60 dark:to-black/80"></div>
      <div className="container-max section-padding py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-4 group">
              <span className="text-accent-300 dark:text-accent-400 group-hover:text-accent-200 dark:group-hover:text-accent-300 transition-colors duration-300">4 Sports</span>{' '}
              <span className="group-hover:text-gray-200 transition-colors duration-300">Elite Training</span>
            </h3>
            <p className="text-gray-300 dark:text-gray-400 mb-4 leading-relaxed">
              Elite soccer training with former Columbus Crew Captain Jonathan Mensah. 
              16+ years of professional experience, MLS Cup winner, and Ghana international. 
              Pursue Excellence.
            </p>
            <p className="text-gray-400 dark:text-gray-500 text-sm italic animate-pulse-slow">
              "To serve and help the next generation grow through soccer and other community building programs."
            </p>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            <h4 className="text-lg font-semibold mb-4 text-accent-300 dark:text-accent-400">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center group">
                <Mail className="h-5 w-5 mr-3 text-accent-400 dark:text-accent-300 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                <a href="mailto:asimsiddiqui.you@gmail.com" className="text-gray-300 dark:text-gray-400 hover:text-accent-200 dark:hover:text-accent-300 transition-all duration-300 group-hover:translate-x-1">
                  asimsiddiqui.you@gmail.com
                </a>
              </div>
              <div className="flex items-center group">
                <MapPin className="h-5 w-5 mr-3 text-accent-400 dark:text-accent-300 group-hover:scale-110 group-hover:bounce transition-all duration-300" />
                <span className="text-gray-300 dark:text-gray-400 group-hover:translate-x-1 transition-transform duration-300">
                  Warner Woods Park<br />Columbus, OH
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
            <h4 className="text-lg font-semibold mb-4 text-accent-300 dark:text-accent-400">Quick Links</h4>
            <nav className="space-y-2">
              <Link href="/" className="block text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-all duration-300 hover:translate-x-2 relative group">
                Home
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#about" className="block text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-all duration-300 hover:translate-x-2 relative group">
                About Jonathan
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#programs" className="block text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-all duration-300 hover:translate-x-2 relative group">
                Training Programs
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#achievements" className="block text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-all duration-300 hover:translate-x-2 relative group">
                Achievements
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <a href="mailto:asimsiddiqui.you@gmail.com" className="block text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-all duration-300 hover:translate-x-2 relative group">
                Contact Us
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t border-gray-700 dark:border-primary-600 mt-8 pt-8 text-center text-gray-300 dark:text-gray-400 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <p className="hover:text-accent-300 dark:hover:text-accent-400 transition-colors duration-300">
            &copy; 2024 4 Sports Elite Training. All rights reserved. Founded by Jonathan Mensah.
          </p>
        </div>
      </div>
    </footer>
  )
} 