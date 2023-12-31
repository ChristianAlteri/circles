'use client';

import { IconType } from "react-icons";

interface ListingCategoryProps {
  icon: IconType,
  label: string,
  description: string
}

const ListingCategory: React.FC<ListingCategoryProps> = ({ 
  icon: Icon,
  label,
  description
 }) => {
  return ( 
    <div className="flex flex-col gap-3 ">
      <div className="flex flex-row items-center gap-4">
        <Icon size={30} className="text-neutral-600" />
        <div className="flex flex-col"> 
            <div 
              className="text-s font-semibold"
            >
              {label}
            </div>
            <div 
              className="text-sm text-neutral-500 font-light"
            >
              {description}
            </div>
        </div>
      </div>
    </div>
   );
}
 
export default ListingCategory;