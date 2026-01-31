// app/404-bridge/page.tsx
"use client";

import { useEffect } from "react";

export default function Bridge404() {
  useEffect(() => {
    const from = encodeURIComponent(window.location.href);
    window.location.replace(`https://api.buk1t.com/404?from=${from}`);
  }, []);

  return null;
}