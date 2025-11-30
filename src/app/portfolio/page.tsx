import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const portfolioProjects = [
  {
    id: 1,
    title: 'Luxury Skincare Rebrand',
    category: 'Brand Strategy & Identity',
    metric: '400% Conversion Increase',
    image: '/generated/portfolio-skincare.png',
    description: 'Complete brand transformation for premium beauty market',
  },
  {
    id: 2,
    title: 'Tech Startup Launch',
    category: 'Website Design & Development',
    metric: '$2M Funding Raised',
    image: '/generated/portfolio-tech.png',
    description: 'Digital presence that attracted Series A investors',
  },
  {
    id: 3,
    title: 'Restaurant Chain Transformation',
    category: 'Digital Marketing Campaign',
    metric: '30 Locations',
    image: '/generated/portfolio-restaurant.png',
    description: 'Multi-location digital marketing strategy',
  },
  {
    id: 4,
    title: 'Fitness App Launch',
    category: 'Conversion Optimization',
    metric: '100K Downloads in Month 1',
    image: '/generated/portfolio-fitness.png',
    description: 'User acquisition campaign with viral growth',
  },
];

export default function PortfolioPage() {
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
              <Link href="/portfolio" className="text-sm font-medium uppercase tracking-wide border-b-2 border-foreground pb-1">
                SERVICES
              </Link>
              <Link href="/portfolio" className="text-sm font-medium uppercase tracking-wide hover:text-muted-foreground transition-colors">
                ABOUT
              </Link>
              <Link href="/portfolio" className="text-sm font-medium uppercase tracking-wide hover:text-muted-foreground transition-colors">
                CLIENTS
              </Link>
              <Link href="/contact" className="text-sm font-medium uppercase tracking-wide hover:text-muted-foreground transition-colors">
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
            WE MAKE BRANDS UNFORGETTABLE
          </h1>
          <p className="text-xl text-muted-foreground uppercase tracking-wide">
            MINIMAL DESIGN. MAXIMUM IMPACT. FOR COMPANIES READY TO LEAD.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-8 text-center">
                    <p className="text-primary-foreground text-sm uppercase tracking-wide mb-2">
                      {project.category}
                    </p>
                    <p className="text-primary-foreground text-lg font-semibold mb-4">
                      {project.description}
                    </p>
                    <ArrowRight className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold uppercase">{project.title}</h3>
                  <p className="text-primary font-semibold uppercase text-sm tracking-wide">
                    {project.metric}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-8">
        <div className="container mx-auto">
          <div className="bg-card rounded-3xl shadow-lg p-16 md:p-20">
            <h2 className="text-4xl font-bold uppercase text-center mb-16">
              OUR SERVICES
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold uppercase">Brand Strategy & Identity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We craft distinctive brand identities that resonate with your target audience and stand out in crowded markets.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold uppercase">Website Design & Development</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Beautiful, high-converting websites built with modern technology and user-first design principles.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold uppercase">Digital Marketing Campaigns</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Data-driven marketing strategies that drive measurable growth and sustainable customer acquisition.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold uppercase">Conversion Optimization</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Systematic optimization of your digital presence to maximize ROI and turn visitors into customers.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Link
                href="/contact"
                className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium uppercase text-sm tracking-wide shadow-button hover:opacity-90 transition-opacity"
              >
                START YOUR PROJECT
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 px-8">
        <div className="container mx-auto max-w-3xl text-center">
          <blockquote className="text-2xl md:text-3xl font-semibold leading-relaxed mb-8">
            &ldquo;Working with Apex transformed our entire business. Their strategic approach and flawless execution exceeded every expectation.&rdquo;
          </blockquote>
          <p className="text-muted-foreground uppercase tracking-wide text-sm">
            SARAH CHEN, CEO — MINDFUL BEAUTY
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-6 px-8 mt-12">
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
