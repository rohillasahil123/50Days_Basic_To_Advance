import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./Pages/About";
import Features from "./Pages/FeaturesSection";
// import Admin from "./pages/Admin";
import Login from "./Admin/Login";
import Home_All_Page from "./components/Home_All_Page";
import Gallery from "./Pages/Gallery";
import Notice_Page from "./Pages/Notice_Page";
import Admissions from "./Pages/Admissions";
import NotFound from "./Pages/NotFound";
import AdminNotice from "./Admin/AdminNotice";
import Header from "./components/Header";
import AdminHero from "./Admin/AdminHero";
import AdmissionForm from "./Admin/AdmissonForm";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home_All_Page />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/notices" element={<Notice_Page/>}/>
        <Route path="/admissions" element={<Admissions/>}/>
   
        {/* Admin Route */}
        <Route path="/adminNotice" element={<AdminNotice/>}/>
        <Route path="/adminLogin" element={<Login />} />
        <Route path="/admin" element={<AdminHero/>}/>
        <Route path="/form" element={<AdmissionForm/>}/>
         <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
