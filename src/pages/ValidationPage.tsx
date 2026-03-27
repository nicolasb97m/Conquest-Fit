import { motion, type Easing } from "framer-motion";
import TopBar from "@/components/TopBar";
import BottomNav from "@/components/BottomNav";
import { ShieldCheck, Clock, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const easeOut: Easing = "easeOut";
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } },
};

const evidence = [
  { name: "IRox_Runner90", routine: "Pierna de Acero", status: "validando", time: "Hace 3 min" },
  { name: "ZenMaster_K", routine: "Cardio Extremo", status: "aprobado", time: "Hace 12 min" },
  { name: "Valkyrie_3P", routine: "Full Body Web3", status: "pendiente", time: "Hace 25 min" },
];

export default function ValidationPage() {
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
            Centro de Validación
          </h1>
          <p className="text-xs text-muted-foreground mt-1">
            El motor IA+Web3 verifica la autenticidad y esfuerzo real de cada entrenamiento
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div variants={fadeUp} className="flex gap-3">
          <div className="card-conquest flex-1 p-3">
            <p className="text-[9px] text-muted-foreground uppercase tracking-wider">Validaciones Hoy</p>
            <p className="text-xl font-bold font-display text-foreground">
              12.03 <span className="text-xs text-primary">$FIT</span>
            </p>
          </div>
          <div className="card-conquest flex-1 p-3">
            <p className="text-[9px] text-muted-foreground uppercase tracking-wider">Score Oracle</p>
            <p className="text-xl font-bold font-display text-foreground">
              88.2<span className="text-xs text-muted-foreground">%</span>
            </p>
          </div>
        </motion.div>

        {/* Progress */}
        <motion.div variants={fadeUp}>
          <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "88%" }}
              transition={{ duration: 1.2, ease: easeOut }}
            />
          </div>
        </motion.div>

        {/* Evidence Queue */}
        <motion.div variants={fadeUp} className="space-y-3">
          <h3 className="font-display text-xs tracking-widest text-muted-foreground uppercase flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-primary" />
            Evidencia en Espera
          </h3>
          {evidence.map((e) => (
            <div key={e.name} className="card-conquest p-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-xs font-bold text-foreground">{e.name.charAt(0)}</span>
              </div>
              <div className="flex-1">
                <span className="text-sm font-semibold text-foreground">{e.name}</span>
                <p className="text-[10px] text-muted-foreground">{e.time}</p>
              </div>
              <div className="flex items-center gap-1">
                {e.status === "validando" && <Loader2 className="w-3.5 h-3.5 text-primary animate-spin" />}
                {e.status === "aprobado" && <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />}
                {e.status === "pendiente" && <Clock className="w-3.5 h-3.5 text-muted-foreground" />}
                <span className={`text-[10px] uppercase tracking-wider font-semibold ${
                  e.status === "aprobado" ? "text-green-400" :
                  e.status === "validando" ? "text-primary" : "text-muted-foreground"
                }`}>{e.status}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Current routine being validated */}
        <motion.div variants={fadeUp} className="card-conquest overflow-hidden">
          <div className="p-4 space-y-2">
            <h3 className="font-display text-sm font-bold text-foreground">
              Rutina: Pierna de Acero
            </h3>
            <div className="flex gap-2">
              <span className="text-[9px] bg-primary/20 text-primary px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">
                Validación
              </span>
              <span className="text-[9px] bg-accent/20 text-accent px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">
                Aprobado
              </span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-sm font-display text-foreground">-0.45</span>
              <span className="text-xs text-muted-foreground">Grasa corporal %</span>
              <div className="flex-1" />
              <span className="text-[10px] text-muted-foreground">5 Días</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <BottomNav />
    </div>
  );
}
