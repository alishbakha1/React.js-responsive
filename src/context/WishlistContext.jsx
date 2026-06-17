import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';

const WishlistContext = createContext();

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

const WISHLIST_STORAGE_KEY = 'asl_wishlist';

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState(() => {
    try {
      const saved = localStorage.getItem(WISHLIST_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToWishlist = useCallback((product) => {
    setWishlistItems((prev) => {
      if (prev.find((item) => item.id === product.id)) {
        toast.info(`${product.name} is already in your wishlist`);
        return prev;
      }
      toast.success(`${product.name} added to wishlist`);
      return [...prev, product];
    });
  }, []);

  const removeFromWishlist = useCallback((productId) => {
    setWishlistItems((prev) => {
      const item = prev.find((i) => i.id === productId);
      if (item) toast.info(`${item.name} removed from wishlist`);
      return prev.filter((item) => item.id !== productId);
    });
  }, []);

  const toggleWishlist = useCallback((product) => {
    setWishlistItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        toast.info(`${product.name} removed from wishlist`);
        return prev.filter((item) => item.id !== product.id);
      }
      toast.success(`${product.name} added to wishlist`);
      return [...prev, product];
    });
  }, []);

  const isInWishlist = useCallback(
    (productId) => wishlistItems.some((item) => item.id === productId),
    [wishlistItems]
  );

  const wishlistCount = wishlistItems.length;

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        isInWishlist,
        wishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContext;
