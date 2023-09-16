'use client'

import { SafeListing, SafeUser } from "@/app/types";
import { Listing, Reservation } from "@prisma/client";
import { useRouter } from "next/navigation";
import useCountries from "@/app/hooks/useCountries";
import { useCallback, useMemo } from "react";
import { format } from "date-fns";
import Image from "next/image";
import HeartButton from "../HeartButton";
import Button from "../Button";

interface ListingCardProps {
    data: SafeListing;
    reservation?: Reservation;
    onAction?: (id: string) => void;
    disabled?: boolean;
    actionLabel?: string;
    actionId?: string;
    currentUser?: SafeUser | null
  };

const ListingCard: React.FC<ListingCardProps> = ({
    data,
    reservation,
    onAction,
    disabled,
    actionLabel,
    actionId = "",
    currentUser
}) => {

    const router = useRouter();
    const { getByValue } = useCountries();

    const location = getByValue(data.location);

    const handleCancel = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
    
        if (disabled) {
          return;
        }
    
        onAction?.(actionId)
      }, [disabled, onAction, actionId]);

      const price = useMemo(() => {
        if (reservation) {
          return reservation.totalPrice;
        }
    
        return data.price;
      }, [reservation, data.price]);

      const avgProductPrice = useMemo(() => {
        if (reservation) {
          return data.avgProductPrice;
        }
    
        return data.avgProductPrice;
      }, [reservation, data.avgProductPrice]);

      const reservationDate = useMemo(() => {
        if (!reservation) {
          return null;
        }
      
        const start = new Date(reservation.startDate);
        const end = new Date(reservation.endDate);
    
        return `${format (start, 'PP')} - ${format(end, 'PP')}`;
      }, [reservation]);


    return ( 
    <div
    className="
            border-4 
            border-green-400
            rounded-xl
            p-2
            "
    >
        <div 
        onClick={() => router.push(`/listings/${data.id}`)} 
        className="col-span-1 cursor-pointer group"
      >
        <div className="flex flex-col gap-2 w-full">
          <div 
            
            className="
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            "
          >
            <Image
              fill
              src={data.imageSrc}
              alt="Listing"

              className="
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
             
              "
            />
            <div className="absolute top-3 right-3">
            <HeartButton 
              listingId={data.id} 
              currentUser={currentUser}
            />
          </div>
        </div>
        {/* Store name */}
        <div className="border-b flex justify-center font-semibold text-lg ">
          {data.title}
        </div>
        {/* Store category */}
        <div className="flex justify-center font-light text-neutral-500 ">
          {reservationDate || data.category}
        </div>
        <div>
            {/* Avg price per product */}
            <div className="text-s flex justify-center flex-row items-center gap-1">Most products are 
            <div className="text-s text-green-500">
               £ {avgProductPrice} 
            </div>
        </div>
            {/* Visit price */}
            <div className="text-m flex justify-center flex-row items-center gap-1">
            <div className="text-m text-red-500 ">
                £ {price}
            </div>
          {!reservation && (
            <div className="font-light">reservation fee</div>
          )}
        </div>
        {onAction && actionLabel && (
          <Button
            disabled={disabled}
            small
            label={actionLabel} 
            onClick={handleCancel}
          />
        )}
      </div>
    </div>
    </div>
    </div>
   );
}
 
export default ListingCard;