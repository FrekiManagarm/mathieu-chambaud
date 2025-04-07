import type { ReactElement, SVGProps } from "react";

const PostHog = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 50 30"
    {...props}
  >
    <path
      fill="#1D4AFF"
      d="M10.891 17.206a1 1 0 0 1-1.788 0l-.882-1.763a1 1 0 0 1 0-.894l.882-1.763a1 1 0 0 1 1.788 0l.882 1.763a1 1 0 0 1 0 .894l-.882 1.763zm0 9.997a1 1 0 0 1-1.788 0L8.22 25.44a1 1 0 0 1 0-.894l.882-1.763a1 1 0 0 1 1.788 0l.882 1.763a1 1 0 0 1 0 .894l-.882 1.763z"
    />
    <path
      fill="#F9BD2B"
      d="M0 23.408c0-.89 1.077-1.337 1.707-.707l4.583 4.583c.63.63.184 1.708-.707 1.708H1a1 1 0 0 1-1-1v-4.584zm0-4.828a1 1 0 0 0 .293.708l9.411 9.41a1 1 0 0 0 .707.294h5.17c.89 0 1.337-1.077.707-1.707l-14.58-14.58C1.077 12.074 0 12.52 0 13.41v5.17zm0-9.997a1 1 0 0 0 .293.707L19.7 28.7a1 1 0 0 0 .707.293h5.17c.89 0 1.337-1.078.707-1.708L1.707 2.707C1.077 2.077 0 2.523 0 3.414v5.17zm9.997 0a1 1 0 0 0 .293.707l17.994 17.995c.63.63 1.707.183 1.707-.708v-5.169a1 1 0 0 0-.293-.707L11.704 2.707c-.63-.63-1.707-.184-1.707.707v5.17zm11.704-5.876c-.63-.63-1.707-.184-1.707.707v5.17a1 1 0 0 0 .293.706l7.997 7.998c.63.63 1.707.183 1.707-.708v-5.169a1 1 0 0 0-.293-.707l-7.997-7.997z"
    />
    <path
      fill="#000"
      d="m42.525 23.53-9.413-9.412c-.63-.63-1.707-.184-1.707.707v13.167a1 1 0 0 0 1 1h14.58a1 1 0 0 0 1-1v-1.2c0-.552-.449-.993-.997-1.064a7.723 7.723 0 0 1-4.463-2.197zm-6.321 2.263a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2z"
    />
    <path
      fill="#1D4AFF"
      d="M0 27.992a1 1 0 0 0 1 1h4.583c.891 0 1.337-1.078.707-1.708l-4.583-4.583c-.63-.63-1.707-.184-1.707.707v4.584zm9.997-16.995-8.29-8.29C1.077 2.077 0 2.523 0 3.414v5.17a1 1 0 0 0 .293.706l9.704 9.705v-7.998zm-8.29 1.707c-.63-.63-1.707-.184-1.707.707v5.17a1 1 0 0 0 .293.706l9.704 9.705v-7.998l-8.29-8.29z"
    />
    <path
      fill="#F54E00"
      d="M19.994 11.411a1 1 0 0 0-.293-.707l-7.997-7.997c-.63-.63-1.707-.184-1.707.707v5.17a1 1 0 0 0 .293.706l9.704 9.705V11.41zm-9.997 17.58h5.583c.891 0 1.337-1.077.707-1.707l-6.29-6.29v7.998zm0-17.994v7.583a1 1 0 0 0 .293.708l9.704 9.704v-7.584a1 1 0 0 0-.293-.707l-9.704-9.704z"
    />
  </svg>
);
export default PostHog;
