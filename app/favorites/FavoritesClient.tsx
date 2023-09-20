// TODO: instead of listings get products so people 
//are shown a infinite scroll of latest products from people they follow then the explore button 
//will be all the latest products listed  
//then if they click on the product they 
//can see the store and underneath that they will 
//see a feed of the persons posts 

import { SafeListing, SafeUser } from "@/app/types";

import Heading from "@/app/components/Heading";
import Container from "@/app/components/Container";
import ListingCard from "@/app/components/Listings/ListingCard";
import UserProfileCard from "../components/UserProfileCard";

interface FavoritesClientProps {
  listings: SafeListing[],
  currentUser?: SafeUser | null,
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({
  listings,
  currentUser
}) => {
  return (
    <Container>
      <Heading
        title="Following!"
        subtitle="List of products your following wardrobes have listed!"
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
        "
      >
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
 
export default FavoritesClient;