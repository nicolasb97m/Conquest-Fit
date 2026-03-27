import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import agentLogo from "@/assets/agent-logo.png";

interface TopBarProps {
  showRank?: boolean;
}

export default function TopBar({ showRank = true }: TopBarProps) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between px-4 py-3">
      <button
        onClick={() => navigate("/oracle")}
        className="w-9 h-9 rounded-full overflow-hidden hover:scale-110 transition-transform"
      >
        <img src={agentLogo} alt="ConquestFit Agent" className="w-full h-full object-cover" />
      </button>
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
