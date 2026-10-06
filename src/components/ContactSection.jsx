import React, { useState } from 'react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { FAQS } from '../data/k9Data';
import { Phone, MessageSquare, Mail, MapPin, Clock, Send, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';

export default function ContactSection({ selectedServicePreset, onClearServicePreset }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceInterest: selectedServicePreset || 'Puppy Training & Basic Obedience',
    message: '',
    preferredContact: 'Phone'
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  React.useEffect(() => {
    if (selectedServicePreset) {
      setFormData((prev) => ({ ...prev, serviceInterest: selectedServicePreset }));
    }
  }, [selectedServicePreset]);

  const hasPhone = Boolean(BUSINESS_CONFIG.phone && BUSINESS_CONFIG.phone.trim());
  const hasWhatsapp = Boolean(BUSINESS_CONFIG.whatsappRaw && BUSINESS_CONFIG.whatsappRaw.trim());

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact phone number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your inquiry';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50 relative border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-widest">
            <Mail className="w-3.5 h-3.5 text-orange-600" />
            <span>Direct Client Consultation</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Connect With <span className="text-orange-600">Trident K9 Team</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Have questions about puppy obedience or need K9 security deployment for your industrial site? Reach out directly via form, phone, or WhatsApp.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Triggers & Location */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Action Triggers Box */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Direct Communication Desk</h3>
              
              {/* Phone Button */}
              {hasPhone && (
                <a
                  href={`tel:${BUSINESS_CONFIG.phone.replace(/\s+/g, '')}`}
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-orange-400 hover:bg-orange-50/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Direct Call Desk</div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                        {BUSINESS_CONFIG.phone}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">Tap to Call</span>
                </a>
              )}

              {/* WhatsApp Button */}
              {hasWhatsapp && (
                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=Hi%20Trident%20K9%20team,%20I%20would%20like%20to%20inquire%20about%20dog%20training%20and%20K9%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-emerald-50 border border-emerald-200 hover:border-emerald-500 hover:bg-emerald-100/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-emerald-800 font-medium">WhatsApp Support</div>
                      <div className="text-sm font-bold text-emerald-950 group-hover:text-emerald-700 transition-colors">
                        Instant Live Chat
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Open Chat</span>
                </a>
              )}

              {/* Email */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Official Email</div>
                  <div className="text-sm font-bold text-slate-900">
                    {BUSINESS_CONFIG.email}
                  </div>
                </div>
              </div>

              {/* Operational Hours */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Facility & Ops Schedule</div>
                  <div className="text-xs text-slate-700 font-semibold mt-0.5 leading-relaxed">
                    {BUSINESS_CONFIG.hours}
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Facility Headquarters</div>
                  <div className="text-xs text-slate-700 font-semibold mt-0.5 leading-relaxed">
                    {BUSINESS_CONFIG.address}
                  </div>
                </div>
              </div>

            </div>

            {/* Frequently Asked Questions */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Common Questions</h3>
              {FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-white border border-slate-200 overflow-hidden shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 text-sm font-bold text-slate-800 hover:text-orange-600 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {openFaqIndex === idx ? (
                      <ChevronUp className="w-4 h-4 text-orange-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {openFaqIndex === idx && (
                    <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Service Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-md relative">
              
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Send Service Inquiry</h3>
              <p className="text-slate-600 text-xs sm:text-sm mb-6">
                Fill in your details below and our team will get back to you promptly.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-950">Thank You for Reaching Out!</h4>
                  <p className="text-sm text-emerald-800 max-w-md mx-auto">
                    Your inquiry has been successfully received. A senior trainer or security coordinator from Trident K9 will contact you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        serviceInterest: 'Puppy Training & Basic Obedience',
                        message: '',
                        preferredContact: 'Phone'
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-700 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                      Full Name <span className="text-orange-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Vikram Sharma"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                        errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-orange-500'
                      } text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-1 transition-colors`}
                    />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                        Phone Number <span className="text-orange-600">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                          errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-orange-500'
                        } text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-1 transition-colors`}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                        Email Address <span className="text-orange-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="vikram@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                          errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-orange-500'
                        } text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-1 transition-colors`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Service Interest */}
                  <div>
                    <label htmlFor="serviceInterest" className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                      Service Interest
                    </label>
                    <select
                      id="serviceInterest"
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                    >
                      <option value="Puppy Training & Basic Obedience">Puppy Training & Basic Obedience</option>
                      <option value="Advanced Off-Leash Obedience">Advanced Off-Leash Obedience</option>
                      <option value="Dog Obedience Demonstrations">Dog Obedience Demonstrations</option>
                      <option value="Dog Squads for Security">Dog Squads for Security</option>
                      <option value="Plant Guarding & Industrial Premises">Plant Guarding & Industrial Premises</option>
                      <option value="Perimeter Patrolling">Perimeter Patrolling</option>
                      <option value="Tactical Scent & Area Tracking">Tactical Scent & Area Tracking</option>
                      <option value="Featured Breeds Inquiry">Featured Breeds Inquiry</option>
                      <option value="General Consultation">General Consultation</option>
                    </select>
                  </div>

                  {/* Requirement Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                      Requirement Details <span className="text-orange-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your dog (age/breed) or your property security needs..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                        errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-orange-500'
                      } text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-1 transition-colors`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold uppercase tracking-wider text-sm shadow-md hover:shadow-lg hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>

                  {Object.keys(errors).length > 0 && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs text-center font-medium">
                      Please correct the highlighted fields before submitting.
                    </div>
                  )}

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
