import { Check, ShoppingBag } from "lucide-react";
import { products } from "../data/catalog";

export default function Product({ id, addToCart, navigate }) {
  const product = products.find((item) => item.id === id) || products[0];
  return (
    <section className="mx-auto max-w-[1400px] px-[5.2vw] py-[105px] pb-[130px] max-md:px-[8vw] max-md:py-[75px]">
      <button className="mb-10 border-b border-ink pb-1.5 text-sm" onClick={() => navigate("shop")}>
        ← Back to shop
      </button>
      <div className="grid grid-cols-2 gap-[8vw] max-md:grid-cols-1 max-md:gap-12">
        <div className="relative">
          <img className="aspect-square w-full object-cover" src={product.image} alt={product.name} />
          <span className="absolute left-5 top-5 bg-paper px-2 py-1 font-mono text-sm uppercase">{product.tag}</span>
        </div>
        <div>
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.14em] text-muted">{product.category} / Morrow collection</p>
          <h1 className="mb-5 text-[clamp(55px,6vw,82px)] font-medium leading-[0.96] tracking-[-0.05em]">{product.name}</h1>
          <div className="mb-8 flex items-center gap-1.5 font-mono text-sm text-muted">
            4.9 <u>128 reviews</u>
          </div>
          <p className="max-w-[340px] leading-[1.75] text-muted">
            Quietly confident, endlessly capable. A considered object for the
            everyday rituals that make up your life.
          </p>
          <div className="my-9 font-mono text-[19px]">
            {product.price} <small>or 4 payments, interest-free</small>
          </div>
          <div className="mb-3 border-t border-line pt-4 text-sm">
            Finish <strong>{product.color}</strong>
          </div>
          <div className="flex gap-2">
            <button className="size-7 rounded-full border-2 border-white bg-black shadow" aria-label="Black" />
            <button className="size-7 rounded-full border-2 border-white bg-[#b8b8b8] shadow" aria-label="Silver" />
            <button className="size-7 rounded-full border-2 border-white bg-[#c7a77a] shadow" aria-label="Sand" />
          </div>
          <button
            className="mt-7 inline-flex min-h-[46px] w-full items-center justify-center gap-6 bg-ink px-5 text-sm text-[#fffaf3]"
            onClick={() => addToCart(product)}
          >
            Add to bag <ShoppingBag size={17} />
          </button>
          <div className="mt-6 grid gap-2 text-sm text-muted">
            <span>
              <Check size={15} /> Free shipping over $100
            </span>
            <span>
              <Check size={15} /> 30-day returns
            </span>
            <span>
              <Check size={15} /> 2-year warranty
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
