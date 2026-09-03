import layanan from "../../assets/icons/layanan.svg"
import Hero from "../../components/sections/Hero"
import Ilustrasi from "../../components/sections/Ilustrasi"
import Layanan from "../../components/sections/Layanan"
import Navbar from "../../components/sections/Navbar"
import TentangKami from "../../components/sections/TentangKami"
import TimKami from "../../components/sections/TimKami"

const Beranda = ()=>{
    return( 
        <>
        <Navbar />
        <Hero />
        <TentangKami />
        <Ilustrasi />
        <Layanan />
        <TimKami />
        </>
    )
}

export default Beranda