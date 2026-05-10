"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Header from "./Header";

const HERO_VIDEOS = [
  "https://www.datocms-assets.com/157026/1748025860-rc_asset_montage_01.mp4",
  "https://www.datocms-assets.com/157026/1778177871-hero.mp4",
  "https://www.datocms-assets.com/157026/1751320787-ai-synthetic-humans_fantasy-interactive_video-3-2.mp4",
  "https://www.datocms-assets.com/157026/1765220548-slow-motion-generative-interfaces-fantasy-interactive.mp4"
];

const SHOWCASE_DATA = [
  {
    id: 1,
    title: "Social Media Strategy",
    description: "Turning brand ideas into brand experiences through data-driven social strategies and engagement.",
    video: "https://www.datocms-assets.com/157026/1765220548-slow-motion-generative-interfaces-fantasy-interactive.mp4"
  },
  {
    id: 2,
    title: "Influencer Marketing",
    description: "Bridging the gap between brands and their audiences through authentic influencer collaborations.",
    video: "https://www.datocms-assets.com/157026/1751320787-ai-synthetic-humans_fantasy-interactive_video-3-2.mp4"
  },
  {
    id: 3,
    title: "Event Production",
    description: "Specializing in luxury event production and global exhibition management.",
    video: "https://www.datocms-assets.com/157026/1748025860-rc_asset_montage_01.mp4"
  }
];

const BRANDS = [
  { name: "IMEDI.HEALTH", logo: "/brands/imedi_health.png" },
  { name: "PURBI", logo: "/brands/purbi.png" },
  { name: "Thrive", logo: "/brands/thrive.png" },
  { name: "AP Talent", logo: "/brands/ap_talent.png" },
  { name: "Pickleberry", logo: "/brands/pickleberry.png" }
];

const REVIEWS = [
  {
    name: "Dr. Sarah Chen",
    role: "Director of Operations",
    company: "IMEDI.HEALTH",
    content: "The level of precision and cinematic quality Printdash brings to our brand is unparalleled. They didn't just build a site; they built an experience.",
    logo: "/brands/imedi_health.png"
  },
  {
    name: "Rajesh Kumar",
    role: "Founder",
    company: "PURBI International",
    content: "Working with Printdash was a game-changer. Our digital presence now matches the premium nature of our global operations.",
    logo: "/brands/purbi.png"
  },
  {
    name: "Marcus Thorne",
    role: "CEO",
    company: "Thrive",
    content: "Minimalist, powerful, and effective. The motion design and attention to detail they provided is exactly what our high-growth team needed.",
    logo: "/brands/thrive.png"
  },
  {
    name: "Aisha Vance",
    role: "Head of Talent",
    company: "AP Talent",
    content: "Their ability to humanize complex talent solutions through design is remarkable. The new identity has significantly boosted our engagement.",
    logo: "/brands/ap_talent.png"
  },
  {
    name: "Priya Sharma",
    role: "Creative Lead",
    company: "Pickleberry",
    content: "Capturing the soul of a homegrown brand while giving it a world-class edge is a tough balance. Printdash nailed it perfectly.",
    logo: "/brands/pickleberry.png"
  },
  {
    name: "Thomas Wright",
    role: "Global Strategy",
    company: "Healthcare 24hr",
    content: "The most professional and creative team we've worked with. Their cinematic approach to digital storytelling is truly unique.",
    logo: "/brands/healthcare.png"
  }
];

export default function HomeClient() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="bg-[#050505] text-white selection:bg-white selection:text-black font-sans">
      <Header />
      
      <HeroSequence />

      <section id="about" className="relative z-20 w-full bg-white text-black py-16 md:py-48 px-6 md:px-16 shadow-[0_-50px_100px_rgba(0,0,0,0.05)]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Side: Content */}
          <div className="lg:col-span-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-black/5 border border-black/10 rounded-full mb-6 md:mb-8"
            >
              <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-blue-600">About The Dash Media</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-6xl font-black leading-[1.1] md:leading-[0.9] tracking-tighter uppercase mb-8 md:mb-12"
            >
              Turning Brand <br className="hidden md:block" />Ideas Into <br className="hidden md:block" />Experiences.
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.2 }}
              className="space-y-6 md:space-y-8 max-w-xl"
            >
              <p className="text-base md:text-xl text-black/60 leading-relaxed font-medium">
                The Dash Media (TDM) is a premier creative media and digital marketing agency dedicated to elevating brand presence through strategic storytelling and innovative experiences.
              </p>
              <p className="text-base md:text-xl text-black/60 leading-relaxed font-medium">
                We bridge the gap between brands and their audiences through data-driven social strategies, influencer collaborations, and world-class event production.
              </p>
            </motion.div>

            <div className="mt-10 md:mt-16 flex flex-wrap gap-4 md:gap-6">
               <div className="px-6 py-4 md:px-8 md:py-6 bg-black/5 border border-black/10 rounded-2xl md:rounded-3xl">
                  <h4 className="text-xl md:text-4xl font-black text-blue-600 mb-1">99.9%</h4>
                  <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-black/40">Uptime Mindset</p>
               </div>
               <div className="px-6 py-4 md:px-8 md:py-6 bg-black/5 border border-black/10 rounded-2xl md:rounded-3xl">
                  <h4 className="text-xl md:text-4xl font-black text-black mb-1">PREMIUM</h4>
                  <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-black/40">Digital Expertise</p>
               </div>
            </div>
          </div>

          {/* Right Side: Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <ExpertiseCard 
              icon={<UsersIcon />} 
              title="Social Media Strategy" 
              desc="Comprehensive social management and content strategy designed to build community and drive organic growth." 
              color="blue"
            />
            <ExpertiseCard 
              icon={<StarIcon />} 
              title="Influencer Marketing" 
              desc="Connecting your brand with authentic voices to create impactful collaborations that resonate with target audiences." 
              color="emerald"
            />
            <ExpertiseCard 
              icon={<VideoIcon />} 
              title="Content Creation" 
              desc="High-end graphic design and cinematic video production that turns your brand story into a visual masterpiece." 
              color="purple"
            />
            <ExpertiseCard 
              icon={<SparklesIcon />} 
              title="Event Production" 
              desc="From luxury events to global exhibitions, we manage every detail to deliver unforgettable brand experiences." 
              color="rose"
            />
          </div>
        </div>
      </section>

      <VerticalShowcase />

      <section id="work" className="relative z-20 bg-white text-black px-6 md:px-16 py-16 md:py-48">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12 md:mb-20 text-center max-w-2xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4 md:mb-6"
            >
              Our Work
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-gray-600 leading-relaxed"
            >
              Explore our curated selection of projects spanning various industries, showcasing our expertise in delivering scalable and performant solutions.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceBox num="01" title="AI Strategy" video="https://www.datocms-assets.com/157026/1750263169-ai-strategy-tools.mp4" projects="IMEDI.HEALTH / 3 Projects" slug="imedi-health" />
            <ServiceBox num="02" title="Product Innovation" video="https://www.datocms-assets.com/157026/1750188557-productinnovation-travel.mp4" projects="THRIVE / 1 Project" slug="thrive" />
            <ServiceBox num="03" title="Brand & Identity" video="https://www.datocms-assets.com/157026/1750877302-brand-motion.mp4" projects="PURBI / 2 Projects" slug="purbi" />
            <ServiceBox num="04" title="Immigration" video="https://www.datocms-assets.com/157026/1744201877-art-basel.mp4" projects="AP Talent / 1 Project" slug="ap-talent" />
            <ServiceBox num="05" title="B2G" video="https://www.datocms-assets.com/157026/1767811706-upscaled-high-2.mp4" projects="Pickleberry / 4 Projects" slug="pickleberry" />
            <ServiceBox num="06" title="D2C" video="https://www.datocms-assets.com/157026/1778177871-hero.mp4" projects="Healthcare 24hr / 2 Projects" slug="healthcare-24hr" />
          </div>
        </div>
      </section>

      <section id="impact" className="relative h-[150vh] md:h-[180vh] w-full bg-black">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden px-6 md:px-16 pt-24 md:pt-40 pb-12 md:pb-24">
           <AutoVideoLoop videos={[...HERO_VIDEOS].reverse()} interval={4000} opacity={0.5} />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
           
           {/* Top Left: Main Narrative */}
           <div className="relative z-10 max-w-2xl">
              <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} className="text-xl md:text-[2.2vw] font-bold leading-tight tracking-tight text-white">
                We've helped our partners win their place in the hands, homes, and hearts of millions— <span className="text-white/30">combining strategic storytelling and design to realize the unprecedented.</span>
              </motion.h2>
           </div>

           {/* Bottom Content: Stats & Expertise */}
           <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-end">
              <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8 md:pt-12">
                <div>
                  <h4 className="text-2xl md:text-5xl font-black text-white mb-2 uppercase">100+</h4>
                  <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/40">Brands Transformed</p>
                </div>
                <div>
                  <h4 className="text-2xl md:text-5xl font-black text-white mb-2 uppercase">50+</h4>
                  <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/40">Global Exhibitions</p>
                </div>
              </div>
              <div className="hidden md:flex flex-col gap-6 text-right">
                <div className="space-y-4">
                  <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500">Core Expertise</p>
                  <ul className="space-y-2 text-white/60 font-medium text-lg">
                    <li>Luxury Event Production</li>
                    <li>Influencer Marketing</li>
                    <li>Digital Media Strategy</li>
                    <li>Cinematic Storytelling</li>
                  </ul>
                </div>
                <div className="mt-8">
                  <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em]">TDM / GLOBAL CREATIVE NETWORK</p>
                </div>
              </div>
           </div>
        </div>
      </section>

      <BrandsSection />
      <ReviewsSection />
      <CareersSection onApply={() => setIsFormOpen(true)} />      <footer id="contact" className="relative z-20 bg-white text-black px-6 md:px-16 py-24 md:py-48 border-t border-black/5">
        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <div className="flex flex-col gap-8">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                className="text-3xl md:text-[3.5vw] font-black tracking-tighter leading-[0.9] uppercase"
              >
                Let's <br />create the <br /><span className="text-black/30">unprecedented.</span>
              </motion.h2>
              
              <motion.button 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsFormOpen(true)} 
                className="w-fit bg-black text-white px-10 py-4 rounded-full font-black text-base md:text-lg uppercase tracking-widest transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)]"
              >
                Get in Touch
              </motion.button>
            </div>

            <div className="flex lg:justify-end">
              <div className="space-y-8">
                <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue-600">Connect</p>
                <div className="space-y-4 text-sm md:text-base font-medium text-black/60">
                  <a href="#" className="block hover:text-black transition-colors">Instagram</a>
                  <a href="#" className="block hover:text-black transition-colors">LinkedIn</a>
                  <a href="#" className="block hover:text-black transition-colors">Twitter (X)</a>
                  <a href="#" className="block hover:text-black transition-colors">Behance</a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-32 pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-[10vw] md:text-[4vw] font-black tracking-tighter opacity-5 select-none">
              THE DASH MEDIA
            </div>
            <div className="flex flex-col md:items-end gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-black/30">
              <span>© 2026 THE DASH MEDIA. ALL RIGHTS RESERVED.</span>
              <div className="flex gap-4">
                <a href="#" className="hover:text-black">Privacy Policy</a>
                <a href="#" className="hover:text-black">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {isFormOpen && <ContactPanel onClose={() => setIsFormOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}

function ReviewsSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="relative py-32 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-8 mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4"
        >
          Voices of Success
        </motion.h2>
        <p className="text-xl text-white/40 uppercase tracking-widest font-bold">Trusted by Industry Leaders</p>
      </div>

      <div className="flex overflow-hidden group">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-8 px-4"
        >
          {/* Double the array for seamless looping */}
          {[...REVIEWS, ...REVIEWS].map((review, i) => (
            <div
              key={i}
              className="min-w-[280px] md:min-w-[360px] bg-white/5 backdrop-blur-3xl border border-white/10 p-8 md:p-10 rounded-[32px] flex flex-col justify-between hover:bg-white/10 transition-colors duration-500"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <img 
                    src={review.logo} 
                    alt={review.company} 
                    className="h-6 md:h-8 w-auto object-contain brightness-0 invert opacity-40 group-hover/card:opacity-100 transition-opacity duration-500"
                  />
                  <span className="text-4xl font-serif text-white/10 group-hover:text-white/20 transition-colors">"</span>
                </div>
                <p className="text-lg md:text-xl font-medium leading-relaxed text-white/80 mb-8 italic">
                  {review.content}
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-gradient-to-br from-white/20 to-transparent border border-white/10 flex items-center justify-center font-bold text-sm md:text-lg">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-wider text-xs md:text-sm">{review.name}</h4>
                  <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-tighter">{review.role} — {review.company}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative background element */}
      <motion.div 
        style={{ x }}
        className="absolute top-1/2 left-0 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] pointer-events-none whitespace-nowrap uppercase tracking-tighter"
      >
        Excellence Excellence Excellence
      </motion.div>
    </section>
  );
}

function BrandsSection() {
  const [brandIndex, setBrandIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // 1s interval as requested for faster rotation
    const timer = setInterval(() => {
      setBrandIndex((prev) => (prev + 1) % BRANDS.length);
    }, 1300); // 1.3s total cycle
    
    return () => clearInterval(timer);
  }, [BRANDS.length]);

  const currentBrand = BRANDS[brandIndex] || BRANDS[0];

  return (
    <section className="relative h-screen w-full bg-black overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-0">
         <video ref={videoRef} autoPlay muted loop playsInline className="h-full w-full object-cover">
            <source src="https://stream.mux.com/L9t5aENtwbzMguK0077TmYSC2zCLJPlmu/high.mp4" type="video/mp4" />
         </video>
         {/* Center mask to hide baked-in logos */}
         <div className="absolute inset-0 bg-black/30" />
         <div 
           className="absolute inset-0 backdrop-blur-[60px]" 
           style={{ 
             maskImage: 'radial-gradient(circle at 50% 45%, black 0%, black 25%, transparent 65%)',
             WebkitMaskImage: 'radial-gradient(circle at 50% 45%, black 0%, black 25%, transparent 65%)'
           }} 
         />
      </div>
      
      <div className="relative z-10 flex flex-col items-center gap-16 text-center px-8 -mt-20">
         <motion.h3 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="text-xl md:text-2xl font-bold uppercase tracking-[0.4em] text-white/40"
         >
           Brands we've grown
         </motion.h3>

         <div className="flex items-center justify-center min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentBrand.name}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex items-center justify-center"
              >
                <motion.img 
                  src={currentBrand.logo} 
                  alt={currentBrand.name} 
                  animate={{ 
                    filter: ["brightness(1) invert(1) grayscale(1) contrast(300%)", "brightness(1.5) invert(1) grayscale(1) contrast(300%)", "brightness(1) invert(1) grayscale(1) contrast(300%)"],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="h-20 md:h-40 w-auto object-contain mix-blend-screen opacity-100 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                />
              </motion.div>
            </AnimatePresence>
         </div>
      </div>
    </section>
  );
}

function ContactPanel({ onClose }: { onClose: () => void }) {
  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm" />
      <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 30, stiffness: 300 }} className="fixed top-0 right-0 h-full w-full md:w-[40vw] bg-white z-[70] shadow-2xl p-8 md:p-16 overflow-y-auto text-black">
        <button onClick={onClose} className="absolute top-8 right-8 p-2 hover:bg-gray-100 rounded-full transition-colors"><X size={20} /></button>
        <div className="mt-8 flex flex-col gap-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Request an Invite</h2>
          <form className="flex flex-col gap-6 w-full" onSubmit={(e) => e.preventDefault()}>
             <FormInput label="Your Name" />
             <FormInput label="Work Email" />
             <FormInput label="Company" />
             <FormInput label="Title" />
             <div className="flex flex-col gap-3">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Which days are you available?</label>
                <textarea className="w-full border-b border-gray-200 py-3 focus:border-black outline-none transition-colors resize-none h-24 text-sm" />
             </div>
             <div className="flex items-center gap-3 mt-4">
                <input type="checkbox" id="privacy" className="w-4 h-4 rounded border-gray-300 focus:ring-black" />
                <label htmlFor="privacy" className="text-xs font-medium text-gray-500">I agree to the <span className="underline cursor-pointer">privacy policy</span>.</label>
             </div>
             <button className="mt-6 bg-black text-white font-bold py-4 px-10 rounded-lg text-lg hover:opacity-80 transition-all self-end md:self-auto">Submit</button>
          </form>
        </div>
      </motion.div>
    </>
  );
}

function FormInput({ label }: { label: string }) {
  return (
    <div className="flex flex-col gap-1 group">
      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest group-focus-within:text-black transition-colors">{label}</label>
      <input type="text" className="w-full border-b border-gray-200 py-3 focus:border-black outline-none transition-colors text-sm" />
    </div>
  );
}

function HeroSequence() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={containerRef} className="relative h-[200vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div style={{ scale, opacity }} className="absolute inset-0">
          <AutoVideoLoop videos={HERO_VIDEOS} interval={1000} />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
        <div className="relative z-10 h-full w-full flex flex-col justify-center items-center text-center px-6">
           <motion.div style={{ y: textY }}>
             <h1 className="text-[12vw] md:text-[6vw] font-black tracking-tighter leading-none uppercase mix-blend-overlay">THE DASH MEDIA</h1>
             <p className="text-xs md:text-lg font-bold tracking-[0.4em] uppercase mt-4 text-white/70">Lead by Design</p>
           </motion.div>
        </div>
      </div>
    </section>
  );
}

function AutoVideoLoop({ videos, interval, opacity = 1 }: { videos: string[], interval: number, opacity?: number }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => { setIndex((prev) => (prev + 1) % videos.length); }, interval);
    return () => clearInterval(timer);
  }, [videos.length, interval]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.div 
          key={videos[index]} 
          initial={{ opacity: 0, scale: 1 }} 
          animate={{ opacity, scale: 1.1 }} 
          exit={{ opacity: 0, scale: 1.2 }} 
          transition={{ 
            opacity: { duration: 1.5, ease: "easeInOut" },
            scale: { duration: interval / 1000, ease: "linear" }
          }} 
          className="absolute inset-0 w-full h-full"
        >
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src={videos[index]} type="video/mp4" />
          </video>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function VerticalShowcase() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end end"] });
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    return scrollYProgress.onChange((v) => {
      const zones = SHOWCASE_DATA.length;
      const index = Math.min(zones - 1, Math.floor(v * zones));
      if (index !== activeIndex && index >= 0) { setActiveIndex(index); }
    });
  }, [scrollYProgress, activeIndex]);

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  const smoothTextY = useSpring(textY, { stiffness: 80, damping: 25 });

  return (
    <section id="services" ref={targetRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div key={SHOWCASE_DATA[activeIndex]?.id || 0} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="absolute inset-0">
              {SHOWCASE_DATA[activeIndex] && (
                <video autoPlay muted loop playsInline className="h-full w-full object-cover">
                  <source src={SHOWCASE_DATA[activeIndex].video} type="video/mp4" />
                </video>
              )}
              <div className="absolute inset-0 bg-black/60" />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="relative z-10 h-full w-full flex items-center justify-center">
          <div className="max-w-[1400px] w-full px-6 md:px-16 h-[100vh] overflow-hidden">
             <motion.div style={{ y: smoothTextY }} className="flex flex-col h-[300vh]">
                {SHOWCASE_DATA.map((item, i) => (
                  <div key={item.id} className="h-[100vh] flex flex-col justify-center">
                    <motion.div 
                      animate={{ 
                        opacity: i === activeIndex ? 1 : 0, 
                        scale: i === activeIndex ? 1 : 0.9,
                        filter: i === activeIndex ? "blur(0px)" : "blur(10px)",
                        y: i === activeIndex ? 0 : (i < activeIndex ? -20 : 20)
                      }} 
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <h3 className="text-xs md:text-xl font-bold text-white/50 mb-3">0{item.id}</h3>
                      <h2 className="text-3xl md:text-[4.5vw] font-black tracking-tighter leading-[0.9] uppercase mb-6">{item.title}</h2>
                      <p className="text-sm md:text-lg text-white/70 max-w-md leading-relaxed">{item.description}</p>
                    </motion.div>
                  </div>
                ))}
             </motion.div>
          </div>
        </div>

        {/* Explore Section at bottom left - Synced with activeIndex */}
        <div className="absolute bottom-10 left-6 md:bottom-12 md:left-16 z-20 max-w-[calc(100%-48px)] md:max-w-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h4 className="text-white font-bold uppercase tracking-wider text-xs md:text-sm mb-2">Comprehensive Services</h4>
              <p className="text-white/50 text-[10px] md:text-sm mb-4 md:mb-6 leading-relaxed">
                We provide an integrated suite of development and infrastructure services designed to bring your digital vision to reality.
              </p>
              <a 
                href="/services"
                className="inline-flex items-center gap-3 md:gap-4 px-6 py-3 md:px-8 md:py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-white font-bold uppercase tracking-widest text-[9px] md:text-xs transition-all hover:scale-105 active:scale-95"
              >
                Explore Now
                <svg width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-1">
                  <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

function CareersSection({ onApply }: { onApply: () => void }) {
  return (
    <section id="careers" className="relative h-[120vh] md:h-[150vh] w-full bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AutoVideoLoop 
          videos={[HERO_VIDEOS[3], HERO_VIDEOS[5], HERO_VIDEOS[7], HERO_VIDEOS[2]]} 
          interval={1000} 
          opacity={0.4} 
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/90 z-1" />
      
      <div className="relative z-10 h-full w-full flex items-center justify-center px-6 md:px-16 py-24 md:py-48">
        <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-blue-400">Join the Collective</span>
            </div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              className="text-4xl md:text-[5vw] font-black leading-[0.9] tracking-tighter uppercase mb-12 text-white"
            >
              Building <br />the next <br />generation.
            </motion.h2>

            <div className="space-y-8 max-w-xl">
              <p className="text-lg md:text-2xl text-white/70 leading-relaxed font-light">
                At TDM, we partner with visionaries. Our culture is built on the intersection of strategic storytelling and relentless innovation.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                {["Remote Friendly", "Unlimited PTO", "Global Growth"].map(perk => (
                  <div key={perk} className="px-6 py-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/50">{perk}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <CareerRoleCard 
              icon={<BriefcaseIcon />} 
              title="Creative Director" 
              desc="Lead our global creative teams in delivering world-class brand experiences." 
              color="rose"
              onClick={onApply}
            />
            <CareerRoleCard 
              icon={<MapPinIcon />} 
              title="Brand Strategist" 
              desc="Develop data-driven strategies for the world's leading luxury brands." 
              color="blue"
              onClick={onApply}
            />
            <CareerRoleCard 
              icon={<ZapIcon />} 
              title="Motion Artist" 
              desc="Create visual narratives that push the boundaries of digital media." 
              color="purple"
              onClick={onApply}
            />
            <CareerRoleCard 
              icon={<TrophyIcon />} 
              title="Growth Lead" 
              desc="Drive impact and scale through innovative performance marketing." 
              color="emerald"
              onClick={onApply}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CareerRoleCard({ icon, title, desc, color, onClick }: { icon: React.ReactNode, title: string, desc: string, color: string, onClick: () => void }) {
  const colors = {
    blue: "text-blue-400 border-blue-400/20 bg-blue-400/5",
    emerald: "text-emerald-400 border-emerald-400/20 bg-emerald-400/5",
    purple: "text-purple-400 border-purple-400/20 bg-purple-400/5",
    rose: "text-rose-400 border-rose-400/20 bg-rose-400/5",
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 group relative overflow-hidden cursor-pointer"
    >
      <div className={`h-12 w-12 rounded-2xl flex items-center justify-center mb-6 border ${colors[color as keyof typeof colors]}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
        {desc}
      </p>
      <div className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/30 group-hover:text-white transition-colors">
        Apply Now 
        <svg width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-1">
          <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
        </svg>
      </div>
    </motion.div>
  );
}

function ServiceBox({ num, title, video, projects, slug }: { num: string, title: string, video: string, projects: string, slug: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Set initial frame so it's not black
      videoRef.current.currentTime = 2;
      
      if (isHovered) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isHovered]);

  return (
    <a 
      href={`/work/${slug}`}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} 
      className="relative aspect-square md:aspect-[4/5] bg-[#0a0a0a] rounded-[40px] overflow-hidden group cursor-pointer border border-white/5 block"
    >
      <div className={`absolute inset-0 z-0 transition-all duration-700 ${isHovered ? "opacity-100 scale-100" : "opacity-20 scale-110"}`}>
        <video 
          ref={videoRef}
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 h-full w-full p-6 md:p-10 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <span className={`text-xs md:text-sm font-mono transition-colors duration-500 ${isHovered ? "text-white/60" : "text-gray-500"}`}>
            {num}
          </span>
          <div className={`h-10 w-10 md:h-12 md:w-12 rounded-full border flex items-center justify-center transition-all duration-500 ${isHovered ? "bg-white border-white scale-110" : "bg-white/5 border-white/10"}`}>
            <svg width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={isHovered ? "text-black" : "text-white"}>
              <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
            </svg>
          </div>
        </div>

        <div>
          <h3 className={`text-2xl md:text-3xl font-black tracking-tighter uppercase leading-none mb-2 transition-all duration-500 ${isHovered ? "text-white translate-x-2" : "text-white/90"}`}>
            {title}
          </h3>
          <p className={`text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-500 ${isHovered ? "text-white/60 translate-x-2" : "text-gray-500"}`}>
            {projects}
          </p>
        </div>
      </div>
    </a>
  );
}

function ExpertiseCard({ icon, title, desc, color }: { icon: React.ReactNode, title: string, desc: string, color: string }) {
  const colors = {
    blue: "text-blue-600 bg-blue-600/10 border-blue-600/20",
    emerald: "text-emerald-600 bg-emerald-600/10 border-emerald-600/20",
    purple: "text-purple-600 bg-purple-600/10 border-purple-600/20",
    rose: "text-rose-600 bg-rose-600/10 border-rose-400/20",
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-8 bg-black/5 border border-black/10 rounded-[32px] hover:bg-black/[0.08] transition-all duration-500 group"
    >
      <div className={`h-12 w-12 rounded-2xl flex items-center justify-center mb-6 border ${colors[color as keyof typeof colors]}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-black">{title}</h3>
      <p className="text-sm text-black/40 leading-relaxed group-hover:text-black/60 transition-colors font-medium">
        {desc}
      </p>
    </motion.div>
  );
}

function UsersIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>; }
function StarIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>; }
function VideoIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>; }
function SparklesIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3 1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>; }
function BriefcaseIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>; }
function MapPinIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>; }
function ZapIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>; }
function TrophyIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>; }

