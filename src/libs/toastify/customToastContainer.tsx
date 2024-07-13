import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomToastContainer = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      pauseOnHover={false}
      limit={4}
    />
  );
};

export default CustomToastContainer;