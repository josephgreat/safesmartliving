import { PageWrapper } from "./components";
import { LandingPage, Recommendations, Threats, Vulnerabilities } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageWrapper Component={LandingPage} />,
    },
    {
      path: "/threats",
      element: <PageWrapper Component={Threats} />,
    },
    {
      path: "/vulnerabilities",
      element: <PageWrapper Component={Vulnerabilities} />,
    },
    {
      path: "/recommendations",
      element: <PageWrapper Component={Recommendations} />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
