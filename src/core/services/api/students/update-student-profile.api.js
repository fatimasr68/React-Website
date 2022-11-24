import Http from "../../interceptor/interceptor";
import { toast } from "react-toastify";

const MainUrl = process.env.REACT_APP_API_PATH;

const UpdateStudent = async (studentId, object) => {
  try {
    const results = await Http.put(`${MainUrl}student/${studentId}`, object);
    toast.success("!ویرایش پروفایل با موفقیت انجام شد");
    return results.data;
  } catch (error) {
    toast.error("ویرایش پروفایل با خطا مواجه شد لطفا مجددا تلاش کنید!");
    return false;
  }
};

export default UpdateStudent;
