'use client';

import { toast } from "react-hot-toast";
import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import { SafeListing, SafeUser } from "@/app/types";

import Heading from "@/app/components/Heading";
import Container from "@/app/components/Container";
import ListingCard from "@/app/components/Listings/ListingCard";
import Button from "../components/Button";
import useRentModal from "../hooks/useRentModel";
import RentModal from "../components/Modals/RentModal";
import useLoginModal from "../hooks/useLoginModal";

interface PropertiesClientProps {
  listings: SafeListing[],
  currentUser?: SafeUser | null,
}

const PropertiesClient: React.FC<PropertiesClientProps> = ({
  listings,
  currentUser
}) => {
    const rentModal = useRentModal()

  const router = useRouter();
  const [deletingId, setDeletingId] = useState('');

  const onSellWithUs = useCallback(() => {
    rentModal.onOpen();

    }, [currentUser, rentModal ]);

  const onDelete = useCallback((id: string) => {
    setDeletingId(id);

    axios.delete(`/api/listings/${id}`)
    .then(() => {
      toast.success('Listing deleted');
      router.refresh();
    })
    .catch((error) => {
      toast.error(error?.response?.data?.error)
    })
    .finally(() => {
      setDeletingId('');
    })
  }, [router]);


  return ( 

    <Container>
      <Heading
        title="Your store"
        subtitle="Welcome to your store. Here you can manage your listings."
      />
    {/*  TODO: put these buttons in <ProfileMenu /> */}
      <div
      className="
      flex
      flex-row
      justify-center
      mt-8
      gap-8
      "
      >
        <button
        onClick={()=> router.push('/reservations')}
        className="
        bg-white 
        hover:bg-rose-200 
        text-black 
        font-semibold 
        py-2 
        px-2 
        border
        rounded
        "
        >
            Reservations for my store
        </button>
        <button
        onClick={onSellWithUs}
        className="
        bg-white 
        hover:bg-rose-200 
        text-black 
        font-semibold 
        py-2 
        px-2 
        border
        rounded
        "
        >
            Add a store
        </button>
      </div>
      <div 
        className="
          mt-10
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        "
      >
        {listings.map((listing: any) => (
          <ListingCard
            key={listing.id}
            data={listing}
            actionId={listing.id}
            onAction={onDelete}
            disabled={deletingId === listing.id}
            actionLabel="Delete property"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
   );
}
 
export default PropertiesClient;