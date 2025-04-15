"use client";

import { Suspense } from "react";
import SignOutContent from "./SignOutContent";

export default function SignOut() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignOutContent />
    </Suspense>
  );
} 