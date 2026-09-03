import timKamiHero from "../../../assets/image/timKamiHero.png"
import timKami from "../../../assets/icons/timKami.svg"
import navigate from "../../../assets/icons/navigate.svg"
import { useState } from "react"
const TimKami = ()=>{
    const [isOpen, setIsOpen] = useState(false);

    return <section className="relative bg-cover bg-center bg-no-repeat min-h-216.25" style={{ backgroundImage: `url(${timKamiHero})` }}>
        <div className="pt-24 flex flex-col gap-20 items-center justify-center">
                <img src={timKami} alt="" />
                <div className="">
            <div className="bg-white rounded-xl shadow-card overflow-hidden w-376.75 h-25 flex justify-between p-8">
            <div className="flex items-center gap-10">
            <span className="w-5 h-5 bg-black rotate-45" />
            <span className="font-bold uppercase text-[35px] w-[83]">Partner profile</span>
            </div>
        <button
            onClick={() => setIsOpen(!isOpen)}
            className=""
        >
            <img src={navigate} alt="" className={`w-7 h-3.75 cursor-pointer transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
            }`}/>
        </button>

      {isOpen && (
        <div className="px-6 pb-6 space-y-8">
            <h1>hello</h1>
          {/* {members.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))} */}
        </div>
      )}
    </div>
    </div>
        </div>
    </section>
}

export default TimKami