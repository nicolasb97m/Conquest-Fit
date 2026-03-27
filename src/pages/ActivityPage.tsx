import { motion, AnimatePresence, type Easing } from "framer-motion";
import TopBar from "@/components/TopBar";
import BottomNav from "@/components/BottomNav";
import { Dumbbell, UtensilsCrossed, ShieldCheck, Flame, Heart, Clock, RefreshCw, Camera, Video, Loader2, CheckCircle2, ThumbsUp, ThumbsDown, Upload, X, Image } from "lucide-react";
import { useState, useRef } from "react";

type ActivityTab = "ejercicio" | "comida" | "verificar";

const easeOut: Easing = "easeOut";

const tabConfig = [
  { id: "ejercicio" as const, label: "EJERCICIO", icon: Dumbbell, color: "bg-primary" },
  { id: "comida" as const, label: "COMIDA", icon: UtensilsCrossed, color: "bg-accent" },
  { id: "verificar" as const, label: "VERIFICAR", icon: ShieldCheck, color: "bg-primary" },
];

// ─── EVIDENCE UPLOAD ──────────────────────────────────────
function EvidenceUpload() {
  const [files, setFiles] = useState<{ name: string; type: string; url: string }[]>([]);
  const [uploading, setUploading] = useState(false);
  const [validated, setValidated] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files;
    if (!selected) return;
    const newFiles = Array.from(selected).map((f) => ({
      name: f.name,
      type: f.type.startsWith("video") ? "video" : "foto",
      url: URL.createObjectURL(f),
    }));
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const removeFile = (idx: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
    setValidated(false);
  };

  const submitEvidence = () => {
    if (files.length === 0) return;
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      setValidated(true);
    }, 3000);
  };

  return (
    <div className="space-y-3">
      <h3 className="font-display text-xs tracking-widest text-foreground uppercase flex items-center gap-2">
        <Camera className="w-4 h-4 text-primary" />
        Subir Evidencia de Entrenamiento
      </h3>

      {/* Upload buttons */}
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => { fileInputRef.current?.setAttribute("accept", "image/*"); fileInputRef.current?.click(); }}
          className="card-conquest p-4 flex flex-col items-center gap-2 hover:border-primary/30 transition-colors"
        >
          <Camera className="w-6 h-6 text-primary" />
          <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Foto</span>
        </button>
        <button
          onClick={() => { fileInputRef.current?.setAttribute("accept", "video/*"); fileInputRef.current?.click(); }}
          className="card-conquest p-4 flex flex-col items-center gap-2 hover:border-primary/30 transition-colors"
        >
          <Video className="w-6 h-6 text-accent" />
          <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Video</span>
        </button>
      </div>

      <input ref={fileInputRef} type="file" className="hidden" onChange={handleFile} />

      {/* Preview files */}
      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="card-conquest p-2.5 flex items-center gap-3"
            >
              {f.type === "foto" ? (
                <img src={f.url} alt="Evidencia" className="w-12 h-12 rounded-lg object-cover" />
              ) : (
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                  <Video className="w-5 h-5 text-accent" />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-xs text-foreground truncate">{f.name}</p>
                <p className="text-[9px] text-muted-foreground uppercase">{f.type}</p>
              </div>
              <button onClick={() => removeFile(i)} className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center hover:bg-destructive/20 transition-colors">
                <X className="w-3 h-3 text-muted-foreground" />
              </button>
            </motion.div>
          ))}

          {/* Submit */}
          {!validated ? (
            <button
              onClick={submitEvidence}
              disabled={uploading}
              className="w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-3 rounded-xl font-display text-xs font-bold tracking-wider flex items-center justify-center gap-2 glow-orange disabled:opacity-60"
            >
              {uploading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  VALIDANDO CON IA ORACLE...
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4" />
                  ENVIAR EVIDENCIA
                </>
              )}
            </button>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-xl p-3"
            >
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span className="text-xs text-green-400 font-semibold">
                Evidencia validada — Proof of Effort registrado en HCS
              </span>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── EJERCICIO TAB ────────────────────────────────────────
function EjercicioView() {
  return (
    <motion.div
      key="ejercicio"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3, ease: easeOut }}
      className="space-y-5"
    >
      <div>
        <h1 className="font-display text-xl font-bold text-foreground">Biblioteca de Rutinas</h1>
        <p className="text-xs text-muted-foreground mt-1">
          Gestiona tus protocolos de entrenamiento validados por el Hedera Consensus Service.
        </p>
      </div>

      {/* Upload routine */}
      <button className="card-conquest p-5 w-full flex flex-col items-center gap-3 hover:border-primary/30 transition-colors">
        <RefreshCw className="w-7 h-7 text-muted-foreground" />
        <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
          Cargar Nueva Rutina
        </span>
      </button>

      {/* Evidence Upload Section */}
      <EvidenceUpload />

      {/* Active Routines Header */}
      <div className="flex items-center justify-between">
        <h2 className="font-display text-sm font-bold text-foreground">Mis Rutinas Activas</h2>
        <span className="text-[10px] text-muted-foreground">3 Protocolos en Curso</span>
      </div>

      {/* Progress bars with labels */}
      <div className="space-y-2">
        {[
          { pct: 75, label: "Un 1/6 HCS" },
          { pct: 45, label: "" },
          { pct: 20, label: "" },
        ].map((bar, i) => (
          <div key={i} className="h-2.5 bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${bar.pct}%` }}
              transition={{ duration: 1, delay: i * 0.15, ease: easeOut }}
            />
          </div>
        ))}
      </div>

      {/* Reward summary */}
      <div className="flex items-center gap-2">
        <Flame className="w-4 h-4 text-primary" />
        <span className="text-sm font-bold font-display text-primary">120.50 $FIT</span>
        <Heart className="w-4 h-4 text-destructive ml-2" />
      </div>

      {/* Routine Cards */}
      <div className="space-y-4">
        <RoutineCard
          name="Resistencia Cordillera"
          duration="45 min"
          intensity="Alta"
          reward="250.00 $FIT"
          tag="$UTE"
        />
        <RoutineCard
          name="Movilidad Bio-Sync"
          duration="30 min"
          intensity="Media"
          reward="45.20 $FIT"
          tag=""
        />
      </div>
    </motion.div>
  );
}

function RoutineCard({ name, duration, intensity, reward, tag }: {
  name: string; duration: string; intensity: string; reward: string; tag: string;
}) {
  return (
    <div className="card-conquest overflow-hidden">
      <div className="h-32 bg-gradient-to-br from-primary/10 via-secondary to-accent/10 flex items-center justify-center relative">
        {tag && (
          <span className="absolute top-2 right-2 text-[9px] bg-accent/20 text-accent px-2 py-0.5 rounded-full font-bold uppercase">
            {tag}
          </span>
        )}
        <Dumbbell className="w-12 h-12 text-primary/20" />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-display text-sm font-bold text-foreground">{name}</h3>
        <div className="flex items-center gap-4 text-[10px] text-muted-foreground">
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Duración: <b className="text-foreground">{duration}</b></span>
          <span>Intensidad: <b className="text-foreground">{intensity}</b></span>
        </div>
        <div className="flex items-center gap-1 pt-1">
          <span className="text-[9px] text-muted-foreground uppercase tracking-wider">Activación/Reward</span>
        </div>
        <span className="text-lg font-bold text-primary font-display">{reward}</span>
      </div>
    </div>
  );
}

// ─── COMIDA TAB ───────────────────────────────────────────
function ComidaView() {
  return (
    <motion.div
      key="comida"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3, ease: easeOut }}
      className="space-y-5"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-display text-xl font-bold text-foreground">
          SUBIR EVIDENCIA NUTRICIONAL
        </h1>
        <span className="text-[9px] bg-accent/20 text-accent px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
          STEP O/SCAN
        </span>
      </div>

      {/* Scan plate */}
      <div className="card-conquest p-8 flex flex-col items-center gap-4">
        <h3 className="font-display text-sm font-bold text-foreground">Escanear Plato</h3>
        <p className="text-xs text-muted-foreground text-center max-w-xs">
          Captura tu comida para validar macros mediante el Oráculo Hedera +HCS
        </p>
        <div className="w-16 h-16 rounded-full bg-secondary/80 flex items-center justify-center">
          <Camera className="w-7 h-7 text-muted-foreground" />
        </div>
        <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
          Subir Foto
        </button>
      </div>

      {/* Real time analysis */}
      <div>
        <h3 className="font-display text-xs tracking-widest text-muted-foreground uppercase flex items-center gap-2">
          <Clock className="w-3 h-3" />
          Análisis en Tiempo Real
        </h3>
      </div>

      {/* Consensus History */}
      <div className="space-y-3">
        <h3 className="font-display text-xs tracking-widest text-muted-foreground uppercase">
          Historial de Consenso
        </h3>
        {[
          { name: "Cena Mediterránea", fit: "+15.5 $FIT", time: "Hace 2h" },
          { name: "Bowl Proteico", fit: "+22.1 $FIT", time: "Hace 5h" },
        ].map((entry) => (
          <div key={entry.name} className="card-conquest p-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-xs font-bold text-foreground">
              {entry.name.charAt(0)}
            </div>
            <div className="flex-1">
              <span className="text-sm font-semibold text-foreground">{entry.name}</span>
              <p className="text-[10px] text-muted-foreground">{entry.time}</p>
            </div>
            <span className="text-xs font-bold text-green-400 font-display">{entry.fit}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ─── VERIFICAR TAB ────────────────────────────────────────
function VerificarView() {
  return (
    <motion.div
      key="verificar"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3, ease: easeOut }}
      className="space-y-5"
    >
      <div>
        <h1 className="font-display text-xl font-bold text-foreground">
          Centro de Validación
        </h1>
        <p className="text-xs text-muted-foreground mt-1">
          Eres el nodo final del protocolo. Verifica la autenticidad de las actividades físicas y nutricionales enviadas por la red.
        </p>
      </div>

      {/* Stats */}
      <div className="flex gap-3">
        <div className="card-conquest flex-1 p-3">
          <p className="text-[9px] text-muted-foreground uppercase tracking-wider">Recompensa Base</p>
          <p className="text-lg font-bold font-display text-foreground">
            0.45 <span className="text-xs text-primary">$FIT / ✓</span>
          </p>
        </div>
        <div className="card-conquest flex-1 p-3">
          <p className="text-[9px] text-muted-foreground uppercase tracking-wider">% Verificación</p>
          <p className="text-lg font-bold font-display text-foreground">98.2%</p>
        </div>
      </div>

      {/* Evidence queue */}
      <div className="space-y-3">
        <h3 className="font-display text-xs tracking-widest text-muted-foreground uppercase flex items-center gap-2">
          Evidencia en Espera
          <span className="bg-primary/20 text-primary text-[9px] px-1.5 py-0.5 rounded-full font-bold">(14)</span>
        </h3>

        {/* Evidence card to validate */}
        <div className="card-conquest overflow-hidden">
          {/* User image placeholder */}
          <div className="h-48 bg-gradient-to-br from-accent/10 via-secondary to-primary/10 flex items-center justify-center relative">
            <div className="text-center">
              <span className="text-[9px] text-muted-foreground uppercase tracking-wider">• SENTADILLA 82% FORMA</span>
              <p className="text-[10px] text-muted-foreground mt-1">VARIACIÓN 4 KG</p>
              <p className="text-[9px] text-muted-foreground">Cantidad: 3 REP</p>
            </div>
          </div>

          <div className="p-4 space-y-3">
            {/* User info */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 flex items-center justify-center text-xs font-bold text-foreground">
                MR
              </div>
              <div>
                <span className="text-sm font-semibold text-foreground">Miko_Runner88</span>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] text-muted-foreground">PILOTOS VERIFICADOS</span>
                </div>
              </div>
            </div>

            {/* Routine details */}
            <div>
              <p className="text-xs text-muted-foreground">Rutina:</p>
              <h4 className="font-display text-sm font-bold text-foreground">Pierna de Acero</h4>
              <p className="text-xs text-muted-foreground mt-1 italic leading-relaxed">
                "Finalizando la tercera serie de 12 repeticiones, buscando mejorar la profundidad del descanso. ¿Cómo lo ven validadores?"
              </p>
            </div>

            {/* Reward */}
            <div className="flex items-center gap-2">
              <span className="text-[9px] bg-primary/20 text-primary px-2 py-0.5 rounded-full font-bold uppercase">
                Recompensa
              </span>
              <span className="text-[9px] text-muted-foreground uppercase">Estimada</span>
              <span className="text-sm font-bold text-primary font-display ml-auto">+0.45 $FIT</span>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 pt-1">
              <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-destructive/30 text-destructive text-xs font-bold uppercase tracking-wider hover:bg-destructive/10 transition-colors">
                <ThumbsDown className="w-4 h-4" />
                Rechazar
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider glow-orange hover:bg-primary/90 transition-colors">
                <ThumbsUp className="w-4 h-4" />
                Aprobar
              </button>
            </div>

            {/* Stats footer */}
            <div className="flex items-center justify-between pt-2 border-t border-border">
              <div>
                <p className="text-[9px] text-muted-foreground uppercase">Consenso Activo</p>
                <p className="text-xs font-bold text-foreground">86% SI</p>
              </div>
              <div className="text-right">
                <p className="text-[9px] text-muted-foreground uppercase">Validaciones</p>
                <p className="text-xs font-bold text-foreground">1,204</p>
              </div>
              <div className="text-right">
                <p className="text-[9px] text-muted-foreground uppercase">Tiempo Restante</p>
                <p className="text-xs font-bold text-primary font-display">12:04s</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── MAIN ACTIVITY PAGE ──────────────────────────────────
export default function ActivityPage() {
  const [activeTab, setActiveTab] = useState<ActivityTab>("ejercicio");

  return (
    <div className="min-h-screen bg-background safe-bottom">
      <TopBar />

      {/* Floating tab menu */}
      <div className="px-4 mb-4">
        <div className="card-conquest p-1.5 flex gap-1.5">
          {tabConfig.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                <tab.icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab content */}
      <div className="px-4 pb-24">
        <AnimatePresence mode="wait">
          {activeTab === "ejercicio" && <EjercicioView />}
          {activeTab === "comida" && <ComidaView />}
          {activeTab === "verificar" && <VerificarView />}
        </AnimatePresence>
      </div>

      <BottomNav />
    </div>
  );
}
