import Link from "next/link";
import styled from "styled-components";
import {HomeIconSVG, RandomIconSVG, ProfileIconSVG} from "../Svgs/NavbarSVGs";
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
          <Link href="/game/level1" onClick={() => SetActiveState("game")}>
            <ProfileIconSVG
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
      </NavIcons>
    </NavBar>
  );
}

const NavBar = styled.nav`
  position: fixed;
  width: 96vw;
  bottom: 2vw;
  left: 2vw;
  right: 2vw;
  height: 80px;
  border-radius: 20px;
  background: linear-gradient(
    172deg,
    var(--color12),
    var(--color13),
    var(--color14),
    var(--color14)
  );
  filter: drop-shadow(6px -6px 4px rgba(0, 0, 0, 0.42));
`;

const NavIcons = styled.ul`
  padding-left: 0;
  list-style-type: none;
  display: flex;
  justify-content: space-around;
`;
