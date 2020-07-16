import React from "react"
import { TopMenu, Footer } from '../..'
import { StyledLayoutHOC } from './layout.styled' 

export default function Layout({ children }) {
  return (
    <StyledLayoutHOC>
      <TopMenu></TopMenu>
      {children}
      <Footer></Footer>
    </StyledLayoutHOC>
  )
}