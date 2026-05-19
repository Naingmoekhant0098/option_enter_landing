"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BOT_RESPONSES, getBotResponse, matchIntent } from "../../data/bot_data"; // Export လုပ်ထားတဲ့ Engine နဲ့ Responses ကို ဆွဲသွင်းလိုက်တယ်
import { Bot, MessageCircle } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  options?: string[];
}

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          role: "assistant",
          content: BOT_RESPONSES.start.reply || "",
          options: BOT_RESPONSES.start.nextOptions,
        },
      ]);
    }
  }, [isOpen]);

  const [currentHintIndex, setCurrentHintIndex] = useState(0);

  useEffect(() => {
    if (isOpen) return; 

    const interval = setInterval(() => {
      setCurrentHintIndex((prev) => (prev + 1) % 5);  
    }, 3000);  

    return () => clearInterval(interval);
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = (displayContent: string, searchKeyContent: string) => {
    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: displayContent,
    };
  
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);
  
    setTimeout(() => {
      // 1. Find the intent key (e.g. "ai_chat", "pricing", etc.)
      const targetKey = matchIntent(searchKeyContent);
      
      // 2. ✅ CALL THE WRAPPER FUNCTION INSTEAD OF THE STATIC OBJECT
      // This safely builds your dynamic text answers for questions like "what are you doing"
      const botResponse = getBotResponse(targetKey, searchKeyContent);
  
      if (botResponse) {
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            role: "assistant",
            content: botResponse.reply,       // Now contains real text, never ""
            options: botResponse.nextOptions,
          },
        ]);
      } else {
        // Fallback just in case something fails gracefully
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            role: "assistant",
            content: BOT_RESPONSES.fallback.reply,
            options: BOT_RESPONSES.fallback.nextOptions,
          },
        ]);
      }
      setIsTyping(false);
    }, 500);
  };
  return (
    <div className="fixed bottom-6 right-6 z-50 font-mono">
      <div className="relative flex items-end justify-end select-none">
        {/* <AnimatePresence mode="wait">
          {!isOpen && (
            <div className="absolute bottom-full mb-4 right-0 flex flex-col items-end w-48">
              {[
                "Hi! 👋",
                "Hello! ⌥",
                "Mingalarpar! 🇲🇲",
                "Nay kaung lar nw? 😊",
                "Br koo nyi py ya ma lal? 🤖",
              ].map((text, i) => {
                if (i !== currentHintIndex) return null;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{
                      opacity: 0,
                      y: -10,
                      scale: 0.9,
                      transition: { duration: 0.2 },
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="bg-zinc-950 text-white text-[11px] px-3 py-2 rounded-2xl rounded-tr-none whitespace-nowrap shadow-xl border border-zinc-800 font-sans tracking-wide"
                  >
                    {text}
                  </motion.div>
                );
              })}
            </div>
          )}
        </AnimatePresence> */}

        {!isOpen && (
          <>
            <span className="absolute inline-flex h-14 w-14 rounded-full bg-orange-500 opacity-40 animate-ping" />
            <span className="absolute inline-flex h-14 w-14 rounded-full bg-orange-400 opacity-20 animate-pulse" />
          </>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative h-14 w-14 rounded-full shadow-2xl flex items-center justify-center transform hover:scale-110 active:scale-95 transition duration-300 ease-out z-10 ${
            isOpen ? "bg-zinc-900 text-white" : "bg-orange-500 text-white"
          }`}
        >
          <motion.div
            animate={{
              rotate: isOpen ? 180 : 0,
              scale: isOpen ? 0.9 : [1, 1.06, 1],
            }}
            transition={{
              rotate: { type: "spring", stiffness: 300, damping: 20 },
              scale: isOpen
                ? { duration: 0.2 }
                : { repeat: Infinity, duration: 2, ease: "easeInOut" },
            }}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <Bot />
            )}
          </motion.div>
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-16 right-0 w-80 md:w-96 h-[500px] bg-white border border-zinc-200 rounded-xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="bg-zinc-900 text-white p-4 font-bold text-sm uppercase tracking-wider">
              [Bot] Option Enter Guide
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs">
              {messages.map((m) => (
                <div key={m.id} className="space-y-2">
                  <div
                    className={`p-2.5 rounded-lg max-w-[85%] whitespace-pre-line ${
                      m.role === "user"
                        ? "bg-orange-500/10 text-orange-600 ml-auto"
                        : "bg-zinc-100 text-zinc-800"
                    }`}
                  >
                    <strong>{m.role === "user" ? "You: " : "Bot: "}</strong>
                    {m.content}
                  </div>

                  {/* Options Buttons */}
                  {m.role === "assistant" && m.options && !isTyping && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {m.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => sendMessage(opt, opt)} // ခလုတ်နှိပ်ရင် နာမည်အတိုင်း တန်းပြတန်းရှာမယ်
                          className="bg-zinc-900 text-white border border-zinc-300 px-3 py-1.5 rounded-md hover:bg-orange-500 hover:border-orange-500 transition duration-150 text-[11px]"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex items-center gap-1.5 p-2 bg-zinc-100 text-zinc-500 rounded-lg max-w-[60px] justify-center animate-pulse">
                  <span
                    className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  />
                  <span
                    className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  />
                  <span
                    className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!input.trim() || isTyping) return;
                sendMessage(input, input);
                setInput("");
              }}
              className="p-3 border-t border-zinc-100 flex gap-2 bg-white"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something... (e.g., tech, project)"
                disabled={isTyping}
                className="flex-1 px-3 py-2 text-black bg-zinc-50 border border-zinc-200 rounded-md text-xs focus:outline-none focus:border-orange-500 transition disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isTyping}
                className="bg-zinc-900 text-white px-3 py-2 rounded-md text-xs font-bold hover:bg-orange-500 transition disabled:opacity-50"
              >
                Send
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
