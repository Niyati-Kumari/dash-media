"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";

type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
};

function AiIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="13" cy="13" r="12" fill="#1e3a8a" />
      <rect x="8" y="11" width="3.5" height="2.5" rx="1" fill="#93c5fd" />
      <rect x="14.5" y="11" width="3.5" height="2.5" rx="1" fill="#93c5fd" />
      <path d="M9.5 16 Q13 18.5 16.5 16" stroke="#93c5fd" strokeWidth="1" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupDone, setPopupDone] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm Harry, DashMedia's AI assistant. How can we help you today?",
      sender: "bot",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const showTimer = setTimeout(() => setShowPopup(true), 1000);
    const hideTimer = setTimeout(() => {
      setShowPopup(false);
      setTimeout(() => setPopupDone(true), 500);
    }, 6000);
    return () => { clearTimeout(showTimer); clearTimeout(hideTimer); };
  }, []);

  useEffect(() => {
    if (isOpen) messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen, isTyping]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue;
    const currentHistory = [...messages];
    setMessages((prev) => [...prev, { id: Date.now().toString(), text: userText, sender: "user" }]);
    setInputValue("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText, history: currentHistory.slice(-5) }),
      });
      const data = await response.json();
      setMessages((prev) => [...prev, {
        id: (Date.now() + 1).toString(),
        text: data.reply || "Sorry, I am having trouble connecting right now.",
        sender: "bot",
      }]);
    } catch {
      setMessages((prev) => [...prev, {
        id: (Date.now() + 1).toString(),
        text: "I'm having trouble connecting right now. Please try again.",
        sender: "bot",
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleOpenChat = () => { setShowPopup(false); setIsOpen(true); };

  return (
    <>
      <motion.div
        className="fixed bottom-5 z-50 flex flex-col items-end"
        animate={{
          right: popupDone && !isOpen && !showPopup
            ? typeof window !== "undefined" && window.innerWidth < 640 ? -28 : 20
            : 16,
        }}
        transition={{ duration: 0.5, ease: [0.32, 0, 0.67, 0] }}
      >
        {/* ── Chat Window ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="mb-3 w-[300px] sm:w-[340px] h-[400px] sm:h-[440px] flex flex-col overflow-hidden rounded-2xl"
              style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.1)" }}
            >
              {/* Header — dark navy for contrast */}
              <div className="shrink-0 px-4 py-3 flex items-center justify-between bg-[#0f172a]">
                <div className="flex items-center gap-2.5">
                  <div className="relative">
                    <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center">
                      <AiIcon />
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-[#0f172a]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Harry · DashMedia AI</p>
                    <p className="text-green-400 text-[10px] uppercase tracking-widest font-mono">● Online</p>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)}
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <X size={14} className="text-white" />
                </button>
              </div>

              {/* Messages — white background for max contrast */}
              <div className="flex-1 overflow-y-auto bg-gray-50 px-4 py-3 flex flex-col gap-3">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-2 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {msg.sender === "bot" && (
                      <div className="shrink-0 w-7 h-7 rounded-full bg-[#1e3a8a] flex items-center justify-center mt-0.5">
                        <span className="text-white text-[9px] font-black">AI</span>
                      </div>
                    )}
                    <div className={`max-w-[80%] px-3 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-blue-600 text-white rounded-tr-sm"
                        : "bg-white text-gray-800 rounded-tl-sm shadow-sm border border-gray-100"
                    }`}>
                      {msg.text}
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-2">
                    <div className="shrink-0 w-7 h-7 rounded-full bg-[#1e3a8a] flex items-center justify-center">
                      <span className="text-white text-[9px] font-black">AI</span>
                    </div>
                    <div className="bg-white border border-gray-100 shadow-sm rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5">
                      {[0, 150, 300].map((delay) => (
                        <div key={delay} className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce"
                          style={{ animationDelay: `${delay}ms` }} />
                      ))}
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input — white footer */}
              <div className="shrink-0 bg-white border-t border-gray-100 px-3 py-3">
                <form onSubmit={handleSend}
                  className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500/30 transition-all">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask about DashMedia..."
                    className="flex-1 bg-transparent text-gray-800 text-sm outline-none placeholder:text-gray-400 min-w-0"
                  />
                  <motion.button
                    type="submit"
                    disabled={!inputValue.trim() || isTyping}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-700 disabled:opacity-40 flex items-center justify-center shrink-0 transition-colors"
                  >
                    <Send size={13} className="text-white ml-0.5" />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Welcome Tooltip ── */}
        <AnimatePresence>
          {showPopup && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.92 }}
              transition={{ duration: 0.3 }}
              onClick={handleOpenChat}
              className="mb-3 mr-1 cursor-pointer bg-white rounded-2xl rounded-br-sm px-4 py-3 w-[190px] sm:w-[210px] relative"
              style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.25)" }}
            >
              <div className="absolute -bottom-[5px] right-4 w-3 h-3 bg-white rotate-45 rounded-sm" />
              <p className="text-[9px] font-bold text-blue-600 uppercase tracking-widest mb-1">DashMedia AI</p>
              <p className="text-gray-800 text-xs font-semibold leading-snug">
                👋 Hey! I&apos;m <span className="text-blue-600">Harry</span>. Ask me anything!
              </p>
              <p className="text-gray-400 text-[9px] mt-1.5">Tap to chat →</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── FAB — bright white button ── */}
        <motion.button
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.93 }}
          onClick={() => isOpen ? setIsOpen(false) : handleOpenChat()}
          aria-label="Open DashMedia AI Chat"
          className="w-14 h-14 rounded-full bg-white flex items-center justify-center"
          style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)" }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close"
                initial={{ opacity: 0, rotate: -45, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.6 }}
                transition={{ duration: 0.15 }}
              >
                <X size={22} className="text-gray-800" />
              </motion.div>
            ) : (
              <motion.div key="face"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.15 }}
              >
                {/* Minimal dark AI face on white background */}
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="14" fill="#0f172a" />
                  {/* Eyes */}
                  <rect x="9" y="13.5" width="4" height="3" rx="1.2" fill="#60a5fa" />
                  <rect x="19" y="13.5" width="4" height="3" rx="1.2" fill="#60a5fa" />
                  {/* Smile */}
                  <path d="M11 20 Q16 23.5 21 20" stroke="#60a5fa" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                  {/* Eyebrows */}
                  <path d="M9.5 11.5 Q11 10.5 13 11.5" stroke="#93c5fd" strokeWidth="0.8" strokeLinecap="round" fill="none" />
                  <path d="M19 11.5 Q21 10.5 22.5 11.5" stroke="#93c5fd" strokeWidth="0.8" strokeLinecap="round" fill="none" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>
    </>
  );
}
