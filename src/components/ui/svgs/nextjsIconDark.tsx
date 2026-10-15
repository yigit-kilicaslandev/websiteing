import type { SVGProps } from "react";

const NextjsIconDark = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 180 180">
    <mask
      height="180"
      id=":r8:mask0_408_134"
      maskUnits="userSpaceOnUse"
      width="180"
      x="0"
      y="0"
      style={{ maskType: "alpha" }}
    >
      <circle cx="90" cy="90" fill="black" r="90" />
    </mask>
    <g mask="url(#:r8:mask0_408_134)">
      <circle cx="90" cy="90" data-circle="true" fill="black" r="90" />
      <path
        d="M149.508 157.52 69.142 54H54v71.97h12.114V69.384l73.885 95.461a90 90 0 0 0 9.509-7.325"
        fill="url(#:r8:paint0_linear_408_134)"
      />
      <rect
        fill="url(#:r8:paint1_linear_408_134)"
        height="72"
        width="12"
        x="115"
        y="54"
      />
    </g>
    <defs>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id=":r8:paint0_linear_408_134"
        x1="109"
        x2="144.5"
        y1="116.5"
        y2="160.5"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id=":r8:paint1_linear_408_134"
        x1="121"
        x2="120.799"
        y1="54"
        y2="106.875"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export { NextjsIconDark };
