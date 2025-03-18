import axios from 'axios';

const url = import.meta.env.VITE_INTERNHUB_API;
export const saveCV = async (formData, accessToken) => {
  try {
    const response = await axios.post(`${url}student/upload-cv`, formData, {
      headers: {
        'Authorization': `Bearer ${accessToken}`, // Send the access token in the headers
        'Content-Type': 'multipart/form-data', // Important for file uploads
      },
    });
    return response.data; // Return the response data
  } catch (error) {
    console.error('Error uploading CV:', error);
    throw error; // Rethrow the error for handling in the calling function
  }
};