import Http from "../../interceptor/interceptor";
import { toast } from "react-toastify";

const MainUrl = process.env.REACT_APP_API_PATH;

const UpdateCourse = async (courseId, object) => {
  try {
    const results = await Http.put(`${MainUrl}course/${courseId}`, object);
    toast.dark("!ویرایش دوره با موفقیت انجام شد");
    return results.data;
  } catch (error) {
    toast.error("ویرایش دوره با خطا مواجه شد لطفا مجددا تلاش کنید!");
    return false;
  }
};

export default UpdateCourse;
