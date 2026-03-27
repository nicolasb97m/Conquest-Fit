import { motion, type Easing } from "framer-motion";
import TopBar from "@/components/TopBar";
import BottomNav from "@/components/BottomNav";
import { Camera, Upload, Clock, Apple, User } from "lucide-react";

const easeOut: Easing = "easeOut";
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } },
};

const history = [
  { name: "Cena Mediterránea", time: "Hace 2h", cals: "420 kcal", avatar: "CM" },
  { name: "Snack Proteico", time: "Hace 5h", cals: "180 kcal", avatar: "SP" },
  { name: "Almuerzo Fit", time: "Ayer", cals: "550 kcal", avatar: "AF" },
];

export default function NutritionPage() {
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
            SUBIR EVIDENCIA NUTRICIONAL
          </h1>
          <span className="text-[10px] bg-accent/20 text-accent px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">
            IA Activa
          </span>
        </motion.div>

        {/* Scan plate */}
        <motion.div variants={fadeUp} className="card-conquest p-8 flex flex-col items-center gap-4">
          <h3 className="font-display text-sm font-bold text-foreground">Escanear Plato</h3>
          <p className="text-xs text-muted-foreground text-center max-w-xs">
            Captura una foto de tu plato y el IA Oracle analizará el contenido nutricional automáticamente
          </p>
          <div className="w-20 h-20 rounded-full border-2 border-dashed border-primary/30 flex items-center justify-center">
            <Camera className="w-8 h-8 text-primary/50" />
          </div>
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
            Subir Foto
          </button>
        </motion.div>

        {/* Analysis in real time */}
        <motion.div variants={fadeUp}>
          <h3 className="font-display text-xs tracking-widest text-muted-foreground uppercase flex items-center gap-2">
            <Clock className="w-3 h-3" />
            Análisis en Tiempo Real
          </h3>
        </motion.div>

        {/* Macros placeholder */}
        <motion.div variants={fadeUp} className="grid grid-cols-3 gap-3">
          {[
            { label: "Proteína", value: "—", unit: "g" },
            { label: "Carbos", value: "—", unit: "g" },
            { label: "Grasas", value: "—", unit: "g" },
          ].map((m) => (
            <div key={m.label} className="card-conquest p-3 text-center">
              <p className="text-[9px] text-muted-foreground uppercase tracking-wider">{m.label}</p>
              <p className="text-lg font-bold font-display text-foreground">{m.value}</p>
            </div>
          ))}
        </motion.div>

        {/* Consumption history */}
        <motion.div variants={fadeUp} className="space-y-3">
          <h3 className="font-display text-xs tracking-widest text-muted-foreground uppercase">
            Historial de Consumo
          </h3>
          {history.map((h) => (
            <div key={h.name} className="card-conquest p-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-xs font-bold text-foreground">
                {h.avatar}
              </div>
              <div className="flex-1">
                <span className="text-sm font-semibold text-foreground">{h.name}</span>
                <p className="text-[10px] text-muted-foreground">{h.time}</p>
              </div>
              <span className="text-xs font-bold text-primary font-display">{h.cals}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <BottomNav />
    </div>
  );
}
