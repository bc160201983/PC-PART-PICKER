import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="h-[400px] flex flex-col justify-center items-center">
      <div className="wrapper h-full max-w-6xl">
        <div className="logo">SMART BUILD AI</div>
        <div className="cardLink">
          <h1>PCPP</h1>
          <ul>
            <Link href={"/build"}>
              <li>Builder</li>
            </Link>
            <Link href={"/products"}>
              <li>Products</li>
            </Link>
          </ul>
        </div>
        <div className="cardLink">
          <h1>PCPP</h1>
          <ul>
            <Link href={"/build"}>
              <li>Builder</li>
            </Link>
            <Link href={"/products"}>
              <li>Products</li>
            </Link>
          </ul>
        </div>
        <div className="cardLink">
          <h1>PCPP</h1>
          <ul>
            <Link href={"/build"}>
              <li>Builder</li>
            </Link>
            <Link href={"/products"}>
              <li>Products</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="foorterInfo mt-6 border-t h-1/4 border-black w-full max-w-6xl flex justify-center items-center pt-6">
        ©2023 SMART BUILD AI, All rights reserved.
      </div>
    </section>
  );
};

export default Footer;
