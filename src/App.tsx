import { Grommet } from "grommet";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SearchFlights from "./routes/SearchFlights";
import FoundFlights from "./routes/FoundFlights";
import theme from "./constants/theme";
import ReservationFail from "./routes/ReservationFail";
import ReservationSuccess from "./routes/ReservationSuccess";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchFlights />,
  },
  {
    path: "/foundFlights",
    element: <FoundFlights />,
  },
  {
    path: "/reservationFail",
    element: <ReservationFail />,
  },
  {
    path: "/reservationSuccess",
    element: <ReservationSuccess />,
  },
]);

function App() {
  return (
    <Grommet theme={theme} full>
      <RouterProvider router={router} />
    </Grommet>
  );
}

export default App;
