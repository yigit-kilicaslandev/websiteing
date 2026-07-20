import type { SVGProps } from "react";

const ArchLinux = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 256 256"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M128 16C95 96 74 150 32 240C65 221 91 210 128 194C165 210 191 221 224 240C182 150 161 96 128 16ZM128 86C140 116 148 136 164 164C154 158 144 154 128 149C112 154 102 158 92 164C108 136 116 116 128 86Z"
    />
  </svg>
);

export { ArchLinux };