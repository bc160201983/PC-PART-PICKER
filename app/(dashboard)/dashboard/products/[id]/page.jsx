import {
  updateProduct,
  fetchBrands,
  fetchcategories,
  fetchProduct,
} from "@/app/(dashboard)/lib/actions";

import styles from "@/app/(dashboard)/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);
  const categories = await fetchcategories();
  const brands = await fetchBrands();

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={id} />
          <input
            type="text"
            placeholder="title"
            defaultValue={product.title}
            name="title"
            required
          />
          <input
            type="text"
            defaultValue={product.link}
            placeholder="Purchase link"
            name="link"
            required
          />

          <select name="category" id="cat">
            <option defaultValue="general">Choose a Category</option>
            {categories.map((category) => (
              <option
                className="uppercase"
                key={category._id}
                value={category._id}
              >
                {category.name}
              </option>
            ))}
          </select>
          <select name="brand" id="brand">
            <option defaultValue="general">Choose a Brand</option>
            {brands.map((brand) => (
              <option className="uppercase" key={brand._id} value={brand._id}>
                {brand.name}
              </option>
            ))}
          </select>
          <input
            type="number"
            defaultValue={product.price}
            placeholder="price"
            name="price"
            required
          />
          <input
            type="text"
            defaultValue={product.socket}
            placeholder="Socket"
            name="socket"
            required
          />
          <input
            type="text"
            defaultValue={product.series}
            placeholder="Series"
            name="series"
            required
          />
          <input
            type="text"
            defaultValue={product.capacity}
            placeholder="Capacity"
            name="capacity"
            required
          />

          <textarea
            required
            name="desc"
            defaultValue={product.desc}
            id="desc"
            rows="16"
            placeholder="Description"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
