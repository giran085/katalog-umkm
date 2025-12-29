import { create } from 'zustand';

export const useCartStore = create((set) => ({
    items: [],
    isOpen: false,

    toggleDrawer: () => set((state) => ({ isOpen: !state.isOpen })),
    openDrawer: () => set({ isOpen: true }),
    closeDrawer: () => set({ isOpen: false }),

    addItem: (product) => set((state) => {
        const existingItem = state.items.find((item) => item.id === product.id);
        if (existingItem) {
            return {
                items: state.items.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
            };
        }
        return { items: [...state.items, { ...product, quantity: 1 }] };
    }),

    removeItem: (productId) => set((state) => ({
        items: state.items.filter((item) => item.id !== productId),
    })),

    decrementItem: (productId) => set((state) => {
        const existingItem = state.items.find((item) => item.id === productId);
        if (existingItem && existingItem.quantity > 1) {
            return {
                items: state.items.map((item) =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                ),
            };
        }
        // If quantity is 1, remove it
        return {
            items: state.items.filter((item) => item.id !== productId),
        };
    }),

    clearCart: () => set({ items: [] }),
}));
