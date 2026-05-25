"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";

const SERVICES_DATA = [
  {
    id: 1,
    title: "Web Application Development",
    description: "End-to-end development of robust, scalable web apps built with modern frameworks and an emphasis on user experience.",
    video: "https://www.datocms-assets.com/157026/1765220548-slow-motion-generative-interfaces-fantasy-interactive.mp4"
  },
  {
    id: 2,
    title: "Server & Cloud Management",
    description: "Expert setup, optimization, and continuous management of secure cloud architectures and servers to ensure 99.9% uptime.",
    video: "https://www.datocms-assets.com/157026/1750263169-ai-strategy-tools.mp4"
  },
  {
    id: 3,
    title: "Data Collection & Analytics",
    description: "Intelligent data pipelines and analytics platforms designed to extract actionable business insights from complex data sets.",
    video: "https://www.datocms-assets.com/157026/1744201877-art-basel.mp4"
  },
  {
    id: 4,
    title: "AI & Chatbots",
    description: "AI-powered solutions including intelligent automation flows and custom chatbots to elevate customer engagement and efficiency.",
    video: "/youtube-bg-2.mp4"
  },
  {
    id: 5,
    title: "API Integration",
    description: "Seamless connection of third-party platforms into your existing ecosystem through secure and efficient API workflows.",
    video: "https://www.datocms-assets.com/157026/1750877302-brand-motion.mp4"
  },
  {
    id: 6,
    title: "Cloud & DevOps Solutions",
    description: "Automated deployment pipelines and infrastructure as code to accelerate secure feature delivery and system scalability.",
    video: "/youtube-bg.mp4"
  }
];

export default function ServicesPage() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end end"] });
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    return scrollYProgress.onChange((v) => {
      const zones = SERVICES_DATA.length;
      const index = Math.min(zones - 1, Math.floor(v * zones));
      if (index !== activeIndex && index >= 0) { setActiveIndex(index); }
    });
  }, [scrollYProgress, activeIndex]);

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-83.33%"]);
  const smoothTextY = useSpring(textY, { stiffness: 80, damping: 25 });

  return (
    <main className="bg-black text-white min-h-screen">
      <Header />
      
      <section ref={targetRef} className="relative h-[700vh] bg-black">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Background Video Layer */}
          <div className="absolute inset-0 z-0">
            <AnimatePresence mode="wait">
              <motion.div 
                key={SERVICES_DATA[activeIndex]?.id || 0} 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                transition={{ duration: 1 }} 
                className="absolute inset-0"
              >
                {SERVICES_DATA[activeIndex] && (
                  <video autoPlay muted loop playsInline className="h-full w-full object-cover">
                    <source src={SERVICES_DATA[activeIndex].video} type="video/mp4" />
                  </video>
                )}
                <div className="absolute inset-0 bg-black/60" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Content Layer */}
          <div className="relative z-10 h-full w-full flex items-center justify-center">
            <div className="max-w-[1400px] w-full px-6 md:px-16 h-[100vh] overflow-hidden">
               <motion.div style={{ y: smoothTextY }} className="flex flex-col h-[600vh]">
                  {SERVICES_DATA.map((item, i) => (
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
                        <h2 className="text-3xl md:text-[5vw] font-black tracking-tighter leading-[0.9] uppercase mb-6">{item.title}</h2>
                        <p className="text-sm md:text-xl text-white/70 max-w-2xl leading-relaxed">{item.description}</p>
                      </motion.div>
                    </div>
                  ))}
               </motion.div>
            </div>
          </div>



          {/* Back to Home Indicator */}
          <div className="absolute bottom-12 left-8 md:left-16 z-20">
            <a 
              href="/#services"
              className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
              Back to Overview
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
