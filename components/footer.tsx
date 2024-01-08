import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Mathieu Chambaud. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">A propos de ce site:</span> réalisé avec
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, hébergement sur Vercel.
      </p>
    </footer>
  );
}
