import {
  addProduct,
  fetchBrands,
  fetchcategories,
} from "@/app/(dashboard)/lib/actions";
import styles from "@/app/(dashboard)/ui/dashboard/products/addProduct/addProduct.module.css";

const AddProductPage = async () => {
  const categories = await fetchcategories();
  const brands = await fetchBrands();
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <input type="text" placeholder="Purchase link" name="link" required />

        <select name="category" id="cat">
          <option value="general">Choose a Category</option>
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
          <option value="general">Choose a Brand</option>
          {brands.map((brand) => (
            <option className="uppercase" key={brand._id} value={brand._id}>
              {brand.name}
            </option>
          ))}
        </select>
        <input type="number" placeholder="price" name="price" required />
        <input type="text" placeholder="Socket" name="socket" required />
        <input type="text" placeholder="Series" name="series" required />
        <input type="text" placeholder="Capacity" name="capacity" required />

        <textarea
          required
          name="desc"
          id="desc"
          rows="16"
          placeholder="Description"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;
