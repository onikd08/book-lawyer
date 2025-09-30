import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import MyBookings from "../pages/MyBookings/MyBookings";
import Contact from "../pages/Contact/Contact";
import Blogs from "../pages/Blogs/Blogs";
import LawyerDetails from "../pages/LawyerDetails/LawyerDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ErrorLawyer from "../pages/ErrorPage/ErrorLawyer";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        Component: Home,
        index: true,
        loader: () => fetch("/fakedata.json"),
      },
      {
        path: "myBookings",
        Component: MyBookings,
        loader: () => fetch("/fakedata.json"),
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "blogs",
        Component: Blogs,
      },
      {
        path: "lawyerDetails/:id",
        Component: LawyerDetails,
        errorElement: <ErrorLawyer />,
        loader: () => fetch("/fakedata.json"),
      },
    ],
  },
]);
