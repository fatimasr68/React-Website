import Http from "../../interceptor/interceptor";

const MainUrl = process.env.REACT_APP_API_PATH;

const GetAllComments = async () => {
  try {
    const results = await Http.get(`${MainUrl}comments/`);
    return results.data;
  } catch (error) {
    return error;
  }
};

export default GetAllComments;
