import Link from 'next/link';
import Image from 'next/image';
import { Lightbulb, TrendingUp, BarChart3 } from 'lucide-react';

export default function HomePage() {
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
              <Link href="/" className="text-sm font-medium uppercase tracking-wide border-b-2 border-foreground pb-1">
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
              <Link href="/contact" className="text-sm font-medium uppercase tracking-wide hover:text-muted-foreground transition-colors">
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8">
        <div className="container mx-auto">
          <div className="bg-card rounded-3xl shadow-lg p-16 md:p-20">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-6xl font-bold uppercase leading-tight">
                    ELEVATE YOUR BRAND.
                  </h1>
                  <p className="text-xl uppercase tracking-wide text-muted-foreground">
                    STRATEGY. DESIGN. GROWTH.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium uppercase text-sm tracking-wide shadow-button hover:opacity-90 transition-opacity"
                >
                  LET&apos;S START A PROJECT
                </Link>
              </div>

              {/* Right Image */}
              <div className="flex justify-center md:justify-end">
                <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-lg">
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

            {/* Services Icons */}
            <div className="grid grid-cols-3 gap-8 mt-20 pt-16 border-t border-border">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Lightbulb className="w-12 h-12 text-muted-foreground" strokeWidth={1.5} />
                </div>
                <p className="text-xs uppercase tracking-wide font-medium">STRATEGY</p>
              </div>

              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <TrendingUp className="w-12 h-12 text-muted-foreground" strokeWidth={1.5} />
                </div>
                <p className="text-xs uppercase tracking-wide font-medium">DESIGN</p>
              </div>

              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <BarChart3 className="w-12 h-12 text-muted-foreground" strokeWidth={1.5} />
                </div>
                <p className="text-xs uppercase tracking-wide font-medium">ANALYTICS</p>
              </div>
            </div>

            {/* Client Logos */}
            <div className="mt-16 pt-12 border-t border-border">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-40">
                <div className="text-xl font-bold tracking-tight">AURORA</div>
                <div className="text-xl font-bold tracking-tight">NEXUS</div>
                <div className="text-xl font-bold tracking-tight">LUMINA</div>
                <div className="text-xl font-bold tracking-tight">MERIDIAN</div>
                <div className="text-xl font-bold tracking-tight">HORIZON</div>
                <div className="text-xl font-bold tracking-tight">CATALYST</div>
                <div className="text-xl font-bold tracking-tight">ELEVATE</div>
                <div className="text-xl font-bold tracking-tight">ZENITH</div>
              </div>
            </div>
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
