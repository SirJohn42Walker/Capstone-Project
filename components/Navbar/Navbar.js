import Link from "next/link";
import styled from "styled-components";
import {
  HomeIconSVG,
  GameIconSVG,
  RandomIconSVG,
  ProfileIconSVG,
} from "../Svgs/NavbarSVGs";

export default function Navbar() {
  return (
    <NavBar>
      <NavIcons>
        <li>
          <Link href="/">
            <HomeIconSVG width="50" heigth="50" fill="var(--color3)" />
          </Link>
        </li>
        <li>
          <Link href="/game">
            <GameIconSVG width="50" heigth="50" fill="var(--color3)" />
          </Link>
        </li>
        <li>
          <RandomIconSVG width="50" heigth="50" fill="var(--color3)" />
        </li>
        <li>
          <Link href="/profile">
            <ProfileIconSVG width="50" heigth="50" fill="var(--color3)" />
          </Link>
        </li>
      </NavIcons>
    </NavBar>
  );
}

const NavBar = styled.nav`
  position: fixed;
  width: 98vw;
  bottom: 1vw;
  left: 1vw;
  right: 1vw;
  height: 80px;
  border-radius: 20px;
  background-color: var(--color14);
  filter: drop-shadow(3px -3px 4px rgba(0, 0, 0, 0.25));
`;

const NavIcons = styled.ul`
  padding-left: 0;
  list-style-type: none;
  display: flex;
  justify-content: space-around;
`;
