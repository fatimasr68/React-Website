import Http from "../../interceptor/interceptor";

const MainUrl = process.env.REACT_APP_API_PATH;

const GetAllCourses = async () => {
  try {
    const results = await Http.get(`${MainUrl}course/getall`);
    return results.data.result;
  } catch (error) {
    return error;
  }
};

export default GetAllCourses;
