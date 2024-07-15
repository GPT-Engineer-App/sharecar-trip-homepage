import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import SearchRides from "./pages/SearchRides.jsx";
import PostRide from "./pages/PostRide.jsx";
import ContactUs from "./pages/ContactUs.jsx";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="login" element={<Login />} />
              <Route path="profile" element={<Profile />} />
              <Route path="search-rides" element={<SearchRides />} />
              <Route path="post-ride" element={<PostRide />} />
              <Route path="contact-us" element={<ContactUs />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;