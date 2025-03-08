export const BACKEND_URL =  import.meta.env.VITE_INTERNHUB_API
export const OAUTH2_REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI
export const GOOGLE_AUTH_URL = BACKEND_URL + "oauth2/authorize/google?redirect_uri=" + OAUTH2_REDIRECT_URI
export const CLOUDINARY_NAME =  import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
export const CLOUDINARY_UPLOAD_PRESET =  import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET

