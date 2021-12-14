import React from 'react'
import { HiHome, HiPlusCircle, HiOutlineUser } from 'react-icons/hi'
import { NavLink, useParams } from 'react-router-dom'
import styled from 'styled-components'

type NavigationProps = {
  page: 'dashboard' | 'add' | 'profile'
}

export default function Navigation({ page }: NavigationProps): JSX.Element {
  const { username } = useParams()

  return (
    <NavBar>
      <NavLink to={`/${username}`}>
        <HomeIcon page={page} />
      </NavLink>
      <NavLink to={`/${username}/addConcert`}>
        <AddIcon page={page} />
      </NavLink>
      <NavLink to={`/${username}/profile`}>
        <ProfileIcon page={page} />
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
const HomeIcon = styled(HiHome)<NavigationProps>`
  color: ${(props) =>
    props.page === 'dashboard'
      ? 'var(--color-blue)'
      : 'var(--color-font-dark)'};
  height: 1.5rem;
  width: 1.5rem;
`
const AddIcon = styled(HiPlusCircle)<NavigationProps>`
  color: ${(props) =>
    props.page === 'add' ? 'var(--color-blue)' : 'var(--color-font-dark)'};
  height: 1.5rem;
  width: 1.5rem;
`
const ProfileIcon = styled(HiOutlineUser)<NavigationProps>`
  color: ${(props) =>
    props.page === 'profile' ? 'var(--color-blue)' : 'var(--color-font-dark)'};
  height: 1.5rem;
  width: 1.5rem;
`
