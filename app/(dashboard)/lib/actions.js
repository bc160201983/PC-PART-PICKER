"use server";

import { revalidatePath } from "next/cache";
import {
  Brands,
  Categories,
  Product,
  ShareLink,
  User,
} from "@/app/(dashboard)/lib/models";
import { connectToDB } from "@/app/(dashboard)/lib/utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { auth, signIn } from "@/app/(dashboard)/auth";
import { redirects } from "@/next.config";
import { data } from "autoprefixer";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/context/firebase";
import Cookies from "js-cookie";

export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addProduct = async (formData) => {
  // console.log(Object.fromEntries(formData));

  const {
    title,
    link,
    core_count,
    core_clock,
    microarchitecture,
    category,
    brand,
    desc,
    price,
    socket,
    img,
    series,
    capacity,
  } = Object.fromEntries(formData);

  const file = img;
  try {
    const storageRef = ref(storage, `images/${file.name}`);
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log("Uploaded a blob or a file");
    });
  } catch (error) {
    console.log(error);
  }

  try {
    connectToDB();

    const newProduct = new Product({
      title,
      link,
      core_count,
      core_clock,
      microarchitecture,
      category,
      brand,
      desc,
      price,
      socket,
      img,
      series,
      capacity,
    });

    const createdProduct = await newProduct.save();

    await Categories.findOneAndUpdate(
      { _id: createdProduct.category },
      {
        $push: { product: createdProduct._id },
      }
    );
    await Brands.findOneAndUpdate(
      { _id: createdProduct.brand },
      {
        $push: { product: createdProduct._id },
      }
    );
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const fetchProduct = async (id) => {
  try {
    connectToDB();
    const product = await Product.findById(id);
    return product;
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (formData) => {
  const {
    id,
    title,
    link,
    core_count,
    core_clock,
    microarchitecture,
    category,
    brand,
    desc,
    price,
    socket,
    img,
    series,
    capacity,
  } = Object.fromEntries(formData);
  // console.log(Object.fromEntries(formData));

  try {
    connectToDB();

    const updateFields = {
      id,
      title,
      link,
      core_count,
      core_clock,
      microarchitecture,
      category,
      brand,
      desc,
      price,
      socket,
      img,
      series,
      capacity,
    };

    await Product.findByIdAndUpdate(
      { _id: id },
      {
        title,
        link,
        core_count,
        core_clock,
        microarchitecture,
        category,
        brand,
        desc,
        price,
        socket,
        img,
        series,
        capacity,
      }
    );
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/products");
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Product.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete product!");
  }

  revalidatePath("/dashboard/products");
};

export const authenticate = async (prevState, formData) => {
  // console.log(Object.fromEntries(formData));
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    return "Wrong Credentials!";
  }
};

//add brand
export const addBrand = async (formData) => {
  const { name } = Object.fromEntries(formData);
  try {
    connectToDB();
    const newBrand = new Brands({ name });
    await newBrand.save();
  } catch (error) {
    console.log(error);
  }
};

export const fetchBrands = async () => {
  try {
    connectToDB();
    const brands = await Brands.find({});
    revalidatePath("/dashboard/brands");
    return brands;
  } catch (error) {
    console.log(error);
  }
};

export const singleBrand = async (id) => {
  try {
    const singleBrand = await Brands.findById(id);
    return singleBrand;
  } catch (error) {}
};

export const updateBrand = async (formData) => {
  const { id, name } = Object.fromEntries(formData);

  try {
    connectToDB();

    await Brands.findByIdAndUpdate(id, { name });
  } catch (error) {
    console.log(error);
  }
  redirect("/dashboard/brands");
};

//add brand
export const addCategory = async (formData) => {
  const { name } = Object.fromEntries(formData);
  var slug = name;
  slug = slug.replace(/\s+/g, "-").toLowerCase();
  try {
    connectToDB();
    const newCategory = new Categories({ name, slug });
    await newCategory.save();
  } catch (error) {
    console.log(error);
  }
};

export const fetchcategories = async () => {
  try {
    connectToDB();
    const categories = await Categories.find();
    revalidatePath("/dashboard/categories");
    return categories;
  } catch (error) {
    console.log(error);
  }
};

export const singleCategory = async (id) => {
  try {
    const singleCategory = await Categories.findById(id);
    return singleCategory;
  } catch (error) {}
};

export const updatecategory = async (formData) => {
  const { id, name } = Object.fromEntries(formData);
  var slug = name;
  slug = slug.replace(/\s+/g, "-").toLowerCase();

  try {
    connectToDB();

    await Categories.findByIdAndUpdate(id, { name, slug });
    revalidatePath("/build");
  } catch (error) {
    console.log(error);
  }
  redirect("/dashboard/categories");
};

export const findProductByCat = async (slug) => {
  try {
    connectToDB();
    const cat = await Categories.findOne({ slug });
    const products = await Product.aggregate([
      { $match: { category: cat?._id } },
    ]);

    return products;
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/products/cpu");
};

export const fetchComProducts = async (ids) => {
  connectToDB();
  const splitID = ids.split(",");

  try {
    const products = await Product.find({ _id: { $in: splitID } });
    return products;
  } catch (error) {
    console.log(error);
  }
};
export const fetchProductById = async (id) => {
  connectToDB();
  try {
    const product = Product.findById(id);
    return product;
  } catch (error) {
    console.log(error);
  }
};

export const fetchBrandById = async (id) => {
  connectToDB();
  try {
    const brand = Brands.findById(id);
    return brand;
  } catch (error) {
    console.log(error);
  }
};

//create shareLink

export const addProductsShareLink = async (productID) => {
  // Get the ShareLink ID from cookies
  // console.log(productID);
  connectToDB();

  try {
    const shareLink = new ShareLink();
    shareLink.productIDS.push(productID);
    const res = await shareLink.save();
    const { _id } = res;

    return _id;
    // if (shareLinkId) {
    //   // If there's a ShareLink ID in cookies, update the ShareLink in the database
    //   const shareLink = await ShareLink.findById(shareLinkId);
    //   if (shareLink) {
    //     // Add the product ID to the ShareLink's productIDS array
    //     shareLink.productIDS.push(productIDS);
    //     await shareLink.save();
    //   }
    // }
  } catch (error) {
    console.log(error);
  }
};

export const updateProductsShareLink = async (shareLinkID, productID) => {
  connectToDB();

  try {
    const shareLink = await ShareLink.findById(shareLinkID);
    if (shareLink) {
      // Add the product ID to the ShareLink's productIDS array
      shareLink.productIDS.push(productID);
      await shareLink.save();
    }
  } catch (error) {
    console.log(error);
  }
};

// Define a function to remove a product from a ShareLink
export const removeProductFromShareLink = async (shareLinkID, productID) => {
  try {
    // Use your ShareLink model to find the ShareLink by its _id
    const shareLink = await ShareLink.findById(shareLinkID);

    if (shareLink) {
      // Remove the productID from the ShareLink's productIDS array
      const index = shareLink.productIDS.indexOf(productID);
      if (index !== -1) {
        shareLink.productIDS.splice(index, 1);
      }

      // Save the updated ShareLink to the database
      await shareLink.save();

      console.log(
        `Product with ID ${productID} has been removed from ShareLink with ID ${shareLinkID}.`
      );
    } else {
      console.log(`ShareLink with ID ${shareLinkID} was not found.`);
    }
  } catch (error) {
    console.error(
      `Error removing product with ID ${productID} from ShareLink with ID ${shareLinkID}:`,
      error
    );
  }
};

// Define a function to delete a ShareLink by its _id
export const deleteShareLink = async (shareLinkID) => {
  try {
    // Use your ShareLink model to find and remove the ShareLink
    const result = await ShareLink.deleteOne({ _id: shareLinkID });

    if (result.deletedCount === 1) {
      console.log(`ShareLink with ID ${shareLinkID} has been deleted.`);
    } else {
      console.log(`ShareLink with ID ${shareLinkID} was not found.`);
    }
  } catch (error) {
    console.error(`Error deleting ShareLink with ID ${shareLinkID}:`, error);
  }
};

export const fetchShareLinkProducts = async (id) => {
  connectToDB();

  try {
    const shareLink = await ShareLink.findById(id);
    const products = await Product.find({
      _id: { $in: shareLink.productIDS },
    });

    return products;
  } catch (error) {
    console.log(error);
    return [];
  }
};
