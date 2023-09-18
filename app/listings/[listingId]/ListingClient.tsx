//  THIS HOLDS ALL THE CALENDAR AND RESERVATION STUFF
//TODO:  1. Change the calendar to time slots not whole days

'use client'
import { differenceInCalendarDays, differenceInDays, eachDayOfInterval } from "date-fns";

import Container from "@/app/components/Container";
import ListingHead from "@/app/components/Listings/ListingHead";
import ListingInfo from "@/app/components/Listings/ListingInfo";
import { categories } from "@/app/components/Navbar/Categories";
import ListingReservation from "@/app/components/Listings/ListingReservation";

import useLoginModal from "@/app/hooks/useRentModal";

import { SafeListing, SafeReservation, SafeUser } from "@/app/types";


import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "react-hot-toast";
import { Range } from "react-date-range";
import axios from "axios";


const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection'
};

interface ListingClientProps {
    reservations?: SafeReservation[];
    listing: SafeListing & {
      user: SafeUser;
    };
    currentUser?: SafeUser | null;
  }


  const ListingClient: React.FC<ListingClientProps> = ({
    listing,
    reservations = [],
    currentUser
  }) => {

    const loginModal = useLoginModal();
    const router = useRouter();

    const disabledDates = useMemo(() => {
      let dates: Date[] = [];
  
      // TODO: change to extract the time slots
      reservations.forEach((reservation: any) => {
        const range = eachDayOfInterval({
          start: new Date(reservation.startDate),
          end: new Date(reservation.endDate)
        });
  
        dates = [...dates, ...range];
      });
  
      return dates;
    }, [reservations]);

    const [isLoading, setIsLoading] = useState(false);
    const [totalPrice, setTotalPrice] = useState(listing.price);
    const [dateRange, setDateRange] = useState<Range>(initialDateRange);


    // Function reserves a day
    // TODO: Change it to time slots not whole days
    const onCreateReservation = useCallback(() => {
      if (!currentUser) {
        return loginModal.onOpen();
      }
      setIsLoading(true);

      axios.post('/api/reservations', {
        totalPrice,
        startDate: dateRange.startDate,
        endDate: dateRange.endDate,
        listingId: listing?.id
      })
      .then(() => {
        toast.success('Listing reserved!');
        setDateRange(initialDateRange);
        // redirect to trips
        // router.push('/trips');
        router.refresh();
      })
      .catch(() => {
        toast.error('Something went wrong.');
      })
      .finally(() => {
        setIsLoading(false);
      })
  },
  [
    totalPrice, 
    dateRange, 
    listing?.id,
    router,
    currentUser,
    loginModal
  ]);

  // Function that takes the day selected then sees if mulitple days selected then multiplies the price by the days
  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const dayCount = differenceInCalendarDays(
        dateRange.endDate, 
        dateRange.startDate
      );
      
      if (dayCount && listing.price) {
        setTotalPrice(dayCount * listing.price);
      } else {
        setTotalPrice(listing.price);
      }
    }
  }, [dateRange, listing.price]);


    const category = useMemo(() => {
        return categories.find((items) => 
         items.label === listing.category);
     }, [listing.category]);

    return ( 
        <div
    className="
            border-4 
            border-green-400
            rounded-xl
            p-2
            max-w-screen-lg 
            mx-auto
            "
    >
    
        <Container>
        <div 
          className="
            max-w-screen-lg 
            mx-auto
          "
        >
          <div className="flex flex-col gap-6">
            <ListingHead
              title={listing.title}
              imageSrc={listing.imageSrc}
              locationValue={listing.location}
              id={listing.id}
              currentUser={currentUser}
            />
            <div 
            className="
              grid 
              grid-cols-1 
              md:grid-cols-7 
              md:gap-10 
              mt-6
            "
          >
            <ListingInfo
              user={listing.user}
              category={category}
              description={listing.description}
              avgProductPrice={listing.avgProductPrice}
              stockCount={listing.stockCount}
              price={listing.price}
              location={listing.location}
            />
            <div 
              className="
                order-first 
                mb-10 
                md:order-last 
                md:col-span-3
              "
            >
              <ListingReservation
                price={listing.price}
                totalPrice={totalPrice}
                onChangeDate={(value) => setDateRange(value)}
                dateRange={dateRange}
                onSubmit={onCreateReservation}
                disabled={isLoading}
                disabledDates={disabledDates}
              />
            </div>
            </div>
            </div>
            </div>
         </Container>
         </div>
    );
}
 
export default ListingClient;