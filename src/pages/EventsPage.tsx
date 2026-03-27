import { motion } from "framer-motion";
import TopBar from "@/components/TopBar";
import BottomNav from "@/components/BottomNav";
import { Mountain, Shield, Swords, Trophy, Star, Flame } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const achievements = [
  { label: "MULTIPLICADOR BASE", value: "x2", icon: Flame, color: "text-primary" },
  { label: "MULTIPLICACIÓN ÉLITE", value: "x5", icon: Star, color: "text-accent" },
  { label: "VAMPIROS DERROTADOS", value: "12", icon: Swords, color: "text-primary" },
  { label: "PROTOCOLOS COMPLETADOS", value: "8", icon: Shield, color: "text-accent" },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background safe-bottom">
      <TopBar />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="px-4 pb-24 space-y-5"
      >
        {/* Featured Event Hero */}
        <motion.div variants={fadeUp} className="card-conquest overflow-hidden relative">
          <div className="h-44 bg-gradient-to-br from-orange-900/40 via-background to-accent/10 flex items-center justify-center relative">
            <Mountain className="w-24 h-24 text-primary/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          </div>
          <div className="p-4 space-y-2 relative">
            <div className="flex items-center gap-2">
              <span className="bg-primary/20 text-primary text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                Conquistando
              </span>
              <span className="text-xs text-muted-foreground">Etapa en Q6 fahr</span>
            </div>
            <h2 className="font-display text-xl font-bold text-foreground">
              CUMBRE DE LOS ANDES
            </h2>
          </div>
        </motion.div>

        {/* Level */}
        <motion.div variants={fadeUp} className="flex items-center justify-between">
          <div>
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Nivel Actual</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold font-display text-foreground">14</span>
              <span className="text-xs text-primary font-display">CONQUISTADOR</span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-sm font-display text-foreground">14,250</span>
            <span className="text-xs text-muted-foreground"> / 25,900 XP</span>
          </div>
        </motion.div>

        {/* XP progress bar */}
        <motion.div variants={fadeUp}>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "55%" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div variants={fadeUp}>
          <div className="grid grid-cols-2 gap-3">
            {achievements.map((a) => (
              <div key={a.label} className="card-conquest p-3 flex flex-col gap-1">
                <a.icon className={`w-4 h-4 ${a.color}`} />
                <span className="text-lg font-bold font-display text-foreground">{a.value}</span>
                <span className="text-[9px] text-muted-foreground uppercase tracking-wider leading-tight">
                  {a.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Rewards */}
        <motion.div variants={fadeUp} className="space-y-3">
          <div className="card-conquest p-3 flex items-center gap-3 bg-primary/5 border-primary/30">
            <Trophy className="w-5 h-5 text-primary" />
            <div className="flex-1">
              <span className="text-sm font-semibold text-foreground">Medalla Élite</span>
              <p className="text-[10px] text-muted-foreground">Recompensa Global - Beta Conquista</p>
            </div>
          </div>
          <div className="card-conquest p-3 flex items-center gap-3 bg-accent/5 border-accent/30">
            <Star className="w-5 h-5 text-accent" />
            <div className="flex-1">
              <span className="text-sm font-semibold text-foreground">Título de Élite</span>
              <p className="text-[10px] text-muted-foreground">Desbloqueado - Nivel 14</p>
            </div>
          </div>
        </motion.div>

        {/* Mobilize button */}
        <motion.div variants={fadeUp}>
          <button className="w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-3.5 rounded-xl font-display text-sm font-bold tracking-wider flex items-center justify-center gap-2 glow-orange">
            MOVILIZAR PASE ÉLITE
            <span className="bg-primary-foreground/20 px-2 py-0.5 rounded text-[10px]">MINT</span>
          </button>
        </motion.div>
      </motion.div>

      <BottomNav />
    </div>
  );
}
