import React from 'react'
import { HiHome, HiPlusCircle, HiOutlineUser } from 'react-icons/hi'
import { NavLink, useParams } from 'react-router-dom'
import styled from 'styled-components'

export default function Navigation(): JSX.Element {
  const { username } = useParams()

  return (
    <NavBar>
      <NavLink to={`/${username}`}>
        <HomeIcon />
      </NavLink>
      <NavLink to={`/${username}/addConcert`}>
        <AddIcon />
      </NavLink>
      <NavLink to={`/${username}/profile`}>
        <ProfileIcon />
      </NavLink>
    </NavBar>
  )
}

const NavBar = styled.nav`
  border: 1px solid var(--color-font-dark);
  display: flex;
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
