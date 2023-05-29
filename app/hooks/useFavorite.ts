import { MouseEvent, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';

import axios from 'axios';
import { toast } from 'react-hot-toast';

import { SafeUser } from 'types';

import { useLoginModal } from '@hooks/useLoginModal';

interface UseFavorite {
  listingId: string;
  currentUser?: SafeUser | null;
}

export const useFavorite = ({ listingId, currentUser }: UseFavorite) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(listingId);
  }, [currentUser, listingId]);

  const toggleFavorite = useCallback(
    async (e: MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      if (!currentUser) {
        return loginModal.onOpen();
      }
      try {
        let request;
        if (hasFavorited) {
          request = () => axios.delete(`/api/favorites/${listingId}`);
        } else {
          request = () => axios.post(`/api/favorites/${listingId}`);
        }
        await request();
        router.refresh();
        toast.success('Succes');
      } catch (error) {
        toast.error('Something went wrong');
      }
    },
    [currentUser, hasFavorited, listingId, loginModal, router]
  );
  return {
    hasFavorited,
    toggleFavorite,
  };
};
