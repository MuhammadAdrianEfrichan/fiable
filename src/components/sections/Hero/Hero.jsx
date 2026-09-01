import hero from "../../../assets/image/hero.png"
import heroLine from "../../../assets/icons/heroLine.svg"
import ilustrasiHero from "../../../assets/image/ilustrasiHero.svg"
import Button from "../../ui/Button"

const Hero = ()=>{
    return <section >
        <div className="">
            <img src={hero} alt="hero" className="w-full object-cover relative" />
            <div className="absolute top-120 left-130 flex flex-col items-center justify-center">
            <img src={heroLine} alt="" />
            <img src={ilustrasiHero} alt="" className="py-15"/>
            <Button className="cursor-pointer">Hubungi Kami</Button>
            </div>
        </div>
    </section>
}

export default Hero