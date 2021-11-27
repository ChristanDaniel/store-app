import type { NextPage } from "next";
import dynamic from "next/dynamic";

// const MenuButtons = dynamic(() => import("../src/components/Menu"), {
//   ssr: false,
// });

const LoginContainer = dynamic(() => import("../src/features/LoginContainer"), {
  ssr: false,
});

const LoginPage: NextPage = () => {
  return (
    <>
      <div>
          <LoginContainer />
      </div>
    </>
  );
};

export default LoginPage;
