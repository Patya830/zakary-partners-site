
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AdminAuth from "./components/admin/AdminAuth";
import AdminPanel from "./components/admin/AdminPanel";

const queryClient = new QueryClient();

const App = () => {
  const [showAdminAuth, setShowAdminAuth] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        const isAuthenticated = localStorage.getItem("adminAuth") === "true";
        if (isAuthenticated) {
          setShowAdminPanel(true);
        } else {
          setShowAdminAuth(true);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleAuthSuccess = () => {
    setShowAdminAuth(false);
    setShowAdminPanel(true);
  };

  const handleCloseAdmin = () => {
    setShowAdminPanel(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        
        {showAdminAuth && (
          <AdminAuth onAuthenticated={handleAuthSuccess} />
        )}
        
        {showAdminPanel && (
          <AdminPanel onClose={handleCloseAdmin} />
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;