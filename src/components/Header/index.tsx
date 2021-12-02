import React from "react";
import { BsCart3 } from "react-icons/Bs";
import { GiCharacter } from "react-icons/gi";

import { Headers } from "./styles";

// import Image from "next/image";
// import profilePic from "../../../public/headerLogo.svg";
import router from "next/dist/client/router";

interface HeaderProps {
  onOpenModalCart: () => void
}

const Header = (): JSX.Element => {
  return (
    <>
      <Headers>
        {/* <Image src={profilePic} alt="logo" width={50} height={50} /> */}
        <h1 onClick={() => router.push("/")}>
          Ig<span>.</span>Store
        </h1>

        <div >
          <p onClick={() => router.push("/login")}>
            <GiCharacter /> Conta{" "}
          </p>

          <button>
            <BsCart3 />
          </button>
        </div>
      </Headers>
    </>
  );
};
export default Header;
