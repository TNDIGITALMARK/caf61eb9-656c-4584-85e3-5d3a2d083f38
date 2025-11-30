import Link from 'next/link';
import Image from 'next/image';
import { Lightbulb, TrendingUp, BarChart3, Target, Palette, Megaphone, CheckCircle2, ArrowRight, Star, Users, Award, Zap } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">A</span>
              </div>
              <span className="font-semibold text-lg hidden sm:inline">APEX DIGITAL COLLECTIVE</span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-medium uppercase tracking-wide border-b-2 border-primary pb-1">
                HOME
              </Link>
              <Link href="#services" className="text-sm font-medium uppercase tracking-wide hover:text-primary transition-colors">
                SERVICES
              </Link>
              <Link href="#work" className="text-sm font-medium uppercase tracking-wide hover:text-primary transition-colors">
                WORK
              </Link>
              <Link href="#about" className="text-sm font-medium uppercase tracking-wide hover:text-primary transition-colors">
                ABOUT
              </Link>
              <Link href="/contact" className="text-sm font-medium uppercase tracking-wide hover:text-primary transition-colors">
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-card rounded-3xl shadow-lg p-8 md:p-16 lg:p-20">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                    <p className="text-sm font-medium text-primary uppercase tracking-wide">Digital Excellence</p>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight">
                    ELEVATE YOUR<br />BRAND TO NEW<br />HEIGHTS.
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We craft data-driven marketing strategies that transform businesses. From brand identity to digital campaigns, we deliver measurable results that matter.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium uppercase text-sm tracking-wide shadow-button hover:opacity-90 transition-opacity"
                  >
                    START YOUR PROJECT
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="#work"
                    className="inline-flex items-center justify-center gap-2 bg-background border-2 border-border text-foreground px-8 py-4 rounded-full font-medium uppercase text-sm tracking-wide hover:border-primary transition-colors"
                  >
                    VIEW OUR WORK
                  </Link>
                </div>
              </div>

              {/* Right Image */}
              <div className="flex justify-center md:justify-end">
                <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg">
                  <Image
                    src="/generated/hero-team.png"
                    alt="Professional team collaboration"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-card rounded-2xl p-6 text-center shadow">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">250+</div>
              <p className="text-sm uppercase tracking-wide text-muted-foreground">Projects Delivered</p>
            </div>
            <div className="bg-card rounded-2xl p-6 text-center shadow">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-sm uppercase tracking-wide text-muted-foreground">Client Satisfaction</p>
            </div>
            <div className="bg-card rounded-2xl p-6 text-center shadow">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-sm uppercase tracking-wide text-muted-foreground">Years Experience</p>
            </div>
            <div className="bg-card rounded-2xl p-6 text-center shadow">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-sm uppercase tracking-wide text-muted-foreground">Team Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Brand Strategy */}
            <div className="bg-card rounded-2xl p-8 shadow hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold uppercase mb-3">Brand Strategy</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Build a powerful brand identity that resonates with your audience and stands out in the market.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Brand positioning & messaging</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Market research & analysis</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Competitive differentiation</span>
                </li>
              </ul>
            </div>

            {/* Creative Design */}
            <div className="bg-card rounded-2xl p-8 shadow hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Palette className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold uppercase mb-3">Creative Design</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Stunning visual experiences that capture attention and drive engagement across all platforms.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Logo & brand identity design</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Website & app design</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Marketing collateral</span>
                </li>
              </ul>
            </div>

            {/* Digital Marketing */}
            <div className="bg-card rounded-2xl p-8 shadow hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Megaphone className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold uppercase mb-3">Digital Marketing</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Data-driven campaigns that reach your target audience and convert them into loyal customers.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Social media management</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>SEO & content marketing</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>PPC & paid advertising</span>
                </li>
              </ul>
            </div>

            {/* Web Development */}
            <div className="bg-card rounded-2xl p-8 shadow hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold uppercase mb-3">Web Development</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Fast, secure, and scalable websites built with cutting-edge technology and best practices.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Custom website development</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>E-commerce solutions</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Performance optimization</span>
                </li>
              </ul>
            </div>

            {/* Analytics */}
            <div className="bg-card rounded-2xl p-8 shadow hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold uppercase mb-3">Analytics & Insights</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Make informed decisions with comprehensive analytics and actionable insights.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Performance tracking & reporting</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>User behavior analysis</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>ROI optimization</span>
                </li>
              </ul>
            </div>

            {/* Consulting */}
            <div className="bg-card rounded-2xl p-8 shadow hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold uppercase mb-3">Strategic Consulting</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Expert guidance to navigate digital transformation and achieve sustainable growth.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Digital transformation roadmaps</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Technology stack recommendations</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Growth strategy planning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="py-16 px-6 md:px-8 bg-muted">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4">Featured Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our latest projects and success stories
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="bg-card rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-4xl font-bold text-primary mb-2">AURORA</div>
                  <p className="text-sm uppercase tracking-wide text-muted-foreground">Tech Startup Rebrand</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Complete Brand Transformation</h3>
                <p className="text-muted-foreground mb-4">
                  Helped Aurora rebrand and launch their new product, resulting in a 300% increase in user engagement.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full uppercase">Branding</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full uppercase">Web Design</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full uppercase">Marketing</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-card rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-4xl font-bold text-primary mb-2">NEXUS</div>
                  <p className="text-sm uppercase tracking-wide text-muted-foreground">E-commerce Platform</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Digital Commerce Revolution</h3>
                <p className="text-muted-foreground mb-4">
                  Built a seamless e-commerce experience that doubled Nexus&apos;s online sales within 6 months.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full uppercase">E-commerce</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full uppercase">UX Design</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full uppercase">SEO</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-card rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-4xl font-bold text-primary mb-2">LUMINA</div>
                  <p className="text-sm uppercase tracking-wide text-muted-foreground">Healthcare Innovation</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Patient-Centric Digital Experience</h3>
                <p className="text-muted-foreground mb-4">
                  Created a comprehensive digital platform improving patient satisfaction by 85%.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full uppercase">Web App</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full uppercase">Mobile</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full uppercase">Strategy</span>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-card rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-4xl font-bold text-primary mb-2">MERIDIAN</div>
                  <p className="text-sm uppercase tracking-wide text-muted-foreground">Financial Services</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Fintech Platform Launch</h3>
                <p className="text-muted-foreground mb-4">
                  Launched a secure fintech platform that onboarded 50,000 users in the first quarter.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full uppercase">Development</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full uppercase">Security</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full uppercase">Launch</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium uppercase text-sm tracking-wide shadow-button hover:opacity-90 transition-opacity"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4">Client Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don&apos;t just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-card rounded-2xl p-8 shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                &quot;Apex Digital Collective transformed our brand completely. Their strategic approach and creative excellence helped us stand out in a crowded market.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">SM</span>
                </div>
                <div>
                  <div className="font-bold">Sarah Mitchell</div>
                  <div className="text-sm text-muted-foreground">CEO, Aurora Tech</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-card rounded-2xl p-8 shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                &quot;Working with this team has been incredible. They delivered beyond our expectations and the results speak for themselves - sales doubled!&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">JC</span>
                </div>
                <div>
                  <div className="font-bold">James Chen</div>
                  <div className="text-sm text-muted-foreground">Founder, Nexus Commerce</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-card rounded-2xl p-8 shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                &quot;Professional, creative, and results-driven. They took the time to understand our needs and delivered a solution that exceeded all goals.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">EP</span>
                </div>
                <div>
                  <div className="font-bold">Emily Parker</div>
                  <div className="text-sm text-muted-foreground">Director, Lumina Health</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-primary rounded-3xl p-12 md:p-16 text-center shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground uppercase mb-4">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate to create something extraordinary. Schedule a free consultation to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-card text-foreground px-8 py-4 rounded-full font-medium uppercase text-sm tracking-wide shadow-lg hover:shadow-xl transition-shadow"
              >
                GET STARTED TODAY
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-full font-medium uppercase text-sm tracking-wide hover:bg-primary-foreground/10 transition-colors"
              >
                EXPLORE SERVICES
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-12 px-6 md:px-8 bg-muted">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-wide text-muted-foreground font-medium">Trusted by Leading Brands</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
            <div className="text-lg font-bold tracking-tight text-muted-foreground/60 hover:text-muted-foreground transition-colors">AURORA</div>
            <div className="text-lg font-bold tracking-tight text-muted-foreground/60 hover:text-muted-foreground transition-colors">NEXUS</div>
            <div className="text-lg font-bold tracking-tight text-muted-foreground/60 hover:text-muted-foreground transition-colors">LUMINA</div>
            <div className="text-lg font-bold tracking-tight text-muted-foreground/60 hover:text-muted-foreground transition-colors">MERIDIAN</div>
            <div className="text-lg font-bold tracking-tight text-muted-foreground/60 hover:text-muted-foreground transition-colors">HORIZON</div>
            <div className="text-lg font-bold tracking-tight text-muted-foreground/60 hover:text-muted-foreground transition-colors">CATALYST</div>
            <div className="text-lg font-bold tracking-tight text-muted-foreground/60 hover:text-muted-foreground transition-colors">ELEVATE</div>
            <div className="text-lg font-bold tracking-tight text-muted-foreground/60 hover:text-muted-foreground transition-colors">ZENITH</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">A</span>
                </div>
                <span className="font-semibold text-lg">APEX DIGITAL COLLECTIVE</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                We are a full-service digital marketing agency dedicated to helping businesses grow through innovative strategies and creative excellence.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Facebook"
                >
                  <span className="text-primary-foreground text-xs font-bold">f</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <span className="text-primary-foreground text-xs font-bold">in</span>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Twitter"
                >
                  <span className="text-primary-foreground text-xs font-bold">𝕏</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Instagram"
                >
                  <span className="text-primary-foreground text-xs font-bold">ig</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold uppercase text-sm mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold uppercase text-sm mb-4">Get in Touch</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>info@apexdigital.com</li>
                <li>+1 (555) 123-4567</li>
                <li className="pt-2">
                  123 Digital Avenue<br />
                  San Francisco, CA 94102
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">
                © 2024 APEX DIGITAL COLLECTIVE. All rights reserved.
              </p>

              <div className="flex items-center gap-6">
                <Link href="/privacy" className="text-xs uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-xs uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
