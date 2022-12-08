import styled from "styled-components";

export function RedButtonSVG({width, height}) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 183 183"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_46_225)">
        <circle cx="91.5" cy="87.5" r="87.5" fill="#818181" />
      </g>
      <g filter="url(#filter1_i_46_225)">
        <circle cx="92" cy="88" r="75" fill="#9A031E" />
      </g>
      <g filter="url(#filter2_f_46_225)">
        <ellipse
          cx="67.8336"
          cy="43.5311"
          rx="25.8188"
          ry="14.9648"
          transform="rotate(-28.7221 67.8336 43.5311)"
          fill="#E8D2D2"
        />
      </g>
      <g filter="url(#filter3_f_46_225)">
        <ellipse
          cx="70.3188"
          cy="42.0287"
          rx="7.5"
          ry="12.5308"
          transform="rotate(57.7574 70.3188 42.0287)"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_46_225"
          x="0"
          y="0"
          width="183"
          height="183"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_46_225"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_46_225"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_i_46_225"
          x="16"
          y="13"
          width="151"
          height="152"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="4"
            operator="erode"
            in="SourceAlpha"
            result="effect1_innerShadow_46_225"
          />
          <feOffset dx="-1" dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_46_225"
          />
        </filter>
        <filter
          id="filter2_f_46_225"
          x="34.0704"
          y="15.4707"
          width="67.5262"
          height="56.1207"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="5"
            result="effect1_foregroundBlur_46_225"
          />
        </filter>
        <filter
          id="filter3_f_46_225"
          x="52.9871"
          y="26.8128"
          width="34.6635"
          height="30.4318"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="3"
            result="effect1_foregroundBlur_46_225"
          />
        </filter>
      </defs>
    </Svg>
  );
}

const Svg = styled.svg`
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
