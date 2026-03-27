import { motion, type Easing } from "framer-motion";
import TopBar from "@/components/TopBar";
import BottomNav from "@/components/BottomNav";
import { User, Mail, Shield, ChevronRight, LogOut, Lock } from "lucide-react";

const easeOut: Easing = "easeOut";
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } },
};

const menuItems = [
  { label: "NOMBRE", value: "ConquistadorX_42", icon: User },
  { label: "HASHPACK", value: "0x3f...a9c2", icon: Shield },
  { label: "NAVEGACIÓN", value: "Misiones Activas", icon: ChevronRight },
  { label: "CONQUISTADOR_ID", value: "#42-ALPHA", icon: Lock },
];

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-background safe-bottom">
      <TopBar showRank={false} />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="px-4 pb-24 space-y-5"
      >
        {/* Avatar */}
        <motion.div variants={fadeUp} className="flex flex-col items-center gap-3 py-4">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border-2 border-primary/20 flex items-center justify-center relative">
            <User className="w-10 h-10 text-foreground/50" />
            <button className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground text-xs">✎</span>
            </button>
          </div>
          <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
            Estado del Avatar: Conquistador Activo
          </span>
        </motion.div>

        {/* Menu items */}
        <motion.div variants={fadeUp} className="space-y-2">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className="card-conquest p-3 flex items-center gap-3 hover:border-primary/30 transition-colors cursor-pointer"
            >
              <item.icon className="w-5 h-5 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-[9px] text-muted-foreground uppercase tracking-wider">{item.label}</p>
                <p className="text-sm text-foreground font-medium">{item.value}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </div>
          ))}
        </motion.div>

        {/* Email */}
        <motion.div variants={fadeUp} className="card-conquest p-3 flex items-center gap-3">
          <Mail className="w-5 h-5 text-muted-foreground" />
          <div className="flex-1">
            <p className="text-[9px] text-muted-foreground uppercase tracking-wider">Email Verificado</p>
            <p className="text-sm text-foreground font-medium">conquistador@hedera.io</p>
          </div>
        </motion.div>

        {/* Disconnect */}
        <motion.div variants={fadeUp}>
          <button className="w-full bg-destructive/10 border border-destructive/20 text-destructive py-3.5 rounded-xl font-display text-sm font-bold tracking-wider flex items-center justify-center gap-2">
            <LogOut className="w-4 h-4" />
            DESCONECTAR CUENTA/WALLET
          </button>
        </motion.div>
      </motion.div>

      <BottomNav />
    </div>
  );
}
