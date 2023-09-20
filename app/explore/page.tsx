

import ClientOnly from "@/app/components/ClientOnly";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getFavoriteListings from "@/app/actions/getFavoriteListings";
import ExploreClient from "./ExploreClient";



const Explore = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  return (
    <ClientOnly>
      <ExploreClient
        listings={listings}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
}
 
export default Explore;