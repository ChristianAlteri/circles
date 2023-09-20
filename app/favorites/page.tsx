
import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getFavoriteListings from "@/app/actions/getFavoriteListings";

import FavoritesClient from "./FavoritesClient";

const ListingPage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();
//   TODO: add getUsers and pass to FavoritesClient

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="Looks like your not following any sellers :("
          subtitle="Follow sellers to keep up with their latest posts and snap up the best deals they have to offer! Build your community and shop circular fashion!!"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavoritesClient
        listings={listings}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
}
 
export default ListingPage;