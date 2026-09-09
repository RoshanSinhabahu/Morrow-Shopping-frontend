import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Announcement from "./components/Announcement";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import Product from "./pages/Product";
import Shop from "./pages/Shop";

function App() {
  const [page, setPage] = useState(
    window.location.hash.replace("#/", "") || "home",
  );
  const [cart, setCart] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleHash = () =>
      setPage(window.location.hash.replace("#/", "") || "home");
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const navigate = (path) => {
    window.location.hash = `/${path}`;
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const addToCart = (product) => {
    setCart((items) => {
      const existingItem = items.find((item) => item.id === product.id);

      if (existingItem) {
        return items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...items, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((items) =>
      items
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const renderPage = () => {
    if (page === "shop")
      return <Shop addToCart={addToCart} navigate={navigate} />;
    if (page === "journal") return <Journal navigate={navigate} />;
    if (page === "about") return <About />;
    if (page.startsWith("product/"))
      return (
        <Product
          id={page.split("/")[1]}
          addToCart={addToCart}
          navigate={navigate}
        />
      );
    return <Home navigate={navigate} addToCart={addToCart} />;
  };

  return (
    <div className="overflow-hidden">
      <Announcement />
      <Header
        navigate={navigate}
        cart={cart}
        cartCount={cartCount}
        removeFromCart={removeFromCart}
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        query={query}
        setQuery={setQuery}
      />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer navigate={navigate} />
    </div>
  );
}

export default App;
