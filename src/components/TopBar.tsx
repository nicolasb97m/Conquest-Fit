import { motion } from "framer-motion";

interface TopBarProps {
  showRank?: boolean;
}

export default function TopBar({ showRank = true }: TopBarProps) {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
          <span className="text-primary-foreground text-xs font-bold font-display">CF</span>
        </div>
      </div>
      {showRank && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 bg-secondary/50 rounded-full px-3 py-1"
        >
          <span className="text-muted-foreground text-xs">Rank</span>
          <span className="text-primary font-bold text-sm font-display">#42</span>
        </motion.div>
      )}
    </div>
  );
}
