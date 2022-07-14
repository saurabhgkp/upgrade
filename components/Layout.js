import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from './Footer'
export default function Layout({ children }) {
 return (
  <>
   <Navbar />
   <main>
    {children}
   </main>
    <Hero /> 
   
   <Footer />
  </>
 )
}