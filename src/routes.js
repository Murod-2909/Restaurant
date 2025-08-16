import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Spinner from "./components/Spinner";
import ScrollTop from "./hoc/ScrollTop";
import Layout from "./components/Layout";
import NotFound from "./pages/404/NotFound";
const Home = lazy(() => import("./pages/Home"));

const routes = [
  { path: "/", element: Home },

];

const RoutesContainer = () => (

    <Router>
      <Suspense fallback={<Spinner position="full" />}>
        <Routes>
          <Route element={<Layout />}>
            {routes.map((route, key) => {
              const RouteComponent = ScrollTop(route.element);
              return (
                  <Route
                      key={key}
                      path={route.path}
                      element={<RouteComponent />}
                  />
              );
            })}
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
);

export default RoutesContainer;
