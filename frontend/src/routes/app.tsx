import { createFileRoute, redirect } from "@tanstack/react-router";
import AppShell from "@/components/app/AppShell";
import { getStoredToken } from "@/lib/auth-storage";

export const Route = createFileRoute("/app")({
  beforeLoad: () => {
    // Skip auth check on the server — localStorage is unavailable during SSR.
    // The client will handle the redirect on hydration if the token is missing.
    if (typeof window === "undefined") return;

    const token = getStoredToken();
    if (!token) {
      throw redirect({ to: "/login", replace: true });
    }
  },
  component: AppShell,
});
