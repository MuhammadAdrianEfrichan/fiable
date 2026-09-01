import layanan from "../../assets/icons/layanan.svg"
import Hero from "../../components/sections/Hero"
import Navbar from "../../components/sections/Navbar"
import TentangKami from "../../components/sections/TentangKami"

const Beranda = ()=>{
    return( 
        <>
        <Navbar />
        <Hero />
        <TentangKami />
        </>
    )
}

export default Beranda