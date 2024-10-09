import axios, { AxiosError } from "axios";

interface ErrorResponse {
  message: string;
  error: string;
}
interface ApiErrorResponse {
  message?: string; // Optional, based on your API response structure
  error?: string; // Optional, based on your API response structure
}

const handleAxiosError = (error: unknown): ErrorResponse => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError;
    // Handle known Axios errors with response
    if (axiosError.response) {
      const responseData = axiosError.response.data as ApiErrorResponse;
      return {
        message: responseData.message || "An error occurred",
        error: axiosError.code || "No additional error information",
      };
    } else if (axiosError.request) {
      // Handle case where request was made, but no response was received
      return {
        message: "No response received from the server",
        error: "Request was made, but no response was received",
      };
    }
  }
  // Handle unexpected errors
  return {
    message: "An unexpected error occurred",
    error: (error as Error).message, // Capture the error message if available
  };
};
export default handleAxiosError;
