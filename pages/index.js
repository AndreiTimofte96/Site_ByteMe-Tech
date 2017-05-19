import Link from 'next/link'
import HomeLayout from '../components/homeLayout.js'
import Layout from '../components/layout.js'
import Home from '../components/Home.js'
import About from '../components/About.js'
import Services from '../components/Services.js'
import Technologies from '../components/Technologies.js'
import Team from '../components/Team.js'
import Contact from '../components/Contact.js'
import Footer from '../components/footer.js'
import Header from '../components/header.js'

const Index = () => (
  <HomeLayout>
    <Home />
    <Header />
    <About />
    <Services />
    <Technologies />
    <Team />
    <Contact />
    <Footer />
  </HomeLayout>
)

export default Index
