import { CLOUDINARY_NAME, CLOUDINARY_UPLOAD_PRESET } from "@/consts/urlconst";
import axios from "axios";

export const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET); // Tạo trong Cloudinary
    formData.append("cloud_name", CLOUDINARY_NAME);

    try {
        const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/image/upload`,
            formData
        );
        console.log("response.data.secure_url: ", response.data.secure_url)
        return response.data.secure_url; // URL ảnh sau khi upload
    } catch (error) {
        console.error("Upload failed:", error);
        return null;
    }
};
