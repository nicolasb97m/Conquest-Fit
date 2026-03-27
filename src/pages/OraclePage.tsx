import { motion } from "framer-motion";
import TopBar from "@/components/TopBar";
import BottomNav from "@/components/BottomNav";
import { Send, Flame, Target, Bot } from "lucide-react";
import { useState } from "react";

interface Message {
  id: number;
  sender: "oracle" | "user";
  text: string;
}

const initialMessages: Message[] = [
  {
    id: 1,
    sender: "oracle",
    text: "¡Hola Piloto! Hoy has tenido un rendimiento sobresaliente. Has superado tu meta de pasos en un 12%. ¿Quieres que ajustemos tu rutina de mañana para maximizar tus ganancias de $FIT?",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export default function OraclePage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [processing, setProcessing] = useState(false);

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg: Message = { id: Date.now(), sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setProcessing(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "oracle",
          text: "Analizando tu biometría... He optimizado tu rutina de hipertrofia para mañana. Enfoque en tren superior con 4 series de 8-12 repeticiones. Ganancia estimada: +2.4 $FIT.",
        },
      ]);
      setProcessing(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TopBar />

      {/* Stats bar */}
      <div className="px-4 pb-3 flex gap-3">
        <div className="card-conquest flex-1 p-3 flex items-center gap-2">
          <Flame className="w-4 h-4 text-primary" />
          <div>
            <p className="text-[9px] text-muted-foreground uppercase tracking-wider">Daily Burn</p>
            <p className="text-lg font-bold font-display text-primary">850 <span className="text-[10px] text-muted-foreground">kcal</span></p>
          </div>
        </div>
        <div className="card-conquest flex-1 p-3 flex items-center gap-2">
          <Target className="w-4 h-4 text-accent" />
          <div>
            <p className="text-[9px] text-muted-foreground uppercase tracking-wider">Misión Madre</p>
            <p className="text-lg font-bold font-display text-foreground">64% <span className="text-[10px] text-muted-foreground">completada</span></p>
          </div>
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-3">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.sender === "oracle" && (
              <div className="flex items-start gap-2 max-w-[85%]">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Bot className="w-3.5 h-3.5 text-accent" />
                </div>
                <div>
                  <p className="text-[10px] text-accent font-semibold mb-1 font-display">ORÁCULO V.4</p>
                  <div className="bg-secondary/60 rounded-2xl rounded-tl-sm p-3">
                    <p className="text-sm text-foreground leading-relaxed">{msg.text}</p>
                  </div>
                </div>
              </div>
            )}
            {msg.sender === "user" && (
              <div className="max-w-[80%] bg-primary/15 border border-primary/20 rounded-2xl rounded-tr-sm p-3">
                <p className="text-sm text-foreground">{msg.text}</p>
              </div>
            )}
          </motion.div>
        ))}

        {processing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2"
          >
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center">
              <Bot className="w-3.5 h-3.5 text-accent" />
            </div>
            <div className="bg-secondary/60 rounded-2xl rounded-tl-sm px-4 py-3 space-y-2">
              <p className="text-[10px] text-accent font-display animate-pulse">PROCESANDO BIOMETRÍA...</p>
              <div className="h-1 w-32 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "70%" }}
                  transition={{ duration: 2 }}
                />
              </div>
              <p className="text-[9px] text-muted-foreground">TRANSMISIÓN DE COMANDO...</p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Input */}
      <div className="px-4 pb-20 pt-2">
        <div className="card-conquest flex items-center gap-2 p-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Sí, optimiza mi rutina para hipertrofia"
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none px-2"
          />
          <button
            onClick={sendMessage}
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
          >
            <Send className="w-4 h-4 text-primary-foreground" />
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
