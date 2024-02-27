"use client";
import React, { ReactNode } from "react";
import { PageProvider } from "@/contexts/PageContext";
import { SolanaWalletProvider } from "@/contexts/SolanaWalletProvider";
import { QueryClientProvider, QueryClient } from "react-query";
import { ModalProvider } from "@/contexts/ModalContext";
import RaidModal from "@/components/RaidModal";

const queryClient = new QueryClient();


export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SolanaWalletProvider>
      <QueryClientProvider client={queryClient}>
        <PageProvider>
          <ModalProvider>
            {children}
            <RaidModal />
          </ModalProvider>
        </PageProvider>
      </QueryClientProvider>
    </SolanaWalletProvider>
  );
}
