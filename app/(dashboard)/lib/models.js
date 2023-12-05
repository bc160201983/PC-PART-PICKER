import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    link: {
      type: String,
      required: true,
    },
    core_count: {
      type: String,
    },
    core_clock: {
      type: String,
    },
    microarchitecture: {
      type: String,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categories",
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brands",
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    socket: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    series: {
      type: String,
    },
    capacity: {
      type: String,
    },
  },
  { timestamps: true }
);

//brands scheema
const brandsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    product: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true }
);
//brands scheema
const categoriesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    slug: {
      type: String,

      unique: true,
    },
    product: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true }
);

const shareLinkSchema = new mongoose.Schema({
  productIDS: [mongoose.Schema.Types.ObjectId],
});

export const ShareLink =
  mongoose.models.ShareLink || mongoose.model("ShareLink", shareLinkSchema);
export const User = mongoose.models.User || mongoose.model("User", userSchema);
//brnads model
export const Brands =
  mongoose.models.Brands || mongoose.model("Brands", brandsSchema);
//categories model
export const Categories =
  mongoose.models.Categories || mongoose.model("Categories", categoriesSchema);
//  export const Product
export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
