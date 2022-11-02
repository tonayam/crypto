import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Faqs from "./pages/faqs/Faqs";
import TermsCondition from "./pages/terms/TermsCondition";
import AffiliateProgram from "./pages/affiliate/AffiliateProgram";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Contact from "./pages/contact/Contact";
import CookiesPolicy from "./pages/cookies/CookiesPolicy";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/faqs' element={<Faqs />} />
          <Route path='/terms-and-conditions' element={<TermsCondition />} />
          <Route path='/affiliate-program' element={<AffiliateProgram />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/cookies-policy' element={<CookiesPolicy />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
