"use client";
import { createContext, useContext, ReactNode, useState } from "react";

interface ModalContextType {
  openRaidModal: () => void;
  closeRaidModal: () => void;
  isOpenedRaid: boolean;
}

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}

interface ModalProviderProps {
  children: ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps) {
  const [isOpenedRaid, setIsOpenRaid] = useState<boolean>(false);

  const openRaidModal = () => {
    setIsOpenRaid(true);
    document.body.classList.add("modal-open");
  };

  const closeRaidModal = () => {
    setIsOpenRaid(false);
    document.body.classList.add("modal-open");
  };
  const modalContextValue: ModalContextType = {
    openRaidModal,
    closeRaidModal,
    isOpenedRaid,
  };
  return (
    <ModalContext.Provider value={modalContextValue}>
      {children}
    </ModalContext.Provider>
  );
}
