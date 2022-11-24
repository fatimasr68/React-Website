import Http from "../../interceptor/interceptor";

const MainUrl = process.env.REACT_APP_API_PATH;

const GetCourseById = async (courseId) => {
  try {
    const results = await Http.get(`${MainUrl}course/${courseId}`);
    return results.data.result;
  } catch (error) {
    return error;
  }
};

export default GetCourseById;
