import React from 'react'
import { HiHome, HiPlusCircle, HiOutlineUser } from 'react-icons/hi'
import { NavLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'

type NavProps = {
  pathName: string
}

export default function Navigation(): JSX.Element {
  const { pathname } = useLocation()
  let username = pathname
  if (pathname.lastIndexOf('/') !== 0) {
    username = pathname.substring(0, pathname.indexOf('/', 1))
  }

  return (
    <NavBar pathName={pathname}>
      <NavLink to={`${username}`}>
        <HomeIcon />
      </NavLink>
      <NavLink to={`${username}/addConcert`}>
        <AddIcon />
      </NavLink>
      <NavLink to={`${username}/profile`}>
        <ProfileIcon />
      </NavLink>
    </NavBar>
  )
}

const NavBar = styled.nav<NavProps>`
  border: 1px solid var(--color-font-dark);
  position: sticky;
  bottom: 0;
  background-color: var(--color-orange);
  display: ${(props) =>
    props.pathName === '/login' || props.pathName === '/register'
      ? 'none'
      : 'flex'};
  justify-content: space-around;
  padding: 1rem;
`
const HomeIcon = styled(HiHome)`
  color: var(--color-font-dark);
  height: 1.5rem;
  width: 1.5rem;
`
const AddIcon = styled(HiPlusCircle)`
  color: var(--color-font-dark);
  height: 1.5rem;
  width: 1.5rem;
`
const ProfileIcon = styled(HiOutlineUser)`
  color: var(--color-font-dark);
  height: 1.5rem;
  width: 1.5rem;
`
