'use client';
import { FC, useState, useCallback } from 'react';
import { SafeReservation, SafeUser } from 'types';
import { useRouter } from 'next/navigation';

import { toast } from 'react-hot-toast';
import axios from 'axios';

import { Heading } from '@components/Heading';
import { Container } from '@components/Container';
import { ListingCard } from '@components/listings/ListingCard';

interface ReservationsClientProps {
  reservations: SafeReservation[];
  currentUser?: SafeUser | null;
}

export const ReservationsClient: FC<ReservationsClientProps> = ({
  reservations,
  currentUser,
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState('');

  const onCancel = useCallback(
    async (id: string) => {
      try {
        await axios.delete(`/api/reservations/${id}`);
        toast.success('Reservation cancelled');
        router.refresh();
      } catch (error: any) {
        toast.error(error?.response?.data?.error);
      }
      setDeletingId('');
    },
    [router]
  );

  return (
    <Container>
      <Heading
        title={'Reservations'}
        subtitle={'Bookings on your properties'}
      />
      <div
        className='
          mt-10
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3getCurrentUser
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        '
      >
        {reservations.map((reservation) => (
          <ListingCard
            key={reservation.id}
            data={reservation.listing}
            reservation={reservation}
            actionId={reservation.id}
            onAction={onCancel}
            disabled={deletingId === reservation.id}
            actionLabel={'Cancel guest reservation'}
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};
