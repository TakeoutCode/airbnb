import prisma from '@libs/prismadb';

import getCurrentUser from '@actions/getCurrentUser';

export default async function getFavoriteListings() {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return [];
    }

    const favorites = await prisma.listing.findMany({
      where: {
        id: {
          in: [...(currentUser.favoriteIds || [])],
        },
      },
    });

    const safeFavorites = favorites.map((favorites) => ({
      ...favorites,
      createdAt: favorites.createdAt.toISOString(),
    }));

    return safeFavorites;
  } catch (erro: any) {
    throw new Error(erro);
  }
}
