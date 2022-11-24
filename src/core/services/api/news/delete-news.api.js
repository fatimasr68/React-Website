import Http from "../../interceptor/interceptor";

const MainUrl = process.env.REACT_APP_API_PATH;

const DeleteNews = async (obj) => {
  try {
    const data = { newsId: obj.newsId };
    const results = await Http.delete(`${MainUrl}news/${obj.newsId}`, data);
    toast.success("مطلب با موفقیت حذف شد!");
    return results.data;
  } catch (error) {
    toast.error("حذف مطلب با خطا مواجه شد لطفا مجددا تلاش کنید!");
    return error;
  }
};

export default DeleteNews;
