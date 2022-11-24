import Http from "../../interceptor/interceptor";
import { toast } from "react-toastify";

const MainUrl = process.env.REACT_APP_API_PATH;

const PostComment = async (obj) => {
  try {
    const results = await Http.post(`${MainUrl}comments/send`, obj);

    toast.success("دیدگاه شما با موفقیت ثبت شد.");
    return results.data;
  } catch (error) {
    toast.error("ثبت دیدگاه با خطا مواجه شد لطفا مجددا تلاش کنید!");
    return false;
  }
};

export default PostComment;
