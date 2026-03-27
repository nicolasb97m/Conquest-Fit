import { motion, type Easing } from "framer-motion";
import TopBar from "@/components/TopBar";
import BottomNav from "@/components/BottomNav";
import { Upload, FileText, Activity } from "lucide-react";
import { useState } from "react";

const easeOut: Easing = "easeOut";
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } },
};

const tabs = ["HIPERTROFIA", "RESISTENCIA", "PÉRDIDA DE GRASA", "MOVILIDAD FUNCIONAL"];

export default function BiometricsPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-background safe-bottom">
      <TopBar />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="px-4 pb-24 space-y-5"
      >
        {/* Biometric Data */}
        <motion.div variants={fadeUp}>
          <h2 className="font-display text-sm tracking-widest text-foreground uppercase flex items-center gap-2">
            <Activity className="w-4 h-4 text-primary" />
            Datos Biométricos
          </h2>
        </motion.div>

        <motion.div variants={fadeUp} className="grid grid-cols-3 gap-3">
          {[
            { label: "EDAD", value: "28", unit: "años" },
            { label: "PESO", value: "76.4", unit: "kg" },
            { label: "ALTURA", value: "182", unit: "cm" },
          ].map((d) => (
            <div key={d.label} className="card-conquest p-3">
              <p className="text-[9px] text-muted-foreground uppercase tracking-wider">{d.label}</p>
              <p className="text-xl font-bold font-display text-foreground">
                {d.value} <span className="text-[10px] text-muted-foreground">{d.unit}</span>
              </p>
            </div>
          ))}
        </motion.div>

        {/* Clinical History */}
        <motion.div variants={fadeUp} className="space-y-3">
          <h2 className="font-display text-sm tracking-widest text-foreground uppercase">
            Historial Clínico
          </h2>
          <button className="card-conquest p-3 w-full flex items-center gap-3 hover:border-primary/30 transition-colors">
            <Upload className="w-5 h-5 text-accent" />
            <div className="text-left">
              <span className="text-sm font-semibold text-foreground">Subir Estudio Clínico</span>
              <p className="text-[10px] text-muted-foreground">Formatos aceptados: PDF, JPG</p>
            </div>
          </button>
          <button className="card-conquest p-3 w-full flex items-center gap-3 hover:border-primary/30 transition-colors">
            <FileText className="w-5 h-5 text-accent" />
            <div className="text-left">
              <span className="text-sm font-semibold text-foreground">Ver Historial Médico</span>
              <p className="text-[10px] text-muted-foreground">Correlación de datos biométricos vs experiencia</p>
            </div>
          </button>
        </motion.div>

        {/* Training Type Tabs */}
        <motion.div variants={fadeUp}>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`whitespace-nowrap text-[9px] px-3 py-1.5 rounded-full uppercase tracking-wider font-bold transition-colors ${
                  i === activeTab
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Body Map */}
        <motion.div variants={fadeUp} className="space-y-3">
          <h2 className="font-display text-sm tracking-widest text-foreground uppercase">
            Limitaciones Físicas
          </h2>
          <div className="card-conquest p-6 flex flex-col items-center">
            {/* Simplified body diagram */}
            <div className="relative w-40 h-64">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 100 180" className="w-full h-full">
                  {/* Head */}
                  <circle cx="50" cy="20" r="12" fill="none" stroke="hsl(var(--conquest-orange))" strokeWidth="1" opacity="0.6" />
                  {/* Body */}
                  <line x1="50" y1="32" x2="50" y2="90" stroke="hsl(var(--conquest-orange))" strokeWidth="1" opacity="0.4" />
                  {/* Arms */}
                  <line x1="50" y1="45" x2="20" y2="75" stroke="hsl(var(--conquest-orange))" strokeWidth="1" opacity="0.4" />
                  <line x1="50" y1="45" x2="80" y2="75" stroke="hsl(var(--conquest-orange))" strokeWidth="1" opacity="0.4" />
                  {/* Legs */}
                  <line x1="50" y1="90" x2="30" y2="150" stroke="hsl(var(--conquest-orange))" strokeWidth="1" opacity="0.4" />
                  <line x1="50" y1="90" x2="70" y2="150" stroke="hsl(var(--conquest-orange))" strokeWidth="1" opacity="0.4" />
                  {/* Highlight zones */}
                  <circle cx="30" cy="70" r="6" fill="hsl(var(--conquest-orange))" opacity="0.3" />
                  <circle cx="35" cy="120" r="6" fill="hsl(var(--destructive))" opacity="0.4" />
                </svg>
              </div>
              {/* Labels */}
              <div className="absolute top-14 -left-2">
                <span className="text-[8px] bg-primary/20 text-primary px-1.5 py-0.5 rounded font-bold">HOMBILLO IZQ</span>
              </div>
              <div className="absolute top-32 -right-4">
                <span className="text-[8px] bg-destructive/20 text-destructive px-1.5 py-0.5 rounded font-bold">RODILLA DER</span>
              </div>
            </div>

            <div className="w-full space-y-2 mt-4">
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Describir Molestia</p>
              <div className="card-conquest p-3">
                <p className="text-xs text-muted-foreground italic">
                  Ej: Dolor punzante al realizar flexión profunda...
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Injury index */}
        <motion.div variants={fadeUp} className="card-conquest p-4 flex items-center justify-between">
          <div>
            <p className="text-[9px] text-muted-foreground uppercase tracking-wider">Índice de Movilidad %</p>
            <p className="text-sm text-muted-foreground mt-0.5">Evaluación biomecánica funcional</p>
          </div>
          <span className="text-3xl font-bold font-display text-primary">64 <span className="text-xs text-muted-foreground">%</span></span>
        </motion.div>

        {/* Sync Button */}
        <motion.div variants={fadeUp}>
          <button className="w-full bg-gradient-to-r from-accent to-accent/80 text-accent-foreground py-3.5 rounded-xl font-display text-sm font-bold tracking-wider glow-blue">
            SYNC BIOMETRY ON HEDERA NETWORK
          </button>
        </motion.div>
      </motion.div>

      <BottomNav />
    </div>
  );
}
