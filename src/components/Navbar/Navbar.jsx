import React from 'react'
import { NavItem } from '../NavItem/NavItem'

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <NavItem content = 'Inicio' />
        <NavItem content = 'Mis proyectos' />
        <NavItem content = 'Mis estudios' />
        <NavItem content = 'Experiencia' />
      </ul>
    </nav>
  )
}
