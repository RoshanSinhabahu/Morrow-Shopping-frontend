import { useState } from "react";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductCard({ product, addToCart, navigate }) {
  const [liked, setLiked] = useState(false);
  return (
    <motion.article className="group" layout whileHover={{ y: -4 }}>
      <div
        className="relative cursor-pointer overflow-hidden bg-warm"
        onClick={() => navigate(`product/${product.id}`)}
      >
        <img className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105" src={product.image} alt={product.name} />
        <span className="absolute left-3 top-3 bg-paper px-2 py-1 font-mono text-sm uppercase">{product.tag}</span>
        <button
          className={`absolute right-3 top-3 rounded-full bg-paper p-2 ${liked ? "text-orange" : ""}`}
          onClick={(event) => {
            event.stopPropagation();
            setLiked(!liked);
          }}
          aria-label="Favorite"
        >
          <Heart size={17} fill={liked ? "currentColor" : "none"} />
        </button>
      </div>
      <div className="flex items-start justify-between py-4">
        <div>
          <p className="mb-1 font-mono text-sm uppercase text-muted">{product.category}</p>
          <h3 className="text-lg font-medium">{product.name}</h3>
        </div>
        <strong>{product.price}</strong>
      </div>
      <button className="flex w-full items-center justify-between border-b border-ink pb-2 text-sm" onClick={() => addToCart(product)}>
        Add to bag <span>+</span>
      </button>
    </motion.article>
  );
}
