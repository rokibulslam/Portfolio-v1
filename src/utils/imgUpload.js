import axios from "axios";
export const imgUpload = async (image) => {
  const formData = new FormData();
  formData.append("file", image[0]);
  formData.append("upload_preset", "jsjb2bic");
  formData.append("upload_preset", "jsjb2bic");
  const data = await axios.post(
    "https://api.cloudinary.com/v1_1/gsbsoft/image/upload",
    formData
  );
  return data;
};
