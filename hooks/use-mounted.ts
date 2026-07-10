"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => undefined;

export function useMounted(): boolean {
  return useSyncExternalStore(emptySubscribe, () => true, () => false);
}
