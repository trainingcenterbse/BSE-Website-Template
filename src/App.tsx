import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
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
// Training Center Pages
import TrainingCenter from "./pages/TrainingCenter";
import AboutTrainingCenter from "./pages/AboutTrainingCenter";
import TrainingTrustees from "./pages/TrainingTrustees";
import TrainingAccreditations from "./pages/TrainingAccreditations";
import TrainingCourses from "./pages/TrainingCourses";
import CourseDetail from "./pages/CourseDetailNew";
import Committees from "./pages/Committees";
import Scholarships from "./pages/Scholarships";
import Sitemap from "./pages/Sitemap";
import Search from "./pages/Search";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
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
          {/* Training Center Pages */}
          <Route path="/training-center" element={<TrainingCenter />} />
          <Route path="/about-training-center" element={<AboutTrainingCenter />} />
          <Route path="/training-trustees" element={<TrainingTrustees />} />
          <Route path="/training-accreditations" element={<TrainingAccreditations />} />
          <Route path="/training-courses" element={<TrainingCourses />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/committees" element={<Committees />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/search" element={<Search />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
