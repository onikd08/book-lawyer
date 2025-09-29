import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import MyBookings from "../pages/MyBookings/MyBookings";
import Contact from "../pages/Contact/Contact";
import Blogs from "../pages/Blogs/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        Component: Home,
        index: true,
      },
      {
        path: "myBookings",
        Component: MyBookings,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "blogs",
        Component: Blogs,
      },
    ],
  },
]);
