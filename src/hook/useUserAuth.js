import Cookies from "js-cookie";

const useUserAuth = () => {
  const isAuth = Cookies.get("userInfo")
    ? JSON.parse(Cookies.get("userInfo"))
    : localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

  return { isAuth };
};

export default useUserAuth;
