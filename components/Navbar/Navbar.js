import styled from "styled-components";

export default function Navbar() {
  return (
    <NavBar>
      <NavIcons>
        <li>
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="var(--color3)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>The home button</title>
            <path d="M39.5959 7.71875C39.9854 7.5773 40.3028 7.2869 40.4782 6.91144C40.6536 6.53598 40.6727 6.1062 40.5313 5.71667C40.3898 5.32713 40.0994 5.00974 39.724 4.83431C39.3485 4.65889 38.9187 4.6398 38.5292 4.78125L12.5 14.2458V6.25C12.5 5.8356 12.3354 5.43817 12.0424 5.14515C11.7494 4.85212 11.3519 4.6875 10.9375 4.6875H7.81252C7.39812 4.6875 7.0007 4.85212 6.70767 5.14515C6.41464 5.43817 6.25002 5.8356 6.25002 6.25V16.5208L4.15419 17.2813C3.76465 17.4227 3.44726 17.7131 3.27184 18.0886C3.09641 18.464 3.07733 18.8938 3.21877 19.2833C3.36022 19.6729 3.65062 19.9903 4.02608 20.1657C4.40155 20.3411 4.83132 20.3602 5.22086 20.2188L39.5959 7.71875Z" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.28958 23.1563L37.5 11.8063V18.9375L45.8458 21.9708C46.2354 22.1123 46.5528 22.4027 46.7282 22.7781C46.9036 23.1536 46.9227 23.5834 46.7812 23.9729C46.6398 24.3625 46.3494 24.6798 45.9739 24.8553C45.5985 25.0307 45.1687 25.0498 44.7792 24.9083L43.75 24.5333V42.1896H45.3125C45.7269 42.1896 46.1243 42.3542 46.4174 42.6472C46.7104 42.9403 46.875 43.3377 46.875 43.7521C46.875 44.1665 46.7104 44.5639 46.4174 44.8569C46.1243 45.15 45.7269 45.3146 45.3125 45.3146H4.6875C4.2731 45.3146 3.87567 45.15 3.58265 44.8569C3.28962 44.5639 3.125 44.1665 3.125 43.7521C3.125 43.3377 3.28962 42.9403 3.58265 42.6472C3.87567 42.3542 4.2731 42.1896 4.6875 42.1896H6.25V23.1708L6.28958 23.1583V23.1563ZM37.5 42.1875V22.2604L40.625 23.3958V42.1875H37.5ZM18.75 29.6875C18.3356 29.6875 17.9382 29.8521 17.6451 30.1451C17.3521 30.4382 17.1875 30.8356 17.1875 31.25V40.625C17.1875 41.4875 17.8875 42.1875 18.75 42.1875H25C25.4144 42.1875 25.8118 42.0229 26.1049 41.7299C26.3979 41.4368 26.5625 41.0394 26.5625 40.625V31.25C26.5625 30.8356 26.3979 30.4382 26.1049 30.1451C25.8118 29.8521 25.4144 29.6875 25 29.6875H18.75Z"
            />
          </svg>
        </li>
        <li>
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="var(--color3)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>The game start button</title>
            <path d="M14.5833 2.08334C12.2917 2.08334 10.4167 3.95834 10.4167 6.25V43.75C10.4167 44.8551 10.8556 45.9149 11.637 46.6963C12.4184 47.4777 13.4783 47.9167 14.5833 47.9167H29.1667C34.9167 47.9167 39.5833 43.25 39.5833 37.5V6.25C39.5833 5.14493 39.1443 4.08513 38.3629 3.30372C37.5815 2.52232 36.5217 2.08334 35.4167 2.08334H14.5833ZM16.6667 8.33334H33.3333V22.9167H16.6667V8.33334ZM18.75 29.1667H20.8333V33.3333H25V35.4167H20.8333V39.5833H18.75V35.4167H14.5833V33.3333H18.75V29.1667ZM33.3333 31.25C34.4792 31.25 35.4167 32.1875 35.4167 33.3333C35.4167 34.4792 34.4792 35.4167 33.3333 35.4167C32.1875 35.4167 31.25 34.4792 31.25 33.3333C31.25 32.1875 32.1875 31.25 33.3333 31.25ZM29.1667 35.4167C30.3125 35.4167 31.25 36.3542 31.25 37.5C31.25 38.6458 30.3125 39.5833 29.1667 39.5833C28.0208 39.5833 27.0833 38.6458 27.0833 37.5C27.0833 36.3542 28.0208 35.4167 29.1667 35.4167Z" />
          </svg>
        </li>
        <li>
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="var(--color3)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>The random-level button</title>
            <path d="M12.4813 21.6828C12.6438 23.4016 11.7266 24.8922 10.4453 24.9953C9.16406 25.0969 7.99219 23.7875 7.83125 22.0687C7.66875 20.3484 8.58594 18.8594 9.86719 18.7562C11.1484 18.6422 12.3203 19.95 12.4813 21.6828ZM19.8203 40.6187C21.1016 40.5172 22.0188 39.0281 21.8563 37.3078C21.6953 35.575 20.5219 34.2672 19.2422 34.3828C17.9609 34.4844 17.0438 35.9734 17.2063 37.6937C17.3672 39.4125 18.5406 40.7219 19.8203 40.6187ZM40.1344 18.7562C41.4156 18.8578 42.3313 20.3469 42.1688 22.0672C42.0078 23.8 40.8344 25.1078 39.5531 24.9937C38.2719 24.8906 37.3563 23.4016 37.5188 21.6813C37.6797 19.9625 38.8531 18.6531 40.1344 18.7562ZM37.4813 29.8797C37.6438 28.1609 36.7266 26.6703 35.4469 26.5672C34.1656 26.4656 32.9938 27.775 32.8313 29.4937C32.6688 31.2141 33.5859 32.7031 34.8656 32.8062C36.1469 32.9203 37.3188 31.6125 37.4813 29.8797ZM30.7594 34.3812C32.0406 34.4828 32.9563 35.9719 32.7938 37.6922C32.6328 39.425 31.4594 40.7328 30.1781 40.6172C28.8969 40.5156 27.9813 39.0266 28.1438 37.3062C28.3047 35.5875 29.4781 34.2781 30.7594 34.3812Z" />
            <path d="M21.6922 3.82969L7.02188 10.1625C6.67969 10.3156 6.37188 10.5219 6.1 10.7719C5.25039 10.9799 4.49527 11.4672 3.95578 12.1557C3.4163 12.8443 3.12373 13.694 3.125 14.5688V36.7094C3.12511 37.6199 3.39041 38.5107 3.88848 39.2729C4.38655 40.0352 5.09584 40.6358 5.92969 41.0016L21.0875 47.6469C21.5516 47.85 22.025 47.9563 22.4938 47.975C24.1086 48.5896 25.893 48.5896 27.5078 47.975C27.9734 47.9563 28.4484 47.85 28.9125 47.6469L44.0688 41.0016C44.9031 40.636 45.6129 40.0351 46.1113 39.2726C46.6097 38.51 46.8751 37.6188 46.875 36.7078V14.5672C46.8765 13.7264 46.6061 12.9077 46.1044 12.233C45.6026 11.5584 44.8963 11.0639 44.0906 10.8234C43.8165 10.5461 43.4933 10.322 43.1375 10.1625L28.3094 3.82969C27.2683 3.36487 26.1409 3.12463 25.0008 3.12463C23.8606 3.12463 22.7333 3.36487 21.6922 3.82969ZM23.4375 23.1406V44.0719C23.4372 44.2014 23.4046 44.3289 23.3428 44.4427C23.281 44.5566 23.1918 44.6533 23.0833 44.7241C22.9749 44.7949 22.8505 44.8377 22.7214 44.8484C22.5923 44.8592 22.4625 44.8378 22.3438 44.7859L7.18282 38.1406C6.90493 38.0183 6.66872 37.8176 6.50305 37.5631C6.33739 37.3087 6.24946 37.0114 6.25 36.7078V14.5672C6.25016 14.4367 6.28301 14.3083 6.34555 14.1937C6.40809 14.0792 6.49833 13.9821 6.60804 13.9114C6.71774 13.8407 6.8434 13.7986 6.97356 13.789C7.10371 13.7794 7.23421 13.8025 7.35313 13.8563L21.5984 20.2906C22.1468 20.5382 22.6121 20.9388 22.9383 21.4444C23.2645 21.95 23.4379 22.5389 23.4375 23.1406ZM26.5625 44.0719V23.1375C26.5625 22.5361 26.7359 21.9474 27.0621 21.4422C27.3884 20.9369 27.8534 20.5365 28.4016 20.2891L42.6469 13.8547C42.7659 13.8009 42.8966 13.7777 43.0268 13.7875C43.1571 13.7972 43.2829 13.8394 43.3926 13.9103C43.5024 13.9812 43.5926 14.0784 43.655 14.1932C43.7175 14.308 43.7501 14.4365 43.75 14.5672V36.7078C43.7498 37.0111 43.6614 37.3078 43.4954 37.5616C43.3295 37.8155 43.0933 38.0156 42.8156 38.1375L27.6563 44.7844C27.5374 44.8365 27.4075 44.8583 27.2782 44.8477C27.1489 44.837 27.0242 44.7944 26.9155 44.7235C26.8068 44.6526 26.7175 44.5558 26.6556 44.4418C26.5937 44.3277 26.5612 44.2001 26.5609 44.0703L26.5625 44.0719ZM25 11.7188C22.4109 11.7188 20.3125 11.0188 20.3125 10.1562C20.3125 9.29375 22.4109 8.59375 25 8.59375C27.5891 8.59375 29.6875 9.29375 29.6875 10.1562C29.6875 11.0188 27.5891 11.7188 25 11.7188Z" />
          </svg>
        </li>
        <li>
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="var(--color3)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>The profile-page button</title>
            <path d="M25.3561 3.27988C20.991 4.26777 15.9248 5.82627 11.4908 7.47188C7.3343 9.01445 3.70559 10.6746 1.9385 11.7902L4.73479 15.6971C8.34475 13.8512 15.9746 10.4329 25.2803 7.68799C25.2915 6.48613 25.3219 5.08535 25.3562 3.27979L25.3561 3.27988ZM25.2823 9.52227C16.5369 12.1432 9.28499 15.3695 5.76975 17.1429L6.87942 18.6934C13.2227 16.0696 19.5738 13.5358 25.3603 11.48C25.3177 10.8396 25.2933 10.2049 25.2823 9.52227ZM26.343 12.9973C20.145 15.1854 13.2388 17.9528 6.37288 20.8048L6.36672 20.7903C4.18459 21.8789 2.81936 23.0579 1.76868 24.2622C2.07864 24.2812 2.42141 24.2878 2.82366 24.2583C3.94905 24.1756 5.39104 23.9134 7.02112 23.5073C10.2816 22.6952 14.3024 21.3139 18.2919 19.7111C22.2814 18.1084 26.2454 16.283 29.4092 14.5902C31.403 13.5236 33.0319 12.4887 34.1727 11.6441C31.5125 11.634 28.5648 12.26 26.343 12.9973ZM28.137 17.2258C27.6025 17.4926 27.0658 17.7549 26.5269 18.0126C27.1748 18.4106 27.6482 19.0837 27.9299 19.8282C28.3151 20.8458 28.4076 22.064 28.1805 23.3243C27.9534 24.5848 27.4454 25.6729 26.7363 26.4538C26.0271 27.2348 25.0337 27.7461 23.975 27.5171C22.9162 27.2882 22.1749 26.4016 21.7898 25.384C21.4046 24.3664 21.3118 23.1482 21.539 21.8878C21.6624 21.2022 21.8698 20.5683 22.1466 20.0063C21.086 20.4655 20.0195 20.9108 18.9473 21.3421C17.5366 21.9094 16.1155 22.4503 14.6846 22.9645C15.7934 25.0078 17.3526 26.6829 19.7008 27.8772L20.5963 28.3327L20.0258 29.1598C19.1951 30.3642 19.3634 32.1504 20.2089 33.4541C21.0545 34.7578 22.3447 35.4948 23.9823 34.8599C29.7864 32.6092 34.1609 32.0464 38.2182 32.798C41.6204 33.4283 44.7736 34.9854 48.3582 37.0764C47.1448 34.317 45.041 31.4725 42.4277 29.0481C39.1088 25.9695 35.0019 23.5706 31.0673 22.7347L30.517 22.6177L30.3929 22.0691C30.3146 21.7236 29.6115 19.1675 28.137 17.2259V17.2258ZM25.2535 19.4105C24.9803 19.4213 24.6479 19.5809 24.286 19.9795C23.8404 20.4701 23.4331 21.2855 23.2576 22.2596C23.0823 23.2335 23.1761 24.1576 23.4181 24.7969C23.66 25.4361 23.9862 25.7216 24.2868 25.7866C24.5876 25.8517 24.9882 25.7235 25.4337 25.2329C25.8793 24.7423 26.2867 23.9266 26.4622 22.9526C26.6376 21.9787 26.5436 21.0546 26.3016 20.4153C26.0596 19.776 25.7335 19.4906 25.4328 19.4256C25.3739 19.413 25.3137 19.408 25.2535 19.4105ZM13.0061 23.5512C11.2223 24.1565 9.50803 24.6794 7.92991 25.0891C7.5217 27.4337 8.88079 30.5035 9.83713 32.0406C13.3696 34.5854 16.4963 37.1258 22.1643 38.8786L21.6867 36.6497C20.4595 36.3005 19.4128 35.4569 18.7342 34.4104C17.7202 32.847 17.3616 30.7729 18.1239 28.9993C15.7879 27.6159 14.149 25.7226 13.0061 23.5512ZM7.48362 32.5434C6.60169 33.837 5.1428 34.3885 3.78997 34.6695C5.28264 37.1497 8.62795 39.5432 12.8931 41.7108C16.9268 43.7609 21.7189 45.6337 26.3906 47.4335C25.2293 45.5408 24.433 43.448 24.2125 41.2489C15.7982 39.2424 11.9961 35.6547 7.48372 32.5434H7.48362ZM4.77893 38.5561C3.52073 41.4281 2.61721 44.5022 2.46868 47.5586H21.862C18.4613 46.2134 15.0958 44.8022 12.0966 43.2779C9.24504 41.8287 6.7009 40.2907 4.77893 38.5561Z" />
          </svg>
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
