import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import images from "./Images";

function ProductImage({ id, onExpand }) {
  return (
    <motion.img
      src={images[0]}
      alt=""
      onClick={() => onExpand(id)}
      className="related-product-image"
      layoutId={`product-${id}`}
    />
  );
}

function App() {
  const [productIds, setProductIds] = useState([1, 2, 3]);
  const [primaryProduct, setPrimaryProduct] = useState(0);

  function setAsPrimary(id) {
    const currentProductId = primaryProduct;
    const newProductIds = [
      ...productIds.filter((x) => x !== id),
      currentProductId,
    ];

    setPrimaryProduct(id);
    setProductIds(newProductIds);
  }

  return (
    <div className="container">
      <main className="primary-container">
        <AnimatePresence>
          <motion.img
            key={primaryProduct}
            className="primary-product-image"
            src={images[primaryProduct]}
            alt=""
            layoutId={`product-${primaryProduct}`}
          />
        </AnimatePresence>
      </main>
      <aside className="product-gallery">
        <AnimatePresence>
          {productIds.map((id) => (
            <ProductImage id={id} key={id} onExpand={setAsPrimary} />
          ))}
        </AnimatePresence>
      </aside>
    </div>
  );
}

export default App;
