import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MapPin, Clock, Coffee, BookOpen, Droplets, Quote } from "lucide-react";
import heroImg from "./assets/hero.png";
import espressoImg from "./assets/espresso.png";
import baristaImg from "./assets/barista.png";
import cornerImg from "./assets/corner.png";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

function App() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 400]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden font-sans selection:bg-primary selection:text-primary-foreground">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 mix-blend-difference text-white flex justify-between items-center">
        <div className="font-serif text-xl tracking-wider">AURA</div>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
          <a href="#philosophy" className="hover:opacity-70 transition-opacity">Philosophy</a>
          <a href="#process" className="hover:opacity-70 transition-opacity">Process</a>
          <a href="#offerings" className="hover:opacity-70 transition-opacity">Offerings</a>
          <a href="#visit" className="hover:opacity-70 transition-opacity">Visit</a>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section className="relative h-[100dvh] w-full overflow-hidden bg-black">
        <motion.div 
          className="absolute inset-0 w-full h-full"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src={heroImg} 
            alt="Coffee shop interior" 
            className="w-full h-[120%] object-cover object-center -mt-[10%]"
          />
        </motion.div>
        
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-[#FAF6F0] mb-6">AURA</h1>
            <p className="text-lg md:text-xl text-[#FAF6F0]/80 font-light tracking-widest uppercase max-w-xl mx-auto">
              Coffee as a ritual. Time as a luxury.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Philosophy Section */}
      <section id="philosophy" className="py-32 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <FadeIn>
          <BookOpen className="w-8 h-8 mx-auto mb-8 text-primary" strokeWidth={1} />
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-8 leading-tight">
            We believe in the slow drip of time. In spaces that hold you, and cups that warm you.
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-light">
            Aura is not a place to grab a coffee on the go. It is a destination for lingering. 
            We source our beans with obsessive care, roasting them to highlight their intrinsic character rather than masking it. 
            Here, every sip is deliberate.
          </p>
        </FadeIn>
      </section>

      {/* 3. The Process */}
      <section id="process" className="py-24 bg-[#EBE5DE] text-primary px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-12 z-10">
              <FadeIn>
                <h3 className="text-sm tracking-widest uppercase text-secondary font-bold">The Process</h3>
                <h2 className="text-4xl md:text-5xl font-serif text-primary mt-2">Roasting with reverence.</h2>
              </FadeIn>
              
              <div className="space-y-8">
                <FadeIn delay={0.1}>
                  <div className="flex gap-4">
                    <Droplets className="w-6 h-6 text-secondary shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl font-serif mb-2">Sourcing</h4>
                      <p className="text-primary/70 leading-relaxed font-light">We work directly with small-lot farmers in Ethiopia, Colombia, and Guatemala, paying premiums for beans cultivated with generational wisdom.</p>
                    </div>
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.2}>
                  <div className="flex gap-4">
                    <Coffee className="w-6 h-6 text-secondary shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl font-serif mb-2">Roasting</h4>
                      <p className="text-primary/70 leading-relaxed font-light">Roasted in small batches on a vintage Probat, guided by sight, sound, and smell rather than just automated profiles.</p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="aspect-square rounded-full overflow-hidden bg-black/10 border border-primary/10 p-4"
            >
              <div className="w-full h-full rounded-full overflow-hidden">
                 <img src={baristaImg} alt="Barista working" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Imagery & Text Split (The Craft) */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="aspect-[3/4] overflow-hidden"
          >
            <img src={espressoImg} alt="Perfect espresso" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
          </motion.div>
          <div className="space-y-8">
            <FadeIn>
              <h3 className="text-sm tracking-widest uppercase text-secondary font-bold">The Craft</h3>
              <h2 className="text-4xl md:text-5xl font-serif text-primary mt-2">Precision in every pour.</h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-lg leading-relaxed font-light">
                Our baristas are artisans of extraction. From the exact grind size to the precise temperature of the water, 
                every variable is controlled to pull a shot that expresses the true terroir of the bean. 
                We weigh every dose and time every yield. Perfection is not an accident.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. Featured Menu */}
      <section id="offerings" className="py-32 bg-primary text-primary-foreground px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-serif mb-6">Curated Offerings</h2>
              <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg font-light">A meticulous selection of our finest roasts and preparations, served without compromise.</p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              { title: "Single Origin Pour Over", desc: "Ethiopia Yirgacheffe. Floral, bright, with notes of jasmine, bergamot, and a delicate honey finish.", price: "$6" },
              { title: "The House Espresso", desc: "A rich, full-bodied blend with deep chocolate, dark cherry undertones, and a syrupy mouthfeel.", price: "$4" },
              { title: "Velvet Cortado", desc: "Equal parts espresso and perfectly textured steamed milk, served at exactly 140 degrees.", price: "$4.5" }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.2}>
                <div className="border-b border-primary-foreground/20 pb-8 hover:bg-primary-foreground/5 p-6 transition-colors duration-500 cursor-pointer group h-full flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-baseline mb-4">
                      <h3 className="text-xl font-serif pr-4">{item.title}</h3>
                      <span className="text-sm font-mono opacity-60 shrink-0">{item.price}</span>
                    </div>
                    <p className="text-primary-foreground/60 font-light leading-relaxed mb-8">{item.desc}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity text-secondary">
                    <span>Discover</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. The Space */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <FadeIn>
              <h3 className="text-sm tracking-widest uppercase text-secondary font-bold">The Sanctuary</h3>
              <h2 className="text-4xl md:text-5xl font-serif text-primary mt-2">Designed for pause.</h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-lg leading-relaxed font-light">
                Step away from the noise. Our space is intentionally designed with dim lighting, 
                rich textures, and acoustic treatments to create a sanctuary where you can read, 
                write, or simply sit in quiet contemplation. 
                There is no rushing here.
              </p>
            </FadeIn>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="aspect-[4/3] overflow-hidden order-1 md:order-2"
          >
            <img src={cornerImg} alt="Cozy reading corner" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
          </motion.div>
        </div>
      </section>
      
      {/* 7. Testimonial */}
      <section className="py-24 bg-card border-y border-border/50 text-center px-6 md:px-12">
        <FadeIn>
          <Quote className="w-10 h-10 mx-auto text-secondary mb-8 opacity-50" />
          <h2 className="text-2xl md:text-4xl font-serif max-w-3xl mx-auto leading-relaxed text-primary">
             "Aura is a rare find. It feels less like a cafe and more like a private library where the coffee happens to be world-class. It commands a sense of stillness."
          </h2>
          <p className="mt-8 text-sm uppercase tracking-widest text-muted-foreground">— The Local Chronicle</p>
        </FadeIn>
      </section>

      {/* 8. Footer / Visit */}
      <section id="visit" className="py-32 bg-[#1A1816] text-[#FAF6F0] px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-5xl md:text-7xl font-serif mb-12">Join the ritual.</h2>
                <div className="grid sm:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 mt-1 text-secondary opacity-80" />
                      <div>
                        <h4 className="text-lg font-serif mb-2">Location</h4>
                        <p className="text-white/60 font-light leading-relaxed">124 Ember Lane<br/>Historic District<br/>City, ST 12345</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 mt-1 text-secondary opacity-80" />
                      <div>
                        <h4 className="text-lg font-serif mb-2">Hours</h4>
                        <p className="text-white/60 font-light leading-relaxed">Mon - Fri: 7am - 7pm<br/>Sat - Sun: 8am - 8pm</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-serif mb-6 border-b border-white/10 pb-4">Stay in touch</h4>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                      <input 
                        type="email" 
                        placeholder="Email address" 
                        className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:outline-none focus:border-secondary transition-colors"
                      />
                      <button className="w-full bg-secondary text-secondary-foreground py-3 text-sm uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-colors">
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div className="w-full aspect-[16/9] overflow-hidden bg-white/5 relative">
                  <img src={heroImg} alt="Interior" className="w-full h-full object-cover opacity-50 mix-blend-luminosity" />
                </div>
                <div className="mt-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 border-t border-white/10 pt-8 text-sm text-white/40">
                  <p>© {new Date().getFullYear()} Aura Coffee. All rights reserved.</p>
                  <div className="flex gap-6 uppercase tracking-widest">
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors">Journal</a>
                    <a href="#" className="hover:text-white transition-colors">Contact</a>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}

export default App;
