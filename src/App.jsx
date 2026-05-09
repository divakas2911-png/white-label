import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import CTA from './components/CTA'
import Footer from './components/Footer'
import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'

function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <CTA />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
