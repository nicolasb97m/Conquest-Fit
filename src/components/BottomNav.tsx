import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Activity, Calendar, Wallet, User } from "lucide-react";

const tabs = [
  { id: "home", label: "HOME", icon: Home, path: "/home" },
  { id: "activity", label: "ACTIVIDAD", icon: Activity, path: "/activity" },
  { id: "events", label: "EVENTO", icon: Calendar, path: "/events" },
  { id: "wallet", label: "WALLET", icon: Wallet, path: "/wallet" },
  { id: "profile", label: "PERFIL", icon: User, path: "/profile" },
];

export default function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-t border-border">
      <div className="max-w-lg mx-auto flex items-center justify-around px-2 py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))]">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path;
          return (
            <button
              key={tab.id}
              onClick={() => navigate(tab.path)}
              className="relative flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg transition-colors"
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary/10 rounded-lg"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <tab.icon
                className={`w-5 h-5 relative z-10 transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              />
              <span
                className={`text-[10px] font-semibold relative z-10 tracking-wider transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
