import Http from "../../interceptor/interceptor";

const MainUrl = process.env.REACT_APP_API_PATH;

const GetAllNews = async () => {
  try {
    const results = await Http.get(`${MainUrl}news`);
    return results.data.result;
  } catch (error) {
    return error;
  }
};

export default GetAllNews;
