import { useMutation } from "@apollo/client";
import { UPLOADIMAGE } from "../graphql/mutations";

const UploadFilesService = async (file, onUploadProgress) => {
  const [uploadImage, { error }] = useMutation(UPLOADIMAGE);
  try {
    const { data } = await uploadImage({
      variables: {
        file: file,
      },
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default UploadFilesService();
