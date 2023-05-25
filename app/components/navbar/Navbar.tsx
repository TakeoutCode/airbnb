'use client';

import { Container } from '../Container';
import { Logo } from '@components/navbar/Logo';
import { Search } from '@components/navbar/Search';
import { UserMenu } from '@components/navbar/UserMenu';
import { FC } from 'react';
import { SafeUser } from 'types';
import { Categories } from '@components/navbar/Categories';

interface NavbarProps {
  currentUser?: SafeUser | null;
}

export const Navbar: FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div
            className='
              flex 
              flex-row 
              items-center 
              justify-between
              gap-3
              md:gap-0
            '
          >
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};
