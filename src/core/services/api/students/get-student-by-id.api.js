import Http from "../../interceptor/interceptor";

const MainUrl = process.env.REACT_APP_API_PATH;
const GetStudentById = async (studentId) => {
  try {
    const result = await Http.get(`${MainUrl}student/${studentId}`);
    return result.data.result;
  } catch (error) {
    return error;
  }
};

export default GetStudentById;
