'use client';

import dynamic from "next/dynamic";
import useCountries from "@/app/hooks/useCountries";
import ListingCategory from "./ListingCategory";

import Avatar from "../Avatar";

import { IconType } from "react-icons";
import { SafeUser } from "@/app/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { useParams } from "next/navigation";

import qs from "query-string";







const Map = dynamic(() => import('../Map'), { 
  ssr: false 
});

interface ListingInfoProps {
  user: SafeUser,
  description: string;
  avgProductPrice: number;
  stockCount: number;
  price: number;
  category: {
    icon: IconType,
    label: string;
    description: string;
  } | undefined
  location: string;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
    user,
    description,
    avgProductPrice,
    stockCount,
    price,
    category,
    location,
}) => {
    const { getByValue } = useCountries();
    const router = useRouter();
    const params = useSearchParams();
    const coordinates = getByValue(location)?.latlng;

    const handleClick = useCallback(() => {
        let currentQuery = {};

        if (params) {
            currentQuery = qs.parse(params.toString());
        }

        const updatedQuery: any = {
            ...currentQuery,
            user: user?.id, // Corrected to use user?.id
        };

        if (params?.get('listing') === user?.id) { // Corrected to use user?.id
            delete updatedQuery.category;
        }

        const url = qs.stringifyUrl({
            url: '/',
            query: updatedQuery,
        }, { skipNull: true });

        router.push(url);
    }, [category, params, router, user]);

  return ( 
    <div className="col-span-4 flex flex-col gap-3">
        {/* Title */}
      <div className="flex flex-col ">
            <div 
            className="
                text-xl 
                font-semibold 
                flex 
                flex-row 
                items-center
                gap-2
            "
            >
            <div
            onClick={(handleClick)}
            >    
                <div>Shop independently owned by 
                    <div
                    className="
                    underline
                    flex
                    flex-row
                    gap-4
                    "
                    
                    > 
                    {user?.name}
                            <Avatar src={user?.image} />
                    </div>
                    </div>
                </div> 
            </div>    
            {/* Description */}
                <div 
                className="
                text-s 
                font-light 
                border-b 
                text-neutral-500 
                gap-2
                p-2 
                "
                >
                    {description}
                </div>
                {/* Stock, Price and avg price */}
        <div className="
            p-2 
            mt-2
            font-light
            text-neutral-500
          "
        >
            <div className="
            flex 
            flex-row 
            items-center 
            text-neutral-900
            ">
            {stockCount}&nbsp; <div className="text-neutral-500"> Pieces in store </div>
          </div>
          <div className="
            flex 
            flex-row 
            items-center 
            text-red-500
            ">
            £{avgProductPrice}&nbsp; <div className="text-neutral-500">   Average price per product  </div>
          </div>
          
          <div className="
            flex 
            flex-row 
            items-center 
            text-green-500
            ">
            £{price}&nbsp; <div className="text-neutral-500">  Booking fee</div>
          </div>
        </div>
      </div>
      <hr />
       {/* Category */}
      {category && (
        <ListingCategory
          icon={category.icon} 
          label={category?.label}
          description={category?.description} 
        />
      )}
      <hr />
      <Map center={coordinates} />
    </div>
   );
}
 
export default ListingInfo;