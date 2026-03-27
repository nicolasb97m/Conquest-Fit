import { motion, type Easing } from "framer-motion";
import TopBar from "@/components/TopBar";
import BottomNav from "@/components/BottomNav";
import { RefreshCw, Dumbbell, Flame } from "lucide-react";

const easeOut: Easing = "easeOut";
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } },
};

const routines = [
  {
    name: "Resistencia Cordillera",
    tags: ["Cardio", "Resistencia"],
    price: "$12.50",
    originalPrice: "$917",
    fit: "0.5 $FIT",
  },
  {
    name: "Movilidad Bio-Sync",
    tags: ["Flexibilidad", "Recovery"],
    price: "$8.00",
    originalPrice: "$500",
    fit: "0.3 $FIT",
  },
];

export default function RoutinesPage() {
  return (
    <div className="min-h-screen bg-background safe-bottom">
      <TopBar />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="px-4 pb-24 space-y-5"
      >
        <motion.div variants={fadeUp}>
          <h1 className="font-display text-xl font-bold text-foreground">
            Biblioteca de Rutinas
          </h1>
          <p className="text-xs text-muted-foreground mt-1">
            Explora la programación de entrenamiento validadas por el Sistema ConquestFit IA+Web3
          </p>
        </motion.div>

        {/* Upload routine */}
        <motion.div variants={fadeUp} className="card-conquest p-6 flex flex-col items-center gap-3">
          <RefreshCw className="w-8 h-8 text-muted-foreground" />
          <span className="text-xs text-muted-foreground uppercase tracking-wider">
            Cargar nueva rutina
          </span>
        </motion.div>

        {/* Active Routines */}
        <motion.div variants={fadeUp}>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-display text-sm font-bold text-foreground">
              Mis Rutinas Activas
            </h2>
            <span className="text-[10px] text-muted-foreground">3 Protocolos Activos</span>
          </div>

          {/* Progress bars */}
          <div className="space-y-2 mb-4">
            {[75, 45, 20].map((pct, i) => (
              <div key={i} className="space-y-1">
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 1, delay: i * 0.2, ease: easeOut }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Routine cards */}
        <motion.div variants={fadeUp} className="space-y-3">
          {routines.map((r) => (
            <div key={r.name} className="card-conquest overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-primary/10 via-secondary to-accent/10 flex items-center justify-center">
                <Dumbbell className="w-12 h-12 text-primary/30" />
              </div>
              <div className="p-4 space-y-3">
                <h3 className="font-display text-sm font-bold text-foreground">{r.name}</h3>
                <div className="flex gap-2">
                  {r.tags.map((tag) => (
                    <span key={tag} className="text-[9px] bg-secondary text-muted-foreground px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary font-display">{r.price}</span>
                    <span className="text-xs text-muted-foreground line-through">{r.originalPrice}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Flame className="w-3 h-3 text-primary" />
                    <span className="text-xs text-primary font-semibold">{r.fit}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <BottomNav />
    </div>
  );
}
