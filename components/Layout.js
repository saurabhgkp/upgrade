import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from './Footer'
import Info from './Info'
export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <Info />
            <main>
                {children}
            </main>
            <Hero />

            <Footer />
        </>
    )
}