import { toast, ToastOptions } from "react-toastify";

const NotificationService = {
  success: (message: string, options?: ToastOptions) =>
    toast.success(message, options),
  error: (message: string, options?: ToastOptions) =>
    toast.error(message, options),
  info: (message: string, options?: ToastOptions) =>
    toast.info(message, options),
  warn: (message: string, options?: ToastOptions) =>
    toast.warn(message, options),
};

export default NotificationService;
