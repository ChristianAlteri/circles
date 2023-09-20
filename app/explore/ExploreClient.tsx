// TODO: Show all products on the site in a infinite scroll

import { SafeListing, SafeUser } from "@/app/types";

import Heading from "@/app/components/Heading";
import Container from "@/app/components/Container";
import ListingCard from "@/app/components/Listings/ListingCard";
import UserProfileCard from "../components/UserProfileCard";

interface ExploreClientProps {
  listings: SafeListing[],
  currentUser?: SafeUser | null,
}

const ExploreClient: React.FC<ExploreClientProps> = ({
  listings,
  currentUser
}) => {
  return (
    <Container>
      <Heading
        title="Explore!"
        subtitle="List of latest products!"
      />
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
          flex
          flex-row
          justify-center
        "
       > TODO: Show all products on the site in a infinite scroll
        {listings.map((listing: any) => (
          <ListingCard
            currentUser={currentUser}
            key={listing.id}
            data={listing}
          />
        //   <ProductCard
        //     currentUser={currentUser}
        //     key={listing.id}
        //     data={listing}
        //   />
        ))}
      </div>
    </Container>
   );
}
 
export default ExploreClient;