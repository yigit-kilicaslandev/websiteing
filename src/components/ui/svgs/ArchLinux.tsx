import type { SVGProps } from "react";

const ArchLinux = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 256 256"
  >
    <path
      fill="currentColor"
      d="M128 16C117 43 108 65 97 90c-11 25-23 49-40 87 18-13 36-22 71-38 35 16 53 25 71 38-17-38-29-62-40-87-11-25-20-47-31-74Zm0 62c8 20 15 35 26 56-8-4-16-7-26-11-10 4-18 7-26 11 11-21 18-36 26-56Z"
    />
  </svg>
);

export { ArchLinux };