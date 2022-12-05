import Link from "next/link";
import styled from "styled-components";
import {
  HomeIconSVG,
  GameIconSVG,
  RandomIconSVG,
  ProfileIconSVG,
} from "../Svgs/NavbarSVGs";
import {useState} from "react";

export default function Navbar() {
  const [activeState, SetActiveState] = useState("home");
  return (
    <NavBar>
      <NavIcons>
        <li>
          <Link href="/" onClick={() => SetActiveState("home")}>
            <HomeIconSVG
              width="50"
              heigth="50"
              fill={activeState === "home" ? "var(--color8)" : "var(--color3)"}
            />
          </Link>
        </li>
        <li>
          <Link href="/game/game" onClick={() => SetActiveState("game")}>
            <GameIconSVG
              width="50"
              heigth="50"
              fill={activeState === "game" ? "var(--color8)" : "var(--color3)"}
            />
          </Link>
        </li>
        <li>
          <Link href="/random" onClick={() => SetActiveState("random")}>
            <RandomIconSVG
              width="50"
              heigth="50"
              fill={
                activeState === "random" ? "var(--color8)" : "var(--color3)"
              }
            />
          </Link>
        </li>
        <li>
          <Link href="/profile" onClick={() => SetActiveState("profile")}>
            <ProfileIconSVG
              width="50"
              heigth="50"
              fill={
                activeState === "profile" ? "var(--color8)" : "var(--color3)"
              }
            />
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
