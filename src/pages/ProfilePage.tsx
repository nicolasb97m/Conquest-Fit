import { motion, type Easing } from "framer-motion";
import { useNavigate } from "react-router-dom";
import TopBar from "@/components/TopBar";
import BottomNav from "@/components/BottomNav";
import { Settings, Bluetooth, Map, Database, Shield, ExternalLink, CheckCircle2, Activity, Users } from "lucide-react";

const easeOut: Easing = "easeOut";
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } },
};

const operations = [
  { label: "Configurar Bio-Sync", desc: "SINCRONIZACIÓN A.G.E", icon: Bluetooth, color: "from-primary/20 to-accent/10", path: "/biometrics" },
  { label: "Plan de Batalla", desc: "TEMPORADA EN RACHA", icon: Map, color: "from-accent/20 to-primary/10", path: "/routines" },
  { label: "Mi Escuadrón", desc: "4 PILOTOS ACTIVOS", icon: Shield, color: "from-primary/20 to-primary/5", path: "/squad" },
  { label: "Datos del Conquistador", desc: "TEMPORADAS REGISTRADAS", icon: Database, color: "from-accent/20 to-accent/5", path: "/settings" },
];

export default function ProfilePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background safe-bottom">
      <TopBar />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="px-4 pb-24 space-y-5"
      >
        <motion.div variants={fadeUp} className="flex items-center justify-between">
          <h2 className="font-display text-sm tracking-widest text-foreground uppercase">
            Operaciones Tácticas
          </h2>
          <button onClick={() => navigate("/settings")}>
            <Settings className="w-5 h-5 text-muted-foreground" />
          </button>
        </motion.div>

        <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3">
          {operations.map((op) => (
            <button
              key={op.label}
              onClick={() => navigate(op.path)}
              className="card-conquest p-4 flex flex-col gap-3 hover:border-primary/30 transition-colors text-left"
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${op.color} flex items-center justify-center`}>
                <op.icon className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">{op.label}</h4>
                <p className="text-[9px] text-muted-foreground uppercase tracking-wider mt-0.5">{op.desc}</p>
              </div>
            </button>
          ))}
        </motion.div>

        <motion.div variants={fadeUp}>
          <div className="card-conquest p-4 flex items-center gap-3 border-green-500/20">
            <CheckCircle2 className="w-5 h-5 text-green-400" />
            <div className="flex-1">
              <span className="text-sm font-semibold text-foreground">HCS VERIFIED ACCOUNT</span>
              <p className="text-[10px] text-muted-foreground">Identidad verificada en Hedera Consensus Service</p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <div className="card-conquest p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
              <span className="text-lg font-bold font-display text-foreground">ℏ</span>
            </div>
            <div className="flex-1">
              <span className="text-sm font-semibold text-foreground">Hedera</span>
              <p className="text-[10px] text-muted-foreground">Todos los registros son inmutables y verificables</p>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground" />
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <button className="w-full card-conquest py-3.5 flex items-center justify-center gap-2 hover:border-primary/50 transition-colors">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-[10px] text-primary-foreground font-bold">W</span>
            </div>
            <span className="text-sm font-semibold text-foreground">Conectar HashPack / Blade Wallet</span>
          </button>
        </motion.div>

        <motion.div variants={fadeUp} className="space-y-2">
          <h3 className="text-xs text-muted-foreground uppercase tracking-widest">Historial de Consensus Timestamp</h3>
          {[
            { time: "2024-01-15 08:32:15.442", topic: "0.0.48329 — Proof of Effort" },
            { time: "2024-01-14 19:15:03.221", topic: "0.0.48329 — Challenge Complete" },
            { time: "2024-01-14 06:45:22.118", topic: "0.0.48329 — Stake Deposit" },
          ].map((entry, i) => (
            <div key={i} className="bg-secondary/30 rounded-lg p-3">
              <p className="text-xs font-mono text-muted-foreground">{entry.time}</p>
              <p className="text-xs text-foreground mt-0.5">{entry.topic}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <BottomNav />
    </div>
  );
}
