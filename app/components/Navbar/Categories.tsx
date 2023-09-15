'use client';

import { usePathname, useSearchParams } from 'next/navigation';


import { PiBabyBold, PiBalloonBold, PiGhostBold, PiHeartBold, PiMartiniBold, PiPantsBold, PiRecycleBold, PiScissorsBold, PiSnowflakeBold, PiSunBold, PiTennisBallBold, PiDressBold, PiNumberCircleEightBold } from "react-icons/pi";
import { HiOutlineSparkles } from "react-icons/hi2";
import { LiaHatCowboySolid } from "react-icons/lia";


import CategoryBox from "../CategoryBox";
import Container from '../Container';



export const categories = [
      {
        label: "Rare",
        icon: PiHeartBold,
        description: "Discover our favourite pieces."
      },
      {
        label: "Designer",
        icon: PiDressBold,
        description: "Explore a timeless selection of vintage designer pieces."
      },
      {
        label: "2000s",
        icon: HiOutlineSparkles,
        description: "Browse through hot early 2000's fashion pieces."
      },
      {
        label: "UpCycled",
        icon: PiScissorsBold,
        description: "Find adorable upcycled garments."
      },
      {
        label: "Vintage",
        icon: PiPantsBold,
        description: "Discover amazing vintage designer classics."
      },
      {
        label: "Cowboy",
        icon: LiaHatCowboySolid,
        description: "Explore great lasting cowboy era fashion pieces."
      },
      {
        label: "80s",
        icon: PiNumberCircleEightBold,
        description: "Get nostalgic with a variety of fun 80's inspired pieces."
      },
      {
        label: "Athletic",
        icon: PiTennisBallBold,
        description: "Shop sportswear and athletic fashion."
      },
      {
        label: "Children",
        icon: PiBabyBold,
        description: "Browse the cutest little pieces for kids."
      },
      {
        label: "Sustainable",
        icon: PiRecycleBold,
        description: "Support eco-friendly fashion choices with sustainable options."
      },
      {
        label: "Formal",
        icon: PiMartiniBold,
        description: "Dress to impress with elegant formal attire."
      },
      {
        label: "Gothic",
        icon: PiGhostBold,
        description: "Embrace the dark and mysterious with gothic fashion."
      },
      {
        label: "Party",
        icon: PiBalloonBold,
        description: "Find sexy and fun pieces perfect for parties."
      },
      {
        label: "Summer",
        icon: PiSunBold,
        description: "Get ready for summer with a selection of outerwear."
      },
      {
        label: "Winter",
        icon: PiSnowflakeBold,
        description: "Stay cozy and stylish with a range winter fashion."
      }
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();

  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;