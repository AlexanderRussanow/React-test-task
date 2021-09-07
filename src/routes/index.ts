import Event from "../pages/Event";
import Login from "../pages/Login";

export type Iroute = {
  path: string;
  exact?: boolean;
  component: React.ComponentType;
};

export enum RouteNames {
  LOGIN = "/login",
  EVENT = "/",
}

export const publicRoutes: Iroute[] = [
  { path: RouteNames.LOGIN, exact: true, component: Login },
];

export const privateRoutes: Iroute[] = [
  { path: RouteNames.EVENT, exact: true, component: Event },
];
