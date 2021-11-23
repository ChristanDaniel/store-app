import type { NextPage } from "next";
import dynamic from "next/dynamic";



const MenuButtons = dynamic(() => import("../src/components/Menu"), {
  ssr: false,
});

const HomeContainer = dynamic(() => import("../src/features/HomeContainer"), {
  ssr: false,
});


const Home: NextPage = () => {
  return (
    <>
      <div>
          <MenuButtons />
          <HomeContainer />
      </div>
    </>
  );
};

export default Home;
