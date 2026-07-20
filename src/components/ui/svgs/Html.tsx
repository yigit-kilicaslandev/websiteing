import type { SVGProps } from "react";

const Html = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.5 0h21l-1.91 21.56L12 24l-8.59-2.44L1.5 0zm16.11 7.03H7.59l.24 2.66h9.54l-.72 8.02L12 19.02l-4.65-1.31-.31-3.47h2.28l.16 1.79L12 16.72l2.52-.69.26-2.89H5.76L5.08 5h12.74l-.21 2.03z"/>
  </svg>
);

export { Html };