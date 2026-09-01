import logo from "../../../assets/image/logo.svg"
import dropdown from "../../../assets/icons/dropdown.svg"
import Button from "../../ui/Button"

const Navbar = ()=>{
    return(
        <nav className="mx-auto px-14.75 w-full h-42 border">
            <div className="flex justify-between items-center">
            <img src={logo} alt="" />
            <ul className="flex justify-around w-[70%] h-8 text-[26px] font-semibold ">
                <li className="text-oren font-bold"> Beranda</li>
                <li>Tentang Kami</li>
                <li>Layanan</li>
                <li className="flex items-center mt-2">Tim Kami<img src={dropdown} alt="" className="w-4 h-2"/></li>
                <li >Artikel</li>
                <li>Kontak</li>
            </ul>
            <Button variant="secondary" className="py-2 px-3 cursor-pointer">Konsultasi Sekarang</Button>
            
            </div>
        </nav>
    )
}

export default Navbar