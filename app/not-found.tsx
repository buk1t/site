// app/not-found.tsx
import { redirect } from "next/navigation";

export default function NotFound() {
  // We can't access window here (server component),
  // so we redirect to a generic 404 and let the client pass ?from.
  // Use /404 within the same project if you want client-side capture.
  redirect("/404-bridge");
}