import logo from "../../../assets/image/logo.svg"
import dropdown from "../../../assets/icons/dropdown.svg"
import Button from "../../ui/Button"

const Navbar = ()=>{
    return(
        <nav className="mx-auto px-6 w-full h-42 border">
            <div className="flex justify-between items-center">
            <img src={logo} alt="" />
            <ul className="flex justify-between w-[60%] h-6.5 size-6 font-semibold">
                <li className="text-oren font-bold"> Beranda</li>
                <li>Tentang Kami</li>
                <li>Layanan</li>
                <li className="flex items-center">Tim Kami<img src={dropdown} alt="" className="w-3.5 h-1.75"/></li>
                <li >Artikel</li>
                <li>Kontak</li>
            </ul>
            <Button variant="secondary" className="py-2 px-3 cursor-pointer">Konsultasi Sekarang</Button>
            
            </div>
        </nav>
    )
}

export default Navbar