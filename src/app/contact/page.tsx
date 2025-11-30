'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    projectType: '',
    timeline: '',
    budget: '50000',
    contactMethod: 'email',
    email: '',
    phone: '',
    message: '',
  });

  const [step, setStep] = useState(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll be in touch soon.');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card shadow-sm">
        <div className="container mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center">
                <span className="text-card font-bold text-lg">A</span>
              </div>
              <span className="font-semibold text-lg hidden sm:inline">APEX DIGITAL COLLECTIVE</span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-medium uppercase tracking-wide hover:text-muted-foreground transition-colors">
                HOME
              </Link>
              <Link href="/portfolio" className="text-sm font-medium uppercase tracking-wide hover:text-muted-foreground transition-colors">
                SERVICES
              </Link>
              <Link href="/portfolio" className="text-sm font-medium uppercase tracking-wide hover:text-muted-foreground transition-colors">
                ABOUT
              </Link>
              <Link href="/portfolio" className="text-sm font-medium uppercase tracking-wide hover:text-muted-foreground transition-colors">
                CLIENTS
              </Link>
              <Link href="/contact" className="text-sm font-medium uppercase tracking-wide border-b-2 border-foreground pb-1">
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold uppercase mb-6">
            START YOUR PROJECT
          </h1>
          <p className="text-xl text-muted-foreground uppercase tracking-wide">
            LET&apos;S CREATE SOMETHING EXTRAORDINARY TOGETHER
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 px-8 pb-20">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-card rounded-3xl shadow-lg p-12 md:p-16">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Project Type */}
              {step >= 1 && (
                <div className="space-y-4">
                  <label className="block text-sm font-semibold uppercase tracking-wide">
                    WHAT TYPE OF PROJECT ARE YOU PLANNING?
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background focus:border-primary focus:outline-none transition-colors"
                    required
                  >
                    <option value="">Select project type...</option>
                    <option value="brand-strategy">Brand Strategy & Identity</option>
                    <option value="website">Website Design & Development</option>
                    <option value="marketing">Digital Marketing Campaign</option>
                    <option value="optimization">Conversion Optimization</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              )}

              {/* Step 2: Company & Timeline */}
              {step >= 1 && formData.projectType && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="space-y-4">
                    <label className="block text-sm font-semibold uppercase tracking-wide">
                      COMPANY NAME
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                      className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background focus:border-primary focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="block text-sm font-semibold uppercase tracking-wide">
                      TIMELINE
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background focus:border-primary focus:outline-none transition-colors"
                      required
                    >
                      <option value="">Select timeline...</option>
                      <option value="asap">ASAP</option>
                      <option value="1-3months">1-3 Months</option>
                      <option value="3-6months">3-6 Months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3: Budget */}
              {step >= 1 && formData.timeline && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <label className="block text-sm font-semibold uppercase tracking-wide">
                    BUDGET RANGE
                  </label>
                  <div className="space-y-2">
                    <input
                      type="range"
                      name="budget"
                      min="10000"
                      max="200000"
                      step="10000"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <p className="text-center text-lg font-semibold text-primary">
                      ${parseInt(formData.budget).toLocaleString()}+
                    </p>
                  </div>
                </div>
              )}

              {/* Step 4: Contact Info */}
              {step >= 1 && formData.budget && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="space-y-4">
                    <label className="block text-sm font-semibold uppercase tracking-wide">
                      PREFERRED CONTACT METHOD
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="email"
                          checked={formData.contactMethod === 'email'}
                          onChange={handleInputChange}
                          className="w-4 h-4 accent-primary"
                        />
                        <span className="text-sm uppercase tracking-wide">EMAIL</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="phone"
                          checked={formData.contactMethod === 'phone'}
                          onChange={handleInputChange}
                          className="w-4 h-4 accent-primary"
                        />
                        <span className="text-sm uppercase tracking-wide">PHONE</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="both"
                          checked={formData.contactMethod === 'both'}
                          onChange={handleInputChange}
                          className="w-4 h-4 accent-primary"
                        />
                        <span className="text-sm uppercase tracking-wide">BOTH</span>
                      </label>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <label className="block text-sm font-semibold uppercase tracking-wide">
                        EMAIL
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background focus:border-primary focus:outline-none transition-colors"
                        required={formData.contactMethod !== 'phone'}
                      />
                    </div>

                    <div className="space-y-4">
                      <label className="block text-sm font-semibold uppercase tracking-wide">
                        PHONE (OPTIONAL)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                        className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="block text-sm font-semibold uppercase tracking-wide">
                      TELL US ABOUT YOUR PROJECT (OPTIONAL)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Share your vision, goals, and any specific requirements..."
                      className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background focus:border-primary focus:outline-none transition-colors resize-none"
                    />
                  </div>
                </div>
              )}

              {/* Submit Button */}
              {formData.email && (
                <div className="pt-6 animate-in fade-in duration-300">
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium uppercase text-sm tracking-wide shadow-button hover:opacity-90 transition-opacity"
                  >
                    SUBMIT PROJECT INQUIRY
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-6 px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © 2024 MARKETING AGENCY
            </p>

            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-xs uppercase tracking-wide hover:text-foreground transition-colors">
                PRIVACY POLICY
              </Link>
              <Link href="/terms" className="text-xs uppercase tracking-wide hover:text-foreground transition-colors">
                TERMS & SERVICE
              </Link>

              <div className="flex items-center gap-3 ml-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <span className="text-primary-foreground text-xs font-bold">f</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <span className="text-primary-foreground text-xs font-bold">in</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
