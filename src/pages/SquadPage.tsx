import { motion, type Easing } from "framer-motion";
import TopBar from "@/components/TopBar";
import BottomNav from "@/components/BottomNav";
import { Shield, Trophy, Users, Star, Crown } from "lucide-react";

const easeOut: Easing = "easeOut";
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } },
};

const members = [
  { name: "Alpha_Gunter", role: "Líder", xp: "15,200", avatar: "AG" },
  { name: "Zara_G_Pulse", role: "Co-Líder", xp: "12,400", avatar: "ZG" },
  { name: "IRox_Runner90", role: "Miembro", xp: "9,800", avatar: "IR" },
  { name: "Kaelan_D0d0", role: "Miembro", xp: "8,500", avatar: "KD" },
];

const objectives = [
  { label: "Meta 100% Pasos Diarios", progress: 78 },
  { label: "Streak Grupal 30 días", progress: 45 },
];

export default function SquadPage() {
  return (
    <div className="min-h-screen bg-background safe-bottom">
      <TopBar />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="px-4 pb-24 space-y-5"
      >
        {/* Squad Header */}
        <motion.div variants={fadeUp} className="card-conquest p-5 space-y-3">
          <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Escuadrón Activo</span>
          <h1 className="font-display text-2xl font-bold text-foreground flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" />
            Alpha Legion
          </h1>
          <p className="text-xs text-muted-foreground">4 Miembros Activos / 6 Cupo Máximo</p>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="bg-secondary/50 rounded-lg p-3 text-center">
              <p className="text-[9px] text-muted-foreground uppercase tracking-wider">XP Total</p>
              <p className="text-lg font-bold font-display text-foreground">42,850 <span className="text-[10px] text-primary">XP</span></p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-3 text-center">
              <p className="text-[9px] text-muted-foreground uppercase tracking-wider">The Pot</p>
              <p className="text-lg font-bold font-display text-foreground">1,240.00</p>
            </div>
          </div>

          <div className="flex gap-2 pt-1">
            <button className="flex-1 bg-primary text-primary-foreground py-2 rounded-lg text-xs font-bold uppercase tracking-wider">
              Invitar
            </button>
            <button className="flex-1 card-conquest py-2 text-center text-xs font-semibold text-foreground">
              Configurar
            </button>
          </div>
        </motion.div>

        {/* Ranking */}
        <motion.div variants={fadeUp}>
          <h2 className="font-display text-sm tracking-widest text-foreground uppercase mb-3 flex items-center gap-2">
            <Crown className="w-4 h-4 text-primary" />
            Ranking General
          </h2>
          <div className="card-conquest p-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Trophy className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Posición Global</p>
                <p className="text-[10px] text-muted-foreground">Top 5% de escuadrones</p>
              </div>
            </div>
            <span className="text-2xl font-bold font-display text-primary">#15</span>
          </div>
        </motion.div>

        {/* Members */}
        <motion.div variants={fadeUp} className="space-y-3">
          <h2 className="font-display text-sm tracking-widest text-foreground uppercase flex items-center gap-2">
            <Users className="w-4 h-4 text-accent" />
            Miembros
          </h2>
          {members.map((m) => (
            <div key={m.name} className="card-conquest p-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 flex items-center justify-center text-xs font-bold text-foreground">
                {m.avatar}
              </div>
              <div className="flex-1">
                <span className="text-sm font-semibold text-foreground">{m.name}</span>
                <p className="text-[10px] text-muted-foreground">{m.role}</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-primary font-display">{m.xp}</span>
                <p className="text-[9px] text-muted-foreground">XP</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Objectives */}
        <motion.div variants={fadeUp} className="space-y-3">
          <h2 className="font-display text-sm tracking-widest text-foreground uppercase flex items-center gap-2">
            <Star className="w-4 h-4 text-primary" />
            Objetivos de Equipo
          </h2>
          {objectives.map((obj) => (
            <div key={obj.label} className="card-conquest p-3 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">{obj.label}</span>
                <span className="text-xs font-bold text-primary font-display">{obj.progress}%</span>
              </div>
              <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${obj.progress}%` }}
                  transition={{ duration: 1, ease: easeOut }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <BottomNav />
    </div>
  );
}
