import RootRouters from "./Routing/Routers";
import { ToastContainer } from "react-toastify";
import { CartProvider } from "react-use-cart";
import { AppProvider } from "./context/AppContext";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
       <>
      <AppProvider>
        <CartProvider>
          <BrowserRouter>
            <RootRouters />
          </BrowserRouter>
        </CartProvider>
      </AppProvider>
      <ToastContainer />
      </>
  );
}

export default App;
