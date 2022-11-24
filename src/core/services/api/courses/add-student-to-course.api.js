import Http from "../../interceptor/interceptor";
import { getItem } from "../../storage/storage";
import { toast } from "react-toastify";

const MainUrl = process.env.REACT_APP_API_PATH;

const AddStudentToCourse = async (courseId) => {
  const user = JSON.parse(getItem("user"));
  const object = { courseId: courseId };
  try {
    const results = await Http.post(
      `${MainUrl}course/addStudentToCourse/${user._id}`,
      object
    );
    toast.success("شما با موفقیت به دوره اضافه شدید!");
    return results.data;
  } catch (error) {
    toast.error("شما در این دوره حضور دارید!");
    console.log(error);
    return false;
  }
};

export default AddStudentToCourse;
