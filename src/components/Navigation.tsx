import { Navbar, NavLink as MantineNavLink } from "@mantine/core"
import React from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { IconHome2 } from "@tabler/icons"

export const Navigation = () => {
  const navigate = useNavigate()

  const handleRedirect = () => {
    navigate("/")
  }
  return (
    <Navbar width={{ base: 300 }}>
      <div>
        <NavLink to='/'>
          {({ isActive }) => (
            <MantineNavLink
              label='Home'
              active={isActive}
              icon={<IconHome2 size={16} />}
            />
          )}
        </NavLink>
        <NavLink to='/about'>
          {({ isActive }) => (
            <MantineNavLink
              label='About'
              active={isActive}
              icon={<IconHome2 size={16} />}
            />
          )}
        </NavLink>

        <NavLink to='/movies'>
          {({ isActive }) => (
            <MantineNavLink
              label='Movies'
              active={isActive}
              icon={<IconHome2 size={16} />}
            />
          )}
        </NavLink>
      </div>
    </Navbar>
  )
}
