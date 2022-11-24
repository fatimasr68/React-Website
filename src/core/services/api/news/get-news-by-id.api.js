import Http from "../../interceptor/interceptor";

const MainUrl = process.env.REACT_APP_API_PATH;

const GetNewsById = async (newsId) => {
  try {
    const results = await Http.get(`${MainUrl}news/${newsId}`);
    return results.data.result;
  } catch (error) {
    return error;
  }
};

export default GetNewsById;
