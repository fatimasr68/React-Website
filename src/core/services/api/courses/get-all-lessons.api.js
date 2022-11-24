import Http from "../../interceptor/interceptor";

const MainUrl = process.env.REACT_APP_API_PATH;

const GetAllLessons = async () => {
  try {
    const results = await Http.get(`${MainUrl}lesson`);
    return results.data.result;
  } catch (error) {
    return error;
  }
};

export default GetAllLessons;
