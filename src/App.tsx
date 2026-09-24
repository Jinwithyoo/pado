/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Gamepad2, 
  Globe, 
  ArrowUpRight, 
  Code2, 
  Layers, 
  Zap,
  Mail,
  MapPin,
  Phone,
  Instagram,
  Github,
  Twitter
} from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 py-8 flex justify-between items-center text-white">
    <div className="text-2xl font-display font-bold tracking-tighter">PADO</div>
    <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
      <a href="#services" className="hover:text-brand-accent transition-colors">Services</a>
      <a href="#projects" className="hover:text-brand-accent transition-colors">Projects</a>
      <a href="#about" className="hover:text-brand-accent transition-colors">About</a>
      <a href="#contact" className="hover:text-brand-accent transition-colors">Contact</a>
    </div>
    <a href="#contact" className="border border-white/30 rounded-full px-6 py-2 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all">
      Let's Talk
    </a>
  </nav>
);

const Hero = () => (
  <section className="relative h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden bg-brand-black text-brand-white">
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="z-10"
    >
      <h1 className="text-[15vw] md:text-[12vw] leading-[0.85] font-display font-bold tracking-tighter uppercase">
        Digital<br />
        <span className="text-brand-accent">Surfing</span>
      </h1>
      <p className="mt-8 max-w-md text-lg text-white/60 font-light leading-relaxed">
        Pado is a creative studio crafting immersive gaming experiences and high-performance web solutions. We ride the wave of innovation.
      </p>
    </motion.div>
    
    <div className="absolute bottom-12 right-12 hidden lg:block">
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="w-32 h-32 border border-white/20 rounded-full flex items-center justify-center relative"
      >
        <div className="absolute inset-0 flex items-center justify-center text-[8px] uppercase tracking-[0.3em] font-bold">
          <span className="rotate-0 absolute -top-4">Games</span>
          <span className="rotate-90 absolute -right-4">Web</span>
          <span className="rotate-180 absolute -bottom-4">Pado</span>
          <span className="rotate-270 absolute -left-4">Studio</span>
        </div>
        <ArrowUpRight className="w-8 h-8 text-brand-accent" />
      </motion.div>
    </div>

    <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
      <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-brand-accent)_0%,_transparent_70%)] blur-3xl" />
    </div>
  </section>
);

const Marquee = () => (
  <div className="bg-brand-accent py-4 border-y border-brand-black marquee-container">
    <div className="marquee-content flex gap-12 items-center">
      {[...Array(10)].map((_, i) => (
        <span key={i} className="text-brand-black font-display font-bold uppercase tracking-tighter text-2xl flex items-center gap-4">
          Game Development <Zap className="w-6 h-6" /> Web Services <Layers className="w-6 h-6" /> UI/UX Design <Globe className="w-6 h-6" />
        </span>
      ))}
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "Game Development",
      description: "From concept to launch, we build immersive worlds and addictive mechanics for mobile, PC, and console.",
      icon: <Gamepad2 className="w-12 h-12" />,
      tags: ["Unity", "Unreal Engine", "Multiplayer", "Cross-platform"]
    },
    {
      title: "Web Services",
      description: "Scalable, high-performance web applications tailored to your business needs with modern tech stacks.",
      icon: <Globe className="w-12 h-12" />,
      tags: ["React", "Next.js", "Node.js", "Cloud Native"]
    },
    {
      title: "Digital Strategy",
      description: "We help brands navigate the digital landscape with data-driven insights and creative execution.",
      icon: <Code2 className="w-12 h-12" />,
      tags: ["SEO", "Analytics", "Growth", "Consulting"]
    }
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-brand-white">
      <div className="mb-16">
        <span className="text-xs uppercase tracking-widest font-bold text-brand-black/40">What we do</span>
        <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mt-4">Expertise</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-black/10 border border-brand-black/10">
        {services.map((service, i) => (
          <motion.div 
            key={i}
            whileHover={{ backgroundColor: "rgba(0, 255, 102, 0.05)" }}
            className="bg-brand-white p-12 flex flex-col h-full transition-colors"
          >
            <div className="mb-8 text-brand-black">{service.icon}</div>
            <h3 className="text-3xl font-display font-bold mb-4">{service.title}</h3>
            <p className="text-brand-black/60 font-light mb-8 flex-grow">{service.description}</p>
            <div className="flex flex-wrap gap-2">
              {service.tags.map(tag => (
                <span key={tag} className="text-[10px] uppercase tracking-wider font-bold border border-brand-black/10 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-24 px-6 md:px-12 bg-brand-white border-t border-brand-black/5">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <span className="text-xs uppercase tracking-widest font-bold text-brand-black/40">Who we are</span>
        <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mt-4 mb-8">Riding the Wave</h2>
        <p className="text-xl font-light leading-relaxed text-brand-black/70 mb-8">
          PADO is a studio based in Seoul. We build and operate our own products, and we take on
          game and web development work for clients. Our focus is the balance between artistic
          expression and technical excellence.
        </p>
        <div className="grid grid-cols-2 gap-12">
          <div>
            <h4 className="text-4xl font-display font-bold text-brand-accent">Seoul</h4>
            <p className="text-xs uppercase tracking-widest font-bold text-brand-black/40 mt-2">Where we are</p>
          </div>
          <div>
            <h4 className="text-4xl font-display font-bold text-brand-accent">Games &amp; Web</h4>
            <p className="text-xs uppercase tracking-widest font-bold text-brand-black/40 mt-2">What we build</p>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="aspect-square bg-brand-black rounded-2xl relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-brand-accent)_0%,_transparent_70%)] opacity-20 blur-3xl" />
          <div className="relative text-center">
            <div className="text-brand-white font-display font-bold tracking-tighter text-7xl md:text-8xl leading-none">
              PADO
            </div>
            <div className="text-brand-white/40 text-xs uppercase tracking-[0.3em] font-bold mt-4">
              파도 · Studio
            </div>
          </div>
        </div>
        <div className="absolute -bottom-6 -left-6 bg-brand-accent p-8 rounded-xl hidden md:block">
          <p className="text-brand-black font-display font-bold text-2xl leading-tight">
            Innovation is<br />our heartbeat.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Process = () => {
  const steps = [
    { number: "01", title: "Discovery", description: "We dive deep into your vision, target audience, and business goals." },
    { number: "02", title: "Strategy", description: "Crafting a roadmap that balances innovation with practical execution." },
    { number: "03", title: "Creation", description: "Iterative development with a focus on high-performance and UX." },
    { number: "04", title: "Launch", description: "Deploying your product to the world with full support and optimization." }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-brand-black text-brand-white">
      <div className="mb-16">
        <span className="text-xs uppercase tracking-widest font-bold text-white/40">How we work</span>
        <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mt-4">Process</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {steps.map((step, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="border-l border-white/10 pl-8 py-4"
          >
            <span className="text-4xl font-display font-bold text-brand-accent/30 mb-4 block">{step.number}</span>
            <h3 className="text-2xl font-display font-bold mb-4">{step.title}</h3>
            <p className="text-white/60 font-light leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Projects = () => (
  <section id="projects" className="py-24 px-6 md:px-12 bg-brand-black text-brand-white">
    <div className="mb-16">
      <span className="text-xs uppercase tracking-widest font-bold text-white/40">Our Product</span>
      <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mt-4">Projects</h2>
    </div>

    <motion.a
      href="https://www.janggi365.com/"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group block border border-white/10 hover:border-brand-accent/50 transition-colors"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-10 md:p-16 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-[10px] uppercase tracking-widest font-bold text-white/40">Game Service</span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-brand-accent border border-brand-accent/40 px-2 py-1 rounded">
                Live Beta
              </span>
            </div>
            <h3 className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-6">Janggi 365</h3>
            <p className="text-white/60 font-light leading-relaxed mb-8">
              An online Janggi (Korean chess) service that we build and operate ourselves. Real-time
              matches against other players, instant rematches, and post-game review — open every day
              of the year.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Real-time Multiplayer", "Web", "Game Review"].map(tag => (
                <span key={tag} className="text-[10px] uppercase tracking-wider font-bold border border-white/15 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 mt-12 text-brand-accent uppercase tracking-widest text-xs font-bold">
            janggi365.com
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </div>

        <div className="relative min-h-[260px] lg:min-h-[420px] border-t lg:border-t-0 lg:border-l border-white/10 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-brand-accent)_0%,_transparent_70%)] opacity-15 blur-2xl" />
          <div className="relative text-center leading-none">
            <div className="font-display font-bold tracking-tighter text-7xl md:text-8xl">장기</div>
            <div className="font-display font-bold tracking-tighter text-7xl md:text-8xl text-brand-accent">365</div>
          </div>
        </div>
      </div>
    </motion.a>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-brand-white pt-24 pb-12 px-6 md:px-12 border-t border-brand-black/10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
      <div>
        <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-12">
          Let's create something <span className="text-stroke text-brand-black">extraordinary</span> together.
        </h2>
        <h4 className="text-xs uppercase tracking-widest font-bold text-brand-black/40 mb-4">Get in touch</h4>
        <a
          href="mailto:pado.wave.dev@gmail.com"
          className="inline-flex items-center gap-3 text-xl md:text-2xl font-display font-bold tracking-tight hover:text-brand-accent transition-colors"
        >
          <Mail className="w-6 h-6" />
          pado.wave.dev@gmail.com
        </a>
        <p className="mt-4 text-sm font-light text-brand-black/50">
          For support and billing enquiries, we reply within 2 business days.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h4 className="text-xs uppercase tracking-widest font-bold text-brand-black/40 mb-6">Location</h4>
          <p className="text-lg font-light leading-relaxed">
            서울시 마포구 성미산로 6길 39<br />
            Seoul, South Korea
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest font-bold text-brand-black/40 mb-6">Business Info</h4>
          <p className="text-lg font-light leading-relaxed">
            Company: PADO (파도)<br />
            Registration: 662-01-02706<br />
            CEO: Jin With Yoo
          </p>
        </div>
      </div>
    </div>

    <div className="pt-12 border-t border-brand-black/10 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-2xl font-display font-bold tracking-tighter">PADO</div>
      <p className="text-[10px] uppercase tracking-widest font-bold text-brand-black/40">
        © 2026 PADO STUDIO. ALL RIGHTS RESERVED.
      </p>
      <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold">
        <a href="/privacy.html" className="hover:text-brand-accent">Privacy Policy</a>
        <a href="/terms.html" className="hover:text-brand-accent">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-brand-black">
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <About />
      <Process />
      <Projects />
      <Footer />
    </div>
  );
}
