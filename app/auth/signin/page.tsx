"use client";

import { Suspense } from "react";
import SignInContent from "./SignInContent";

export default function SignIn() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignInContent />
    </Suspense>
  );
} 