import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RecoilRoot } from "recoil";
import Loading from "./components/Loading";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
import Quiz from "./pages/Quiz";
import WrongAnswer from "./pages/WrongAnswer";
import Result from "./pages/Result";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Loading />,
    children: [
      { index: true, path: "/", element: <Main /> },
      { path: "/quiz", element: <Quiz /> },
      { path: "/result", element: <Result /> },
      { path: "/wrong", element: <WrongAnswer /> },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <React.Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </React.Suspense>
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
