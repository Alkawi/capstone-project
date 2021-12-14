import React from 'react'
import Navigation from './Navigation'

export default {
  title: 'Component/Navigation',
  component: Navigation,
}

export const NavBarDashboard = (): JSX.Element => (
  <Navigation page="dashboard" />
)
export const NavBarAdd = (): JSX.Element => <Navigation page="add" />
export const NavBarProfile = (): JSX.Element => <Navigation page="profile" />
