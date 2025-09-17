'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '@/lib/ThemeContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Jonathan', href: '#about' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Training Programs', href: '#programs' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'backdrop-blur-2xl bg-white/30 dark:bg-black/30 shadow-2xl shadow-black/10 dark:shadow-black/30' 
        : 'backdrop-blur-xl bg-white/20 dark:bg-black/20 shadow-lg shadow-black/5 dark:shadow-black/20'
    } rounded-2xl border border-gray-300/50 dark:border-white/20`}>
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white drop-shadow-sm transition-colors duration-300 group">
            <span className="text-accent-600 dark:text-accent-300 group-hover:text-accent-700 dark:group-hover:text-accent-200 transition-colors duration-300">4 Sports</span>{' '}
            <span className="group-hover:text-gray-700 dark:group-hover:text-gray-100 transition-colors duration-300">Elite Training</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-white/90 hover:text-gray-900 dark:hover:text-white font-medium transition-all duration-300 hover:scale-105 relative group drop-shadow-sm"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-600 dark:bg-accent-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent-500/30"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="h-4 w-4 transition-transform duration-300" />
              ) : (
                <Sun className="h-4 w-4 transition-transform duration-300" />
              )}
            </button>
            
            <a 
              href="mailto:asimsiddiqui.you@gmail.com" 
              className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary-500/30 transform hover:-translate-y-0.5 hover:scale-105 border border-primary-500"
            >
              Book Training
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </button>
            
            <button
              className="p-2 rounded-full hover:bg-gray-200/50 dark:hover:bg-white/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700 dark:text-white drop-shadow-sm transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700 dark:text-white drop-shadow-sm transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-300/50 dark:border-white/20 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-white/90 hover:text-gray-900 dark:hover:text-white font-medium transition-all duration-300 hover:translate-x-2 drop-shadow-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="mailto:asimsiddiqui.you@gmail.com"
                className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-center mt-4 hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Training
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 