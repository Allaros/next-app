// app/providers.tsx
"use client"; // Важно: это объявляет компонент как Client Component

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import React from "react";

// Этот компонент обернет ваше приложение в SessionProvider
export default function AuthProvider({
  children,
  session, // Сессия передается как пропс из Server Component
}: {
  children: React.ReactNode;
  session: Session | null; // Используйте более точный тип для session, если он у вас есть (e.g., Session | null)
}) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
