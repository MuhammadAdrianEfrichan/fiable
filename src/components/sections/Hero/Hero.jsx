import hero from "../../../assets/image/hero.png"
import heroLine from "../../../assets/icons/heroLine.svg"
import ilustrasiHero from "../../../assets/image/ilustrasiHero.svg"
import Button from "../../ui/Button"

const Hero = ()=>{
    return <section >
        <div className="">
            <img src={hero} alt="hero" className="w-full object-cover relative" />
            <img src={heroLine} alt="" className="absolute z-10 top-100" />
            <img src={ilustrasiHero} alt="" />
            <Button></Button>
        </div>
    </section>
}

export default Hero