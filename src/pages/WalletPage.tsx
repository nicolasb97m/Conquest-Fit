import { motion } from "framer-motion";
import TopBar from "@/components/TopBar";
import BottomNav from "@/components/BottomNav";
import { TrendingUp, ArrowUpRight, ArrowDownLeft, Coins, BarChart3 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function WalletPage() {
  return (
    <div className="min-h-screen bg-background safe-bottom">
      <TopBar />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="px-4 pb-24 space-y-5"
      >
        {/* Balance Card */}
        <motion.div variants={fadeUp} className="text-center space-y-2 py-4">
          <span className="text-[10px] text-muted-foreground uppercase tracking-widest flex items-center justify-center gap-1">
            <Coins className="w-3 h-3" />
            $FIT DINERO TOTAL ACUMULADO
          </span>
          <h1 className="text-4xl font-bold font-display text-foreground">
            $4,204.12 <span className="text-sm text-primary bg-primary/10 px-2 py-0.5 rounded-full">USD</span>
          </h1>
          <p className="text-sm text-muted-foreground">
            ≈ <span className="text-accent font-semibold">12,040.50</span> PUNTOS DE DINERO
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div variants={fadeUp} className="space-y-3">
          <button className="w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-3.5 rounded-xl font-display text-sm font-bold tracking-wider flex items-center justify-center gap-2 glow-orange">
            <TrendingUp className="w-4 h-4" />
            ACTIVAR INTERESES
          </button>
          <button className="w-full card-conquest py-3 text-center text-sm font-semibold text-foreground flex items-center justify-center gap-2">
            RETIRAR A MI BANCO
          </button>
        </motion.div>

        {/* Growth Section */}
        <motion.div variants={fadeUp} className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-sm font-bold">Mi Crecimiento</h3>
            <div className="flex gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-primary" /> $FIT/USD
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-accent" /> Ganancia
              </span>
            </div>
          </div>

          {/* Mini Chart */}
          <div className="card-conquest p-4 h-40 relative overflow-hidden">
            <svg viewBox="0 0 300 100" className="w-full h-full" preserveAspectRatio="none">
              {/* Grid lines */}
              {[0, 25, 50, 75, 100].map((y) => (
                <line
                  key={y}
                  x1="0" y1={y} x2="300" y2={y}
                  stroke="hsl(var(--conquest-border))" strokeWidth="0.5"
                />
              ))}
              {/* Orange line - $FIT */}
              <motion.path
                d="M 0,80 Q 30,75 60,60 T 120,45 T 180,35 T 240,25 T 300,15"
                fill="none"
                stroke="hsl(var(--conquest-orange))"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
              {/* Blue line - Ganancia */}
              <motion.path
                d="M 0,85 Q 30,82 60,78 T 120,65 T 180,55 T 240,50 T 300,40"
                fill="none"
                stroke="hsl(var(--conquest-blue))"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
              />
              {/* Gradient fill under orange line */}
              <defs>
                <linearGradient id="fillGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--conquest-orange))" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="hsl(var(--conquest-orange))" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M 0,80 Q 30,75 60,60 T 120,45 T 180,35 T 240,25 T 300,15 L 300,100 L 0,100 Z"
                fill="url(#fillGrad)"
              />
            </svg>
          </div>
        </motion.div>

        {/* Recent Transactions */}
        <motion.div variants={fadeUp} className="space-y-3">
          <h3 className="font-display text-xs tracking-widest text-muted-foreground uppercase">
            Movimientos del Día
          </h3>
          {[
            { label: "Reward: Desafío Grupal", amount: "+45.20 $FIT", icon: ArrowDownLeft, positive: true },
            { label: "Stake: The Pot", amount: "-20.00 USDT", icon: ArrowUpRight, positive: false },
            { label: "Bonus: Racha 12 días", amount: "+12.50 $FIT", icon: ArrowDownLeft, positive: true },
          ].map((tx, i) => (
            <div key={i} className="card-conquest p-3 flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                tx.positive ? "bg-green-500/10" : "bg-destructive/10"
              }`}>
                <tx.icon className={`w-4 h-4 ${tx.positive ? "text-green-400" : "text-destructive"}`} />
              </div>
              <div className="flex-1">
                <span className="text-sm text-foreground">{tx.label}</span>
              </div>
              <span className={`text-sm font-bold font-display ${
                tx.positive ? "text-green-400" : "text-destructive"
              }`}>
                {tx.amount}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <BottomNav />
    </div>
  );
}
