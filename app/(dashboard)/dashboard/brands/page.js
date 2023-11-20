"use server";
import {
  addBrand,
  fetchBrands,
  updateBrand,
} from "@/app/(dashboard)/lib/actions";
import Link from "next/link";

const brands = async () => {
  const brands = await fetchBrands();

  return (
    <div className="p-5 mt-5 flex justify-between gap-10 bg-[#182237]">
      <div>
        <form action={addBrand} className="flex-1 flex gap-2 ">
          <input
            type="text"
            placeholder="title"
            name="name"
            required
            className="input"
          />

          <button type="submit" className="btn-form h-[88px] w-[245px]">
            Submit
          </button>
        </form>
      </div>
      <div
        className="list-brands flex-1
      "
      >
        <table>
          <tr>
            <th>Title</th>
            <th>Action</th>
          </tr>
          {brands.map((brand) => (
            <tr key={brand._id}>
              <td className="uppercase">{brand.name}</td>
              <td>
                <Link
                  href={`/dashboard/brands/${brand._id}`}
                  className="bg-teal-500 cursor-pointer text-center hover:bg-teal-400 hover:transition-all hover:ease-in-out p-2 rounded-sm"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default brands;
