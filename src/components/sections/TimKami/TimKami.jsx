import { useState } from "react";
import AccordionItem from "../../team/AcordionItem";
import MemberCard from "../../team/MemberCard";
import { teamCategories } from "../../../data/teamData";
import timKamiHero from "../../../assets/image/timKamiHero.png";
import timKami from "../../../assets/icons/timKami.svg";

export default function TimKami() {
  const [openId, setOpenId] = useState("");

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };
  const partnerCategory = teamCategories.find((cat) => cat.id === "partner");

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat pt-24 pb-32"
      style={{ backgroundImage: `url(${timKamiHero})` }}
    >

      <div className="flex items-center flex-col justify-center gap-10 mb-16">
        <img src={timKami} alt="" />
      

      <div className="mx-auto px-4">
        <AccordionItem
          title="Partner Profile"
          isOpen={openId === "partner"}
          onToggle={() => handleToggle("partner")}
        >
            <div className="py-5    "></div>
          {
          partnerCategory.member.map((member) => (
            <MemberCard key={member.id} member={member}/>
          ))}
          <div className="py-5"></div>
        </AccordionItem>
      </div>
      </div>
    </section>
  );
}