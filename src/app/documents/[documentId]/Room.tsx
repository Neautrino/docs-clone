"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";

export function Room({ children }: { children: ReactNode }) {

    const params = useParams();

  return (
    <LiveblocksProvider publicApiKey={"pk_prod_vLBA3uN0oQIObDhZ5BEBstA2uJJ2brpLbuOC4c_-qa-h4xPwaM9aGH7Yskf1w2yB"}>
      <RoomProvider id={params.documentId as string}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}