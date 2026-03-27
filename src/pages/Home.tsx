import { motion, type Easing } from "framer-motion";
import TopBar from "@/components/TopBar";
import ProgressRing from "@/components/ProgressRing";
import BottomNav from "@/components/BottomNav";
import { Zap, Heart, CalendarDays, Clock, Trophy } from "lucide-react";

const metrics = [
  { label: "PUNTOS GENERADOS", value: "5.4 kW", icon: Zap },
  { label: "RITMO CARDIACO", value: "142 BPM", icon: Heart },
  { label: "RACHA", value: "12 días", icon: CalendarDays },
  { label: "TIEMPO ACTIVO HOY", value: "54:12", icon: Clock },
];

const leaderboard = [
  { name: "Kaelan_D0d0", rank: 1, xp: "12,450 XP", avatar: "KD" },
  { name: "Zara_G_Pulse", rank: 2, xp: "11,200 XP", avatar: "ZG" },
  { name: "Valkyrie_3P", rank: 3, xp: "10,800 XP", avatar: "V3" },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const easeOut: Easing = "easeOut";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background safe-bottom">
      <TopBar />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="px-4 pb-24 space-y-6"
      >
        {/* Progress Ring */}
        <motion.div variants={fadeUp} className="flex justify-center py-4">
          <ProgressRing percentage={72} />
        </motion.div>

        {/* Metrics Grid */}
        <motion.div variants={fadeUp}>
          <h2 className="font-display text-sm tracking-widest text-foreground mb-3">
            MÉTRICAS PERSONALES
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {metrics.map((m) => (
              <div key={m.label} className="card-conquest p-3 flex flex-col gap-1">
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                  <m.icon className="w-3 h-3" />
                  {m.label}
                </span>
                <span className="text-lg font-bold font-display text-foreground">{m.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Leaderboard */}
        <motion.div variants={fadeUp} className="space-y-3">
          {leaderboard.map((user) => (
            <div key={user.name} className="card-conquest p-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/80 to-accent/80 flex items-center justify-center text-primary-foreground text-xs font-bold">
                {user.avatar}
              </div>
              <div className="flex-1">
                <span className="text-sm font-semibold text-foreground">{user.name}</span>
                <div className="flex items-center gap-2 mt-0.5">
                  <Trophy className="w-3 h-3 text-primary" />
                  <span className="text-xs text-muted-foreground">{user.xp}</span>
                </div>
              </div>
              <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-xs font-bold text-primary">{user.rank}</span>
              </div>
            </div>
          ))}
          <button className="w-full text-center text-xs text-primary font-semibold tracking-wider py-2">
            VER TODA LA CLASIFICACIÓN
          </button>
        </motion.div>
      </motion.div>

      <BottomNav />
    </div>
  );
}
