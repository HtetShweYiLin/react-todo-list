import { FC } from "react";
import { Route, Routes, useRoutes } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../constants/routeConstants";
import ListDetail from "../features/home/components/list-detail/listDetail";
import Home from "../features/home/home";
import NotFound from "../features/not-found/NotFound";

const Router: FC = () => {
  let routes = useRoutes([
    { path: "*", element: <NotFound /> },
    {
      path: ROUTE_CONSTANTS.HOME,
      children: [
        { index: true, element: <Home /> },
        { path: "cocktail/:id", element: <ListDetail /> },
      ],
    },
    { path: ROUTE_CONSTANTS.NOT_FOUND, element: <NotFound /> },
  ]);
  return routes;
};

export default Router;
