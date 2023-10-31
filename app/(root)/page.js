import Link from "next/link";
import { BsWrenchAdjustableCircle } from "react-icons/bs";
import IntroImg from "@/public/assets/images/intro-partlist-light.png";
import Image from "next/image";
import Card from "@/components/card/Card";

export default function Home() {
  return (
    <>
      <section className="max-h-screen flex flex-col justify-center items-center">
        <div className="intro_ply pt-12 flex-col flex justify-center items-center">
          <h1 className="font-bold text-[48px] leading-[48px] pb-4 block box-border text-center">
            Pick Parts. Build Your PC.
            <br /> Compare and Share.
          </h1>
          <p className="px-[60px] pb-4 text-[#929292] text-center">
            We provide part selection, pricing, and compatibility guidance for
            <br />
            do-it-yourself computer builders.
          </p>
          <Link
            className="hover:bg-[#1e5c85] hover:transition-all hover:ease-in-out text-[18px] flex justify-center items-center  rounded text-white font-bold py-2 px-3 bg-[#2C87C3]"
            href={"#"}
          >
            <BsWrenchAdjustableCircle className="mr-2" />
            Start Your Build
          </Link>
        </div>
        <div className="img_intro max-w-7xl">
          <Image src={IntroImg} />
        </div>
      </section>

      <Card />
    </>
  );
}
