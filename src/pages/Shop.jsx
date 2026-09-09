import { useState } from "react";
import { products } from "../data/catalog";
import ProductCard from "../components/ProductCard";

export default function Shop({ addToCart, navigate }) {
  const [category, setCategory] = useState("All products");
  const categories = [
    "All products",
    "Phones",
    "Audio",
    "Wearables",
    "Essentials",
    "Accessories",
  ];
  const shown =
    category === "All products"
      ? products
      : products.filter((product) => product.category === category);
  return (
    <section className="mx-auto max-w-[1400px] px-[5.2vw] py-[105px] pb-[130px] max-md:px-[8vw] max-md:py-[75px]">
      <div className="mb-14 flex items-end justify-between max-md:block">
        <div>
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.14em] text-muted">The collection</p>
          <h1 className="mb-7 text-[clamp(55px,7.3vw,105px)] font-medium leading-[0.96] tracking-[-0.05em]">
            Good things,
            <br />
            <em>made better.</em>
          </h1>
        </div>
        <p className="text-muted max-md:mt-6">
          Thoughtful tools for every day,
          <br />
          designed to live with you.
        </p>
      </div>
      <div className="mb-14 flex items-start justify-between gap-5">
        <div className="flex flex-wrap gap-3.5">
          {categories.map((item) => (
            <button
              key={item}
              className={`border-b pb-1 text-sm ${category === item ? "border-ink text-ink" : "border-transparent text-muted"}`}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        
      </div>
      <div className="grid grid-cols-3 gap-x-5 gap-y-14 max-md:grid-cols-2 max-md:gap-x-2.5 max-md:gap-y-10 max-[430px]:grid-cols-1">
        {shown.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            addToCart={addToCart}
            navigate={navigate}
          />
        ))}
      </div>
    </section>
  );
}
