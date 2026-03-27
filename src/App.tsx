import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Splash from "./pages/Splash";
import Home from "./pages/Home";
import ActivityPage from "./pages/ActivityPage";
import EventsPage from "./pages/EventsPage";
import WalletPage from "./pages/WalletPage";
import ProfilePage from "./pages/ProfilePage";
import OraclePage from "./pages/OraclePage";
import RoutinesPage from "./pages/RoutinesPage";
import NutritionPage from "./pages/NutritionPage";
import ValidationPage from "./pages/ValidationPage";
import BiometricsPage from "./pages/BiometricsPage";
import SquadPage from "./pages/SquadPage";
import SettingsPage from "./pages/SettingsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<Home />} />
          <Route path="/activity" element={<ActivityPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/oracle" element={<OraclePage />} />
          <Route path="/routines" element={<RoutinesPage />} />
          <Route path="/nutrition" element={<NutritionPage />} />
          <Route path="/validation" element={<ValidationPage />} />
          <Route path="/biometrics" element={<BiometricsPage />} />
          <Route path="/squad" element={<SquadPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
