import Http from "../../interceptor/interceptor";
import { toast } from "react-toastify";

const MainUrl = process.env.REACT_APP_API_PATH;

const RemoveStudentFromCourse = async (object) => {
  const courseData = { courseId: object.courseId };
  try {
    const results = await Http.post(
      `${MainUrl}course/removeStudentFromCourse/${object.userId}`,
      courseData
    );
    toast.success("دوره با موفقیت حذف شد!");
    return results.data;
  } catch (error) {
    toast.error("حذف دوره با خطا مواجه شد لطفا مجددا تلاش کنید!");
    return false;
  }
};

export default RemoveStudentFromCourse;
