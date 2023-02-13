import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";

import { Payment } from './pages/payment/Payment';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Payment />   
    },
  ],
  )
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
