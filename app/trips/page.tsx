
import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getReservations from "@/app/actions/getReservations";
import TripsClient from "./TripsClient";

// import TripsClient from "./TripsClient";

const TripsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState
          title="Please login"
          subtitle="To make a reservation please create an account or login."
        />
      </ClientOnly>
    );
  }

  const reservations = await getReservations({ 
    userId: currentUser.id
 });

  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="Get shopping!"
          subtitle="Browse our sellers to find your next private wardrobe and book now!"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <TripsClient
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
}
 
export default TripsPage;