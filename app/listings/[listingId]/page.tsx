import getCurrentUser from '@actions/getCurrentUser';
import getListingById from '@actions/getListingById';
import getReservations from '@actions/getReservations';

import { EmptyState } from '@components/EmptyState';
import ListingClient from '@listings/[listingId]/ListingClient';

interface Params {
  listingId?: string;
}

export const ListingPage = async ({ params }: { params: Params }) => {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();
  const reservations = await getReservations(params);

  if (!listing) {
    return <EmptyState />;
  }
  return (
    <ListingClient
      listing={listing}
      reservations={reservations}
      currentUser={currentUser}
    />
  );
};
export default ListingPage;
