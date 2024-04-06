import { useRecoilValue, useSetRecoilState } from "recoil";
import LoginCard from "../components/LoginCard";
import SignupCard from "../components/SignupCard";
import authScreenAtom from "../atoms/authAtom";
import { useState } from "react";

const AuthPage = () => {
  const authScreenState = useRecoilValue(authScreenAtom);
  //const [value, setValue] = useState("login");
  useSetRecoilState(authScreenAtom);
  console.log(authScreenState);
  return <>{authScreenState === "login" ? <LoginCard /> : <SignupCard />}</>;
};
export default AuthPage;
