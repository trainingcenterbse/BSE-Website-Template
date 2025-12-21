import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Article from "./pages/Article";
import Wellness from "./pages/Wellness";
import Travel from "./pages/Travel";
import Creativity from "./pages/Creativity";
import Growth from "./pages/Growth";
import About from "./pages/About";
import Authors from "./pages/Authors";
import Contact from "./pages/Contact";
import StyleGuide from "./pages/StyleGuide";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
// BSE Pages
import AboutUs from "./pages/AboutUs";
import Founders from "./pages/Founders";
import BoardOfDirectors from "./pages/BoardOfDirectors";
import SystemsRegulations from "./pages/SystemsRegulations";
import GeneralAssemblyReports from "./pages/GeneralAssemblyReports";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/creativity" element={<Creativity />} />
          <Route path="/growth" element={<Growth />} />
          <Route path="/about" element={<About />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/style-guide" element={<StyleGuide />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* BSE Pages */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/founders" element={<Founders />} />
          <Route path="/board-of-directors" element={<BoardOfDirectors />} />
          <Route path="/systems-regulations" element={<SystemsRegulations />} />
          <Route path="/general-assembly-reports" element={<GeneralAssemblyReports />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
