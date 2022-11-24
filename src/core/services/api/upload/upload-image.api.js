import Http from "../../interceptor/interceptor";

const MainUrl = process.env.REACT_APP_API_PATH;

const UploadImage = async (obj) => {
  try {
    const formData = new FormData();
    formData.append("image", obj);
    const result = await Http.post(`${MainUrl}upload/image`, formData);
    return result.data.result;
  } catch (error) {
    return false;
  }
};

export default UploadImage;
