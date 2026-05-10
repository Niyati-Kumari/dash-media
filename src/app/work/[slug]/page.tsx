"use client";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Header from "@/components/Header";

const PROJECTS = {
  "imedi-health": {
    title: "IMEDI.HEALTH",
    category: "Digital Health / AI",
    description: "Building a cinematic digital platform for AI-driven healthcare solutions. We transformed IMEDI.HEALTH's brand identity into a futuristic, user-centric experience that communicates trust and technical excellence.",
    video: "https://www.datocms-assets.com/157026/1750263169-ai-strategy-tools.mp4",
    stat1: "99.9% Uptime",
    stat2: "+40% Engagement",
    details: "Focusing on complex data visualization and seamless doctor-patient interactions."
  },
  "thrive": {
    title: "THRIVE",
    category: "Fintech / Branding",
    description: "Redefining high-growth fintech through minimalist motion design. THRIVE's digital ecosystem was redesigned to handle rapid scale while maintaining a premium, approachable brand voice.",
    video: "https://www.datocms-assets.com/157026/1750188557-productinnovation-travel.mp4",
    stat1: "$2B+ Processed",
    stat2: "1M+ Users",
    details: "Implementation of secure transaction flows and real-time portfolio tracking."
  },
  "purbi": {
    title: "PURBI",
    category: "Global Logistics",
    description: "Architecting a global logistics interface for the modern age. PURBI's new platform streamlines supply chain tracking through intuitive UX and high-performance data processing.",
    video: "https://www.datocms-assets.com/157026/1750877302-brand-motion.mp4",
    stat1: "150+ Countries",
    stat2: "-30% Latency",
    details: "Custom-built real-time tracking engine with offline synchronization capabilities."
  },
  "ap-talent": {
    title: "AP Talent",
    category: "HR Tech / UX",
    description: "Humanizing recruitment tech through immersive digital storytelling. We built a platform that connects world-class talent with elite opportunities through a sophisticated, design-led interface.",
    video: "https://www.datocms-assets.com/157026/1744201877-art-basel.mp4",
    stat1: "50k+ Placements",
    stat2: "Top 1% Talent",
    details: "Sophisticated matching algorithms paired with an elegant candidate experience."
  },
  "pickleberry": {
    title: "Pickleberry",
    category: "E-commerce / Motion",
    description: "Capturing the soul of a homegrown brand on a global stage. Pickleberry's e-commerce experience combines high-end product photography with playful, cinematic motion design.",
    video: "https://www.datocms-assets.com/157026/1767811706-upscaled-high-2.mp4",
    stat1: "300% Sales Growth",
    stat2: "4.9/5 Rating",
    details: "Highly optimized mobile-first shopping experience with custom checkout flows."
  },
  "healthcare-24hr": {
    title: "Healthcare 24hr",
    category: "Mobile / Platform",
    description: "Engineering an emergency response platform for the 24/7 economy. This mission-critical application provides instantaneous access to medical support through a rock-solid technical architecture.",
    video: "https://www.datocms-assets.com/157026/1778177871-hero.mp4",
    stat1: "2sec Response",
    stat2: "24/7 Availability",
    details: "Robust cloud infrastructure designed for absolute reliability and zero downtime."
  }
};

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = PROJECTS[slug as keyof typeof PROJECTS];

  if (!project) return <div className="bg-black h-screen flex items-center justify-center text-white">Project not found</div>;

  return (
    <main className="bg-[#050505] text-white min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <video autoPlay muted loop playsInline className="h-full w-full object-cover">
          <source src={project.video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="absolute bottom-12 left-8 md:left-16 z-10">
          <motion.h4 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-white/50 font-mono text-sm uppercase tracking-[0.4em] mb-4"
          >
            {project.category}
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-[8vw] font-black tracking-tighter leading-none uppercase"
          >
            {project.title}
          </motion.h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 md:px-16 py-16 md:py-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
        <div className="md:col-span-2">
          <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-8 uppercase tracking-tight">The Vision</h2>
          <p className="text-lg md:text-2xl text-white/70 leading-relaxed font-light">
            {project.description}
          </p>
          <div className="mt-10 md:mt-12 p-6 md:p-8 border border-white/10 rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-md">
             <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-4">Technical Spotlight</h4>
             <p className="text-base md:text-lg text-white/80">{project.details}</p>
          </div>
        </div>

        <div className="flex flex-col gap-10 md:gap-12">
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">Impact</h4>
            <p className="text-3xl md:text-5xl font-black text-white">{project.stat1}</p>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">Growth</h4>
            <p className="text-3xl md:text-5xl font-black text-white">{project.stat2}</p>
          </div>
          <div className="pt-10 md:pt-12 border-t border-white/10">
            <a 
              href="/#work"
              className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
              Back to Work
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
