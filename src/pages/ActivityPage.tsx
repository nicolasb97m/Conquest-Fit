import { motion } from "framer-motion";
import TopBar from "@/components/TopBar";
import BottomNav from "@/components/BottomNav";
import { Camera, Video, Upload, Loader2, CheckCircle2, ShieldCheck } from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

type ValidationState = "idle" | "uploading" | "validating" | "validated";

export default function ActivityPage() {
  const [validationState, setValidationState] = useState<ValidationState>("idle");

  const simulateValidation = () => {
    setValidationState("uploading");
    setTimeout(() => setValidationState("validating"), 1500);
    setTimeout(() => setValidationState("validated"), 4000);
  };

  return (
    <div className="min-h-screen bg-background safe-bottom">
      <TopBar />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="px-4 pb-24 space-y-5"
      >
        {/* Oracle Status Card */}
        <motion.div variants={fadeUp} className="card-conquest p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
              Estado del Oráculo
            </span>
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider ${
              validationState === "validated"
                ? "bg-green-500/20 text-green-400"
                : validationState === "validating"
                ? "bg-primary/20 text-primary"
                : "bg-accent/20 text-accent"
            }`}>
              {validationState === "validated" ? "HCS ✓" : 
               validationState === "validating" ? "VALIDANDO..." : "LISTO"}
            </span>
          </div>

          <h2 className="font-display text-lg font-bold text-foreground">
            {validationState === "validating" ? "VALIDACIÓN EN CURSO" : 
             validationState === "validated" ? "VALIDACIÓN COMPLETA" : "VALIDACIÓN EN CURSO"}
          </h2>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-secondary/50 rounded-lg p-3">
              <span className="text-[10px] text-muted-foreground uppercase">Proteína Detectada</span>
              <p className="text-xl font-bold font-display text-foreground">32.4 <span className="text-xs text-muted-foreground">g</span></p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-3">
              <span className="text-[10px] text-muted-foreground uppercase">Puntos de Esfuerzo</span>
              <p className="text-xl font-bold font-display text-foreground">98.4 <span className="text-xs text-muted-foreground">pts</span></p>
            </div>
          </div>

          {/* Validation progress bar */}
          {(validationState === "uploading" || validationState === "validating") && (
            <div className="space-y-2">
              <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: validationState === "uploading" ? "40%" : "85%" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </div>
              <div className="flex items-center gap-2">
                <Loader2 className="w-3 h-3 text-primary animate-spin" />
                <span className="text-xs text-muted-foreground">
                  {validationState === "uploading" ? "Subiendo evidencia..." : "Validando con IA Oracle..."}
                </span>
              </div>
            </div>
          )}

          {validationState === "validated" && (
            <div className="flex items-center gap-2 bg-green-500/10 rounded-lg p-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span className="text-xs text-green-400 font-medium">
                Proof of Effort registrado en Hedera HCS
              </span>
            </div>
          )}
        </motion.div>

        {/* Evidence Channels */}
        <motion.div variants={fadeUp}>
          <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-primary" />
            Canales de Evidencia
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={simulateValidation}
              className="card-conquest p-6 flex flex-col items-center gap-3 hover:border-primary/50 transition-colors"
            >
              <Camera className="w-8 h-8 text-muted-foreground" />
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Cámara</span>
            </button>
            <button
              onClick={simulateValidation}
              className="card-conquest p-6 flex flex-col items-center gap-3 hover:border-primary/50 transition-colors"
            >
              <Video className="w-8 h-8 text-muted-foreground" />
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Video</span>
            </button>
          </div>
        </motion.div>

        {/* Active Protocols */}
        <motion.div variants={fadeUp}>
          <h3 className="text-sm font-semibold text-foreground mb-3">
            Protocolos Activos
          </h3>
          <div className="card-conquest overflow-hidden">
            <div className="h-40 bg-gradient-to-br from-secondary to-background flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              <span className="text-6xl">🏋️</span>
            </div>
            <div className="p-4 space-y-3">
              <h4 className="font-display text-sm font-bold">Protocolo Hipertrofia lllWeb3</h4>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span className="text-lg font-bold text-primary font-display">$20.50</span>
                  <span className="text-xs text-muted-foreground line-through">$917</span>
                </div>
                <button className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  Inscribir
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <BottomNav />
    </div>
  );
}
