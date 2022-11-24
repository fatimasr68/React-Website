import { setItem } from "../../storage/storage";
import Http from "../../interceptor/interceptor";
import { toast } from "react-toastify";

const MainUrl = process.env.REACT_APP_API_PATH;

const RegisterUser = async (userObject) => {
  try {
    const result = await Http.post(`${MainUrl}auth/register`, userObject);

    const token = result.data.result.jwtToken;

    setItem("token", token);
    toast.success("تبریک! ثبت نام با موفقیت انجام شد.");

    return result.data.result;
  } catch (error) {
    toast.error("ثبت نام با خطا مواجه شد! لطفا مجددا تلاش کنید...");
    return false;
  }
};

export default RegisterUser;
