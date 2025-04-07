import type { ReactElement, SVGProps } from "react";

const nuqs = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 128 128"
    {...props}
  >
    <path
      fill="#000"
      d="M64 0a64 64 0 0 1 64 64 64 64 0 0 1-64 64A64 64 0 0 1 0 64 64 64 0 0 1 64 0"
    />
    <path
      fill="#fff"
      d="m35.524 25.45.42 9.36-1.14-.42q.66-5.1 3.42-7.38t7.02-2.28q5.16 0 8.04 3.24 2.94 3.24 2.94 8.82v20.46h-9.06V39.79q0-2.76-.48-4.44-.42-1.68-1.5-2.52-1.08-.9-2.88-.9-2.88 0-4.38 1.98-1.44 1.98-1.44 5.88v17.46h-9.12v-31.8zm57.831 31.8-.36-9.18 1.14.42q-.66 4.98-3.42 7.26-2.76 2.22-6.9 2.22-5.1 0-7.98-3.24t-2.88-8.82V25.45h9.12v17.46q0 2.76.42 4.44t1.44 2.58q1.08.84 2.88.84 2.76 0 4.2-1.98 1.5-1.98 1.5-5.88V25.45h9.06v31.8zm-36.568 13.2v40.8h-9.12v-15.6l.78.48q-.78 2.22-2.22 3.78-1.44 1.5-3.42 2.28t-4.38.78q-4.32 0-7.44-2.16-3.06-2.22-4.62-5.94-1.5-3.78-1.5-8.52t1.5-8.46q1.56-3.78 4.62-5.94 3.12-2.22 7.44-2.22 3.72 0 6.3 1.74t3.78 5.04l-.66.54.24-6.6zm-9.3 20.82q.78-2.22.78-4.92 0-2.64-.78-4.8-.78-2.22-2.4-3.54-1.56-1.38-3.84-1.38-3.42 0-5.28 2.82-1.8 2.76-1.8 6.9 0 4.2 1.8 6.96 1.86 2.76 5.28 2.76 2.28 0 3.84-1.32 1.62-1.32 2.4-3.48m46.244-10.5q-.36-2.16-2.04-3.42-1.62-1.32-3.72-1.32t-3.42 1.02-1.26 2.7q.06 1.62 1.62 2.52 1.56.84 4.2 1.32 4.92.78 7.92 1.98 3 1.14 4.5 3.06 1.56 1.92 1.56 4.92 0 3.12-1.86 5.22-1.8 2.1-4.98 3.18-3.18 1.02-7.32 1.02-4.62 0-8.1-1.26-3.42-1.32-5.4-3.72-1.98-2.46-2.22-5.82l9.12-.48q.3 1.56 1.08 2.7.84 1.08 2.16 1.68 1.38.54 3.18.54 2.04 0 3.54-.78 1.5-.84 1.5-2.46-.06-1.08-.72-1.8-.6-.72-1.62-1.08-.96-.36-2.64-.72-.48-.06-1.2-.24-4.86-.96-7.74-2.04-2.82-1.14-4.38-2.94-1.56-1.86-1.56-4.74 0-3.12 1.68-5.4 1.74-2.28 4.98-3.48 3.24-1.26 7.74-1.26 6 0 9.84 2.88 3.84 2.82 4.68 7.86z"
    />
  </svg>
);
export default nuqs;
