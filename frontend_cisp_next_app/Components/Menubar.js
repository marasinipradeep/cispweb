import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

export default function Menubar(props) {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
            </Hamburger>
            <Menu isOpen={isOpen}>

                <Link href="/aboutus">
                    <MenuLink>About us</MenuLink>
                </Link>
                <Link href="/services">
                    <MenuLink>Services</MenuLink>
                </Link>
                <Link href="/contactus">
                    <MenuLink>Contact us</MenuLink>
                </Link>
            </Menu>

        </>
    )
}

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  text-transform:uppercase;
  color: #666666;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  font-weight:700;
  &:hover {
    color: #7b7fda;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;