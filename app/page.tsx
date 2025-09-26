import Image from 'next/image'
import Link from 'next/link'
import { Star, Clock, Users, Trophy, Target, Zap, Award, Globe, MapPin, Mail } from 'lucide-react'

export default function HomePage() {
  const trainingPrograms = [
    {
      id: '1',
      title: 'Technical Training',
      description: 'Master ball control, first touch, passing accuracy, and advanced technical skills with professional-level instruction.',
      duration: '60 minutes',
      price: 'Contact for pricing',
      features: ['Ball Control & First Touch', 'Passing & Crossing', 'Shooting Technique', 'Dribbling & Skills']
    },
    {
      id: '2',
      title: 'Fitness Training',
      description: 'Develop the physical conditioning needed to compete at the highest levels with personalized fitness programs.',
      duration: '60 minutes',
      price: 'Contact for pricing',
      features: ['Speed & Agility', 'Strength Training', 'Endurance Building', 'Injury Prevention']
    },
    {
      id: '3',
      title: 'Mental Training',
      description: 'Build mental toughness, game intelligence, and decision-making skills essential for elite performance.',
      duration: '60 minutes',
      price: 'Contact for pricing',
      features: ['Mental Toughness', 'Game Intelligence', 'Pressure Management', 'Leadership Skills']
    },
    {
      id: '4',
      title: 'Mentorship Program',
      description: 'Comprehensive guidance on and off the field, character building, and pathway to professional soccer.',
      duration: 'Ongoing',
      price: 'Contact for pricing',
      features: ['Character Development', 'Professional Pathway', 'Life Skills', 'Career Guidance']
    }
  ]

  const achievements = [
    { title: '16+ Years Professional', description: 'Playing across Ghana, South Africa, Italy, Spain, France, Russia, and USA' },
    { title: '70 International Caps', description: 'Ghana Senior National Team' },
    { title: '2 World Cups', description: 'Senior World Cup appearances' },
    { title: '1 World Cup Winner', description: 'Junior World Cup champion' },
    { title: '7 AFCON Tournaments', description: 'African Cup of Nations appearances' },
    { title: 'MLS Cup Winner', description: 'Columbus Crew champion' },
    { title: 'Former Captain', description: 'Columbus Crew leadership' },
    { title: '300+ Total Games', description: 'Professional career appearances' }
  ]

  // All 17 photos for the marquee
  const allPhotos = [
    { src: '/071822_action_038_Original.JPEG', alt: 'Jonathan Mensah in action - Columbus Crew' },
    { src: '/052222_LAFC_002.JPEG', alt: 'Jonathan Mensah - Professional Soccer Career' },
    { src: '/2021-09-29 COLUMBUS CREW VS CRUZ AZUL-207.JPG', alt: 'Jonathan Mensah - MLS Cup Victory' },
    { src: '/IMG_2770.JPEG', alt: 'Jonathan Mensah - Ghana National Team' },
    { src: '/2021-09-29_ CREW VS CRUZ AZUL-62.JPG', alt: 'Jonathan Mensah - Columbus Crew Success' },
    { src: '/IMG_0318.JPG', alt: '4 Sports Training Session' },
    { src: '/IMG_0395.JPG', alt: 'Elite Soccer Training' },
    { src: '/IMG_0507.JPG', alt: 'Professional Soccer Coaching' },
    { src: '/632fed13-885b-40a1-b4c6-28bbdd8848f4.JPG', alt: 'Jonathan Mensah Professional Career' },
    { src: '/9B2D2491-30A8-403A-B8D9-9C1698335C8A.JPG', alt: 'Elite Training Session' },
    { src: '/IMG_0329.JPG', alt: 'Soccer Training Excellence' },
    { src: '/09AEC572-C448-4A45-B03E-E7C69B90E098.JPG', alt: 'Professional Soccer Training' },
    { src: '/IMG_0323.JPG', alt: '4 Sports Elite Training' },
    { src: '/IMG_0472.JPG', alt: 'Soccer Skills Development' },
    { src: '/IMG_1509.JPEG', alt: 'Jonathan Mensah Career Highlights' },
    { src: '/IMG_2015.JPG', alt: 'Professional Soccer Achievement' },
    { src: '/IMG_6558.JPG', alt: 'Elite Soccer Training Program' }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] transition-colors duration-300">
      {/* Hero Section - Simple gradient */}
      <section className="relative bg-white dark:bg-gradient-to-b dark:from-black dark:via-[#030303] dark:to-[#050505] text-gray-900 dark:text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-transparent dark:bg-gradient-to-b dark:from-black/70 dark:via-black/50 dark:to-black/20"></div>
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent-500/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent-400/10 rounded-full animate-bounce-subtle"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary-400/10 rounded-full animate-pulse-slow"></div>
        
        <div className="container-max section-padding relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="mb-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                  <span className="bg-gradient-to-r from-accent-600 to-accent-700 dark:from-accent-300 dark:to-accent-500 bg-clip-text text-transparent animate-pulse-slow">4 Sports</span>
                  <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 animate-fade-in text-gray-900 dark:text-white">Elite Training</span>
                </h1>
              </div>
              <div className="mb-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
                <p className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-3 leading-tight">
                  Train with <span className="bg-gradient-to-r from-accent-600 to-accent-700 dark:from-accent-300 dark:to-accent-400 bg-clip-text text-transparent">Jonathan Mensah</span>
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  Former Columbus Crew Captain • MLS Cup Winner • Ghana International • 16+ years of professional experience
                </p>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed italic animate-fade-in" style={{animationDelay: '0.6s'}}>
                "Columbus... I am ready to create something special here again. I have learnt and know what it takes to play at the highest level, and I'm ready to share that skillset with this great community."
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: '0.8s'}}>
                <Link href="/book" className="btn-primary text-lg px-8 py-4 group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Start Your Journey</span>
                </Link>
                <Link href="#about" className="btn-secondary text-lg px-8 py-4 group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Learn More</span>
                </Link>
              </div>
              <div className="mt-6 flex items-center text-accent-600 dark:text-accent-300 animate-fade-in" style={{animationDelay: '1s'}}>
                <MapPin className="h-5 w-5 mr-2 animate-bounce-subtle" />
                <span className="text-lg">Warner Woods Park, Columbus, OH</span>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="relative w-full h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src="/071822_action_038_Original.JPEG"
                  alt="Jonathan Mensah in action - Columbus Crew"
                  fill
                  className="object-cover object-center transition-all duration-700 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              {/* Floating elements around the image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-500 rounded-full animate-float opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-400 rounded-full animate-bounce-subtle opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Jonathan Section - Matches hero end color */}
      <section id="about" className="py-20 bg-white dark:bg-[#050505] relative">
        <div className="absolute inset-0 dark:bg-black/20"></div>
        <div className="container-max section-padding relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-slide-in-left">
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src="/ronaldo1.jpg"
                  alt="Professional Soccer Training"
                  fill
                  className="object-cover object-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-accent-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 dark:text-white mb-6">
                Meet Jonathan Mensah
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                After 16+ years of playing professionally all over the world - from Ghana to South Africa, 
                Italy, Spain, France, Russia, and now the USA - I've finally found a home in Columbus, Ohio, 
                where my MLS career began.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                With 70 caps for the Ghana senior national team, two senior World Cups, one junior World Cup victory, 
                and 7 African Cup of Nations tournaments, it's been nothing short of amazing by the grace of God, 
                hard work, and perseverance.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                At this latter stage of my career, with the flexibility of time, I want to shepherd and mentor 
                the next generation with mentorship programs, talent development, and character building. 
                It's only fitting to give back to the community that played a role in shaping me into who I am today.
              </p>
              <a href="mailto:4sportsfoundation@gmail.com" className="btn-primary group">
                <span className="group-hover:translate-x-1 transition-transform duration-300">Get Started Today</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement - Matches hero end color */}
      <section className="py-16 bg-white dark:bg-[#050505] relative">
        <div className="absolute inset-0 dark:bg-black/20"></div>
        <div className="container-max section-padding relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 dark:text-white mb-6">
              Mission Statement
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              To serve and help the next generation grow through soccer and other community building programs. 
              We focus on technical training, fitness training, mental training, and most importantly mentorship - 
              designed to help elevate you to be the best version of you on and off the field.
            </p>
          </div>
        </div>
      </section>

      {/* Infinite Photo Marquee */}
      <section className="py-12 bg-white dark:bg-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 dark:bg-black/20"></div>
        <div className="relative">
          <div className="flex animate-marquee-fast space-x-6">
            {/* First set of images */}
            {allPhotos.map((photo, index) => (
              <div key={`first-${index}`} className="relative flex-shrink-0 w-64 h-48 rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {allPhotos.map((photo, index) => (
              <div key={`second-${index}`} className="relative flex-shrink-0 w-64 h-48 rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section - Matches hero end color */}
      <section id="achievements" className="py-20 bg-white dark:bg-[#050505] relative">
        <div className="absolute inset-0 dark:bg-black/20"></div>
        <div className="container-max section-padding relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 dark:text-white mb-4">
              Professional Achievements
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A career spanning continents and competitions at the highest level
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/10 dark:bg-white/5 backdrop-blur-xl p-8 rounded-2xl shadow-lg hover:shadow-xl hover:bg-white/15 dark:hover:bg-white/8 transition-all duration-500 transform hover:-translate-y-2 hover:scale-102 border border-white/10 dark:border-white/10 group animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 p-4 rounded-full w-fit mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-accent-500/30">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 dark:text-white mb-3 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-300 text-center">{achievement.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in">
            <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src="/2021-09-29 COLUMBUS CREW VS CRUZ AZUL-207.JPG"
                alt="Jonathan Mensah - MLS Cup Victory"
                fill
                className="object-cover object-center transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <h3 className="font-bold text-lg">MLS Cup Victory</h3>
                <p className="text-sm">Columbus Crew Champion</p>
              </div>
            </div>
            <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src="/IMG_2770.JPEG"
                alt="Jonathan Mensah - Ghana National Team"
                fill
                className="object-cover object-[center_30%] transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <h3 className="font-bold text-lg">Ghana National Team</h3>
                <p className="text-sm">70 International Caps</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs Section - Matches hero end color */}
      <section id="programs" className="py-20 bg-white dark:bg-[#050505] relative">
        <div className="absolute inset-0 dark:bg-black/20"></div>
        <div className="container-max section-padding relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 dark:text-white mb-4">
              Elite Training Programs
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive training designed to elevate you to the highest level, on and off the field
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainingPrograms.map((program, index) => (
              <div key={program.id} className="bg-white/10 dark:bg-white/5 backdrop-blur-xl p-8 rounded-2xl shadow-lg hover:shadow-xl hover:bg-white/15 dark:hover:bg-white/8 transition-all duration-500 transform hover:-translate-y-2 hover:scale-102 border border-white/10 dark:border-white/10 group animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="mb-6">
                  <div className="bg-gradient-to-r from-primary-600/40 to-primary-700/40 backdrop-blur-lg p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/20">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-900 dark:text-white mb-3 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-300">{program.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{program.description}</p>
                  <div className="flex items-center justify-between text-accent-600 dark:text-accent-400 mb-4">
                    <div className="flex items-center bg-white/10 dark:bg-white/10 backdrop-blur-lg px-3 py-1 rounded-full border border-white/20">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="font-semibold text-sm">{program.duration}</span>
                    </div>
                    <div className="text-lg font-bold text-primary-900 dark:text-white bg-white/10 dark:bg-white/10 backdrop-blur-lg px-4 py-1 rounded-full border border-white/20">{program.price}</div>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: `${featureIndex * 0.1}s`}}>
                      <div className="w-3 h-3 bg-gradient-to-r from-accent-500/40 to-accent-600/40 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300 border border-accent-500/20"></div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={`mailto:4sportsfoundation@gmail.com?subject=Inquiry about ${program.title}&body=Hi Jonathan,%0D%0A%0D%0AI'm interested in the ${program.title} program.%0D%0A%0D%0AProgram Details:%0D%0A- ${program.description}%0D%0A- Duration: ${program.duration}%0D%0A%0D%0AKey Features:%0D%0A${program.features.map(feature => '%0D%0A- ' + feature).join('')}%0D%0A%0D%0APlease let me know the available time slots and pricing details.%0D%0A%0D%0AThank you!`} 
                  className="btn-primary w-full text-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Inquire Now</span>
                </a>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src="/IMG_0318.JPG"
                alt="4 Sports Training Session"
                fill
                className="object-cover object-center transition-all duration-700 group-hover:scale-110 group-hover:-rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src="/IMG_0395.JPG"
                alt="Elite Soccer Training"
                fill
                className="object-cover object-center transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src="/052222_LAFC_002.JPEG"
                alt="Jonathan Mensah - Professional Soccer Career"
                fill
                className="object-cover object-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section - Special gradient like hero */}
      <section className="py-20 bg-white dark:bg-gradient-to-b dark:from-black dark:via-[#030303] dark:to-[#050505] text-gray-900 dark:text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-transparent dark:bg-gradient-to-b dark:from-black/70 dark:via-black/50 dark:to-black/20"></div>
        {/* Animated background elements */}
        <div className="absolute top-10 right-10 w-24 h-24 bg-accent-500/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-primary-400/10 rounded-full animate-bounce-subtle"></div>
        
        <div className="container-max section-padding relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-900 dark:text-white">
                Ready to Pursue Excellence?
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Join the next generation of elite soccer players. There is a lot to learn here. 
                Come prepared, come improve, come grow.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 italic animate-pulse-slow">
                "Thank you Columbus and I am so excited to get this started." - Jonathan Mensah
              </p>
              <div className="space-y-4">
                <div className="flex items-center group">
                  <Mail className="h-6 w-6 text-accent-600 dark:text-accent-400 mr-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  <a href="mailto:4sportsfoundation@gmail.com" className="text-accent-700 dark:text-accent-200 hover:text-accent-800 dark:hover:text-accent-100 transition-colors duration-300 group-hover:translate-x-2">
                    4sportsfoundation@gmail.com
                  </a>
                </div>
                <div className="flex items-center group">
                  <MapPin className="h-6 w-6 text-accent-600 dark:text-accent-400 mr-3 group-hover:scale-110 group-hover:bounce transition-all duration-300" />
                  <span className="text-gray-700 dark:text-gray-300 group-hover:translate-x-2 transition-transform duration-300">Warner Woods Park, Columbus, OH</span>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src="/2021-09-29_ CREW VS CRUZ AZUL-62.JPG"
                  alt="Jonathan Mensah - Columbus Crew Success"
                  fill
                  className="object-cover object-center transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent-500 rounded-full animate-float opacity-80"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Matches hero end color */}
      <section id="contact" className="py-16 bg-white dark:bg-[#050505] relative">
        <div className="absolute inset-0 dark:bg-black/20"></div>
        <div className="container-max section-padding text-center animate-fade-in relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 dark:text-white mb-6">
            Start Your Elite Training Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Small groups and private training sessions available. 
            Contact us today to begin your transformation.
          </p>
          <a href="mailto:4sportsfoundation@gmail.com" className="btn-primary text-lg px-8 py-4 group">
            <span className="group-hover:translate-x-1 transition-transform duration-300">Send Inquiry</span>
          </a>
        </div>
      </section>
    </div>
  )
} 