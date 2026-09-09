import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, ShoppingBag, Trash2, X } from "lucide-react";
import { products } from "../data/catalog";

const getPrice = (price) => Number(price.replace(/[$,]/g, ""));

const formatPrice = (price) =>
  `$${price.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

export default function Header({
  navigate,
  cart,
  cartCount,
  removeFromCart,
  searchOpen,
  setSearchOpen,
  mobileOpen,
  setMobileOpen,
  query,
  setQuery,
}) {
  const [cartOpen, setCartOpen] = useState(false);
  const cartTotal = cart.reduce(
    (total, item) => total + getPrice(item.price) * item.quantity,
    0,
  );

  return (
    <header className="relative z-10 border-b border-line bg-paper/95">
      <div className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between px-[5.2vw] max-md:h-16 max-md:px-[5vw]">
        <button
          className="inline-flex items-center gap-2.5 text-[17px] font-semibold tracking-[-0.04em]"
          onClick={() => navigate("home")}
          aria-label="Morrow home"
        >
          <span className="grid size-[25px] place-items-center rounded-full border border-ink font-serif text-sm font-medium">M</span> morrow
        </button>
        <nav className={`${mobileOpen ? "flex" : "hidden"} absolute left-0 right-0 top-16 flex-col gap-5 border-b border-line bg-paper px-[5vw] py-6 md:static md:flex md:flex-row md:gap-8 md:border-0 md:bg-transparent md:p-0`}>
          <button className="cursor-pointer text-muted transition-colors hover:text-ink" onClick={() => navigate("shop")}>Shop</button>
          <button className="cursor-pointer text-muted transition-colors hover:text-ink" onClick={() => navigate("journal")}>Journal</button>
          <button className="cursor-pointer text-muted transition-colors hover:text-ink" onClick={() => navigate("about")}>Our story</button>
        </nav>
        <div className="flex items-center gap-4">
          <button
            className="inline-flex items-center justify-center p-1 max-[430px]:hidden"
            onClick={() => {
              setSearchOpen(!searchOpen);
              setCartOpen(false);
            }}
            aria-label="Search"
          >
            <Search size={18} />
          </button>
          <button
            className="inline-flex items-center justify-center gap-1 p-1 font-mono text-sm"
            onClick={() => {
              setCartOpen(!cartOpen);
              setSearchOpen(false);
            }}
            aria-label="Open bag"
          >
            <ShoppingBag size={18} />
            <span>{cartCount.toString().padStart(2, "0")}</span>
          </button>
          <button
            className="hidden p-1 max-md:inline-flex"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            className="overflow-hidden border-t border-line bg-paper"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="mx-auto flex max-w-[1400px] items-center gap-3.5 px-[5.2vw] py-5">
              <Search size={20} />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search products, stories, inspiration"
              />
              <button onClick={() => setSearchOpen(false)}>
                <X size={18} />
              </button>
            </div>
            {query && (
              <div className="mx-auto grid max-w-[1400px] gap-2 px-[8.2vw] pb-5">
                {products
                  .filter((product) =>
                    product.name.toLowerCase().includes(query.toLowerCase()),
                  )
                  .map((product) => (
                    <button
                      key={product.id}
                      onClick={() => {
                        navigate(`product/${product.id}`);
                        setSearchOpen(false);
                      }}
                    >
                      <span className="flex max-w-[500px] justify-between text-left text-sm text-muted">{product.name}<span className="font-mono text-sm">{product.price}</span></span>
                    </button>
                  ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {cartOpen && (
          <motion.aside
            className="absolute right-[5.2vw] top-[76px] z-20 w-[min(420px,calc(100vw-32px))] border border-line bg-paper p-6 shadow-[0_18px_45px_rgba(34,33,31,0.14)] max-md:top-16 max-md:right-[5vw]"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            <div className="flex items-start justify-between border-b border-line pb-4">
              <div>
                <p className="mb-2 font-mono text-sm uppercase tracking-[0.14em] text-muted">Your bag</p>
                <h2 className="m-0 text-[28px] font-medium">{cartCount} items</h2>
              </div>
              <button
                className="inline-flex items-center justify-center p-1"
                onClick={() => setCartOpen(false)}
                aria-label="Close bag"
              >
                <X size={18} />
              </button>
            </div>
            {cart.length === 0 ? (
              <p className="my-6 text-muted">Your bag is empty.</p>
            ) : (
              <>
                <div className="grid max-h-[360px] gap-[18px] overflow-y-auto py-5">
                  {cart.map((item) => (
                    <div className="grid grid-cols-[64px_1fr_auto] items-center gap-3" key={item.id}>
                      <img className="size-16 object-cover" src={item.image} alt={item.name} />
                      <div className="grid min-w-0 gap-1">
                        <strong className="truncate text-sm font-medium">{item.name}</strong>
                        <span className="font-mono text-sm text-muted">
                          {item.quantity} × {item.price}
                        </span>
                        <b className="font-mono text-sm font-medium">
                          {formatPrice(getPrice(item.price) * item.quantity)}
                        </b>
                      </div>
                      <button
                        className="inline-flex items-center gap-1 p-1 text-sm text-muted hover:text-orange"
                        onClick={() => removeFromCart(item.id)}
                        aria-label={`Remove one ${item.name}`}
                      >
                        <Trash2 size={15} />
                        <span>Remove</span>
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between border-t border-line pt-4 text-sm">
                  <span>Total</span>
                  <strong className="font-mono">{formatPrice(cartTotal)}</strong>
                </div>
              </>
            )}
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
}
