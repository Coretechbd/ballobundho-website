import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Users, Heart, TrendingUp, Shield, Mail, Phone, MapPin, LogIn, UserPlus, ArrowRight } from 'lucide-react';

export default function BallobundhoWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [selectedLanguage, setSelectedLanguage] = useState('bn');
  const [memberCount, setMemberCount] = useState(1247);
  const [totalSaved, setTotalSaved] = useState(15234000);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    // Animate counters
    const interval = setInterval(() => {
      setMemberCount(prev => prev < 1247 ? prev + Math.floor(1247/50) : 1247);
      setTotalSaved(prev => prev < 15234000 ? prev + Math.floor(15234000/50) : 15234000);
    }, 50);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const t = {
    bn: {
      org_name: 'বল্লভুন্ধু একতা সংঘ',
      tagline: 'একসাথে আমরা শক্তিশালী, একসাথে আমরা সমৃদ্ধ',
      nav_home: 'হোম',
      nav_about: 'সম্পর্কে',
      nav_members: 'সদস্যরা',
      nav_join: 'যোগ দিন',
      nav_contact: 'যোগাযোগ',
      hero_title: 'সম্প্রদায়ের শক্তিতে বিশ্বাস করুন',
      hero_subtitle: 'একটি সম্প্রদায় যেখানে প্রতিটি সদস্য গুরুত্বপূর্ণ, প্রতিটি অবদান মূল্যবান',
      hero_cta: 'আজই যোগ দিন',
      hero_learn: 'আরও জানুন',
      mission_title: 'আমাদের লক্ষ্য',
      mission_desc: 'বল্লভুন্ধু একতা সংঘ একটি সম্প্রদায় ভিত্তিক সংস্থা যা সদস্যদের একসাথে সঞ্চয়, বিনিয়োগ এবং পারস্পরিক সহায়তার মাধ্যমে আর্থিক সমৃদ্ধি অর্জনে সহায়তা করে।',
      values_unity: 'একতা',
      values_unity_desc: 'আমরা একসাথে শক্তিশালী বিশ্বাস করি এবং পারস্পরিক সমর্থনে প্রতিশ্রুতিবদ্ধ',
      values_trust: 'বিশ্বাস',
      values_trust_desc: 'স্বচ্ছতা এবং সততা আমাদের প্রতিটি কাজের ভিত্তি',
      values_growth: 'বৃদ্ধি',
      values_growth_desc: 'আমরা ব্যক্তিগত এবং সম্পদের অবিরাম উন্নয়নে বিশ্বাসী',
      stats_members: 'সক্রিয় সদস্য',
      stats_saved: 'মোট সঞ্চয় (টাকা)',
      stats_months: 'মাসের পূর্বাভাস',
      features_deposit: 'নিয়মিত সঞ্চয়',
      features_deposit_desc: 'প্রতি মাসে নিরাপদে ১০০০ টাকা সঞ্চয় করুন',
      features_support: 'পারস্পরিক সহায়তা',
      features_support_desc: 'সদস্যদের মধ্যে জরুরি আর্থিক সহায়তা',
      features_security: 'নিরাপত্তা',
      features_security_desc: 'সম্পূর্ণ নিরাপদ এবং যাচাইকৃত প্রক্রিয়া',
      features_community: 'সম্প্রদায়',
      features_community_desc: 'সমমনা মানুষদের সাথে সংযুক্ত হন',
      join_title: 'সদস্য হওয়ার প্রক্রিয়া',
      join_step1: 'নিবন্ধন',
      join_step1_desc: 'আপনার মৌলিক তথ্য প্রদান করুন',
      join_step2: 'যাচাইকরণ',
      join_step2_desc: 'আমাদের দল আপনার পরিচয় যাচাই করবে',
      join_step3: 'অনুমোদন',
      join_step3_desc: 'সফল সদস্যপদ নিশ্চিতকরণ',
      join_step4: 'শুরু করুন',
      join_step4_desc: 'সঞ্চয় এবং বৃদ্ধি শুরু করুন',
      cta_button: 'এখনই যোগ দিন',
      contact_title: 'যোগাযোগ করুন',
      contact_desc: 'আমাদের সাথে সংযুক্ত হন এবং আপনার প্রশ্নের উত্তর পান',
      contact_email: 'ইমেইল',
      contact_phone: 'ফোন',
      contact_address: 'ঠিকানা',
      footer_about: 'সম্পর্কে',
      footer_established: 'প্রতিষ্ঠিত ২০২৬',
    },
    en: {
      org_name: 'BALLOBUNDHO EKOTA SANGHO',
      tagline: 'Together We Grow, Together We Prosper',
      nav_home: 'Home',
      nav_about: 'About',
      nav_members: 'Members',
      nav_join: 'Join',
      nav_contact: 'Contact',
      hero_title: 'Believe in the Power of Community',
      hero_subtitle: 'A community where every member matters, and every contribution counts',
      hero_cta: 'Join Today',
      hero_learn: 'Learn More',
      mission_title: 'Our Mission',
      mission_desc: 'BALLOBUNDHO EKOTA SANGHO is a community-based organization that helps members achieve financial prosperity through collective savings, investments, and mutual support.',
      values_unity: 'Unity',
      values_unity_desc: 'We believe in strength through togetherness and mutual support',
      values_trust: 'Trust',
      values_trust_desc: 'Transparency and integrity form the foundation of everything we do',
      values_growth: 'Growth',
      values_growth_desc: 'We believe in continuous personal and financial development',
      stats_members: 'Active Members',
      stats_saved: 'Total Savings (BDT)',
      stats_months: 'Months Strong',
      features_deposit: 'Regular Savings',
      features_deposit_desc: 'Safely save 1,000 BDT every month',
      features_support: 'Mutual Aid',
      features_support_desc: 'Emergency financial support among members',
      features_security: 'Security',
      features_security_desc: 'Complete safe and verified process',
      features_community: 'Community',
      features_community_desc: 'Connect with like-minded individuals',
      join_title: 'How to Join',
      join_step1: 'Register',
      join_step1_desc: 'Provide your basic information',
      join_step2: 'Verification',
      join_step2_desc: 'Our team verifies your identity',
      join_step3: 'Approval',
      join_step3_desc: 'Confirm successful membership',
      join_step4: 'Get Started',
      join_step4_desc: 'Begin saving and growing',
      cta_button: 'Join Now',
      contact_title: 'Get in Touch',
      contact_desc: 'Connect with us and get answers to your questions',
      contact_email: 'Email',
      contact_phone: 'Phone',
      contact_address: 'Address',
      footer_about: 'About',
      footer_established: 'Established 2026',
    }
  };

  const content = t[selectedLanguage];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-blue-50 overflow-hidden">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer hover:opacity-90 transition">
            <img 
              src="/logo.png" 
              alt={content.org_name}
              className="w-14 h-14 rounded-full object-cover shadow-md border-2 border-white"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-blue-900 leading-tight">{content.org_name}</h1>
              <p className="text-xs text-blue-600">{content.tagline}</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {['home', 'about', 'members', 'join', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className="text-gray-700 hover:text-blue-600 font-medium transition capitalize"
              >
                {content[`nav_${item}`]}
              </button>
            ))}
          </div>

          {/* Language & Auth */}
          <div className="flex items-center gap-4">
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="text-sm bg-transparent border border-blue-200 rounded px-3 py-2 text-gray-700 hover:border-blue-400 transition"
            >
              <option value="bn">বাংলা</option>
              <option value="en">English</option>
            </select>
            
            <button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition font-medium">
              <LogIn size={18} /> {selectedLanguage === 'bn' ? 'প্রবেশ' : 'Sign In'}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-3 animate-in fade-in">
            {['home', 'about', 'members', 'join', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveTab(item);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium transition py-2 capitalize"
              >
                {content[`nav_${item}`]}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200 rounded-full opacity-10 blur-3xl"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full">
                <span className="text-blue-700 font-semibold text-sm">{selectedLanguage === 'bn' ? '🌟 এক্সক্লুসিভ কমিউনিটি' : '🌟 Exclusive Community'}</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {content.hero_title}
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {content.hero_subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition transform flex items-center justify-center gap-2">
                  {content.hero_cta}
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
                </button>
                <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
                  {content.hero_learn}
                </button>
              </div>

              {/* Stats Preview */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-blue-600">{memberCount}</p>
                  <p className="text-sm text-gray-600">{content.stats_members}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-blue-600">৳{(totalSaved/1000000).toFixed(1)}M</p>
                  <p className="text-sm text-gray-600">{content.stats_saved}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-blue-600">10+</p>
                  <p className="text-sm text-gray-600">{content.stats_months}</p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-96 lg:h-full animate-in fade-in slide-in-from-right duration-700 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-amber-500/10 rounded-2xl backdrop-blur-sm border border-white/60 shadow-2xl"></div>
              <div className="relative z-10 text-center space-y-6 p-8">
                <img 
                  src="/logo.png" 
                  alt={content.org_name}
                  className="w-48 h-48 mx-auto rounded-full shadow-2xl border-4 border-white drop-shadow-lg hover:scale-105 transition transform duration-300"
                />
                <h3 className="text-2xl font-bold text-gray-900">{selectedLanguage === 'bn' ? 'একসাথে আমরা' : 'Together We'}</h3>
                <p className="text-gray-700 font-medium">{selectedLanguage === 'bn' ? 'শক্তিশালী, সমৃদ্ধ, নিরাপদ' : 'Strong, Prosperous, Secure'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">{content.mission_title}</h2>
          <p className="text-lg text-blue-100 leading-relaxed">{content.mission_desc}</p>
          
          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8 pt-12">
            {[
              { title: content.values_unity, desc: content.values_unity_desc, icon: '👥' },
              { title: content.values_trust, desc: content.values_trust_desc, icon: '🔐' },
              { title: content.values_growth, desc: content.values_growth_desc, icon: '📈' }
            ].map((value, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-blue-100">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">{selectedLanguage === 'bn' ? 'আমাদের সুবিধা' : 'Our Features'}</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: content.features_deposit, desc: content.features_deposit_desc, icon: <Heart className="w-8 h-8" /> },
              { title: content.features_support, desc: content.features_support_desc, icon: <Users className="w-8 h-8" /> },
              { title: content.features_security, desc: content.features_security_desc, icon: <Shield className="w-8 h-8" /> },
              { title: content.features_community, desc: content.features_community_desc, icon: <TrendingUp className="w-8 h-8" /> }
            ].map((feature, i) => (
              <div
                key={i}
                className="group p-8 border-2 border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-lg transition duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white mb-4 group-hover:shadow-lg transition">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">{content.join_title}</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: content.join_step1, desc: content.join_step1_desc },
              { step: '02', title: content.join_step2, desc: content.join_step2_desc },
              { step: '03', title: content.join_step3, desc: content.join_step3_desc },
              { step: '04', title: content.join_step4, desc: content.join_step4_desc }
            ].map((item, i) => (
              <div key={i} className="relative">
                {i < 3 && <div className="hidden md:block absolute top-12 left-full w-6 h-1 bg-gradient-to-r from-blue-600 to-transparent"></div>}
                <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
                  <div className="w-12 h-12 mx-auto bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-12">
            <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-bold text-lg hover:shadow-lg hover:scale-105 transition transform flex items-center justify-center gap-2 mx-auto">
              <UserPlus size={22} /> {content.cta_button}
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">{content.contact_title}</h2>
          <p className="text-center text-gray-600 mb-12">{content.contact_desc}</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group text-center p-8 rounded-xl hover:bg-blue-50 transition">
              <div className="w-14 h-14 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition">
                <Mail size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{content.contact_email}</h3>
              <p className="text-gray-600">admin@ballobundho.org</p>
            </div>
            
            <div className="group text-center p-8 rounded-xl hover:bg-blue-50 transition">
              <div className="w-14 h-14 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition">
                <Phone size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{content.contact_phone}</h3>
              <p className="text-gray-600">+880 1XXX-XXXXXX</p>
            </div>
            
            <div className="group text-center p-8 rounded-xl hover:bg-blue-50 transition">
              <div className="w-14 h-14 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition">
                <MapPin size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{content.contact_address}</h3>
              <p className="text-gray-600">Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img 
                  src="/logo.png" 
                  alt={content.org_name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-400"
                />
                <div>
                  <h3 className="text-lg font-bold">{content.org_name}</h3>
                  <p className="text-gray-400 text-sm">{content.tagline}</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">{selectedLanguage === 'bn' ? 'দ্রুত লিঙ্ক' : 'Quick Links'}</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Home</a></li>
                <li><a href="#" className="hover:text-white transition">{content.footer_about}</a></li>
                <li><a href="#" className="hover:text-white transition">Members</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">{selectedLanguage === 'bn' ? 'অনুসরণ করুন' : 'Follow Us'}</h3>
              <div className="flex gap-4">
                {['f', 'tw', 'in', 'yt'].map((social, i) => (
                  <a key={i} href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                    {social === 'f' && '📘'}
                    {social === 'tw' && '𝕏'}
                    {social === 'in' && '📷'}
                    {social === 'yt' && '▶️'}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>{content.footer_about} © 2026 {content.org_name}. {selectedLanguage === 'bn' ? 'সর্বাধিকার সংরক্ষিত।' : 'All rights reserved.'}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
