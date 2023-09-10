'use client';

import { usePathname, useSearchParams } from 'next/navigation';


import { PiPantsBold } from "react-icons/pi";


import CategoryBox from "../CategoryBox";
import Container from '../Container';



export const categories = [
    {
        label: "StaffPicks",
        icon: PiPantsBold,
        description: "Discover our favourite pieces."
      },
      {
        label: "Designer",
        icon: PiPantsBold,
        description: "Explore a timeless selection of vintage designer pieces."
      },
      {
        label: "2000s",
        icon: PiPantsBold,
        description: "Browse through hot early 2000's fashion pieces."
      },
      {
        label: "UpCycled",
        icon: PiPantsBold,
        description: "Find adorable upcycled garments."
      },
      {
        label: "Vintage",
        icon: PiPantsBold,
        description: "Discover amazing vintage designer classics."
      },
      {
        label: "Cowboy",
        icon: PiPantsBold,
        description: "Explore great lasting cowboy era fashion pieces."
      },
      {
        label: "80s",
        icon: PiPantsBold,
        description: "Get nostalgic with a variety of fun 80's inspired pieces."
      },
      {
        label: "Athletic",
        icon: PiPantsBold,
        description: "Shop sportswear and athletic fashion."
      },
      {
        label: "Children",
        icon: PiPantsBold,
        description: "Browse the cutest little pieces for kids."
      },
      {
        label: "Sustainable",
        icon: PiPantsBold,
        description: "Support eco-friendly fashion choices with sustainable options."
      },
      {
        label: "Formal",
        icon: PiPantsBold,
        description: "Dress to impress with elegant formal attire."
      },
      {
        label: "Gothic",
        icon: PiPantsBold,
        description: "Embrace the dark and mysterious with gothic fashion."
      },
      {
        label: "Party",
        icon: PiPantsBold,
        description: "Find sexy and fun pieces perfect for parties."
      },
      {
        label: "Summer",
        icon: PiPantsBold,
        description: "Get ready for summer with a selection of outerwear."
      },
      {
        label: "Winter",
        icon: PiPantsBold,
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