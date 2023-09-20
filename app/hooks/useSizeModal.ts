import { create } from 'zustand';

interface SizeModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useSizeModal = create<SizeModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default useSizeModal;