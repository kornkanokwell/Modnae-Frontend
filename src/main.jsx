import React from "react";
import ReactDOM from "react-dom/client";

import "./App.css";
import "./index.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import { MenuDocument } from "./app/menudocument.jsx";
import { WriteReview } from "./app/writereview.jsx";
import { ReadReview } from "./app/readreview.jsx";
import { Contact } from "./app/contact.jsx";
import { Calendar } from "./app/calendar.jsx";
import { CourseBook } from "./app/coursebook.jsx";
import { CourseSyllabus } from "./app/coursesyllabus.jsx";
import { PeeOne } from "./app/peeone.jsx";
import { PeeTwo } from "./app/peetwo.jsx";
import { PeeThree } from "./app/peethree.jsx";
import { PeeFour } from "./app/peefour.jsx";
import { Topic } from "./app/topic.jsx";
import { Login } from "./app/auth/login.jsx";
import { Register } from "./app/auth/register.jsx";
import { EmailVerify } from "./app/auth/verifyEmail.jsx";
import { Account } from "./app/account.jsx";
import { Googleform } from "./app/ggform.jsx";
import { RateOurWebsite } from "./components/rateOurWebsite.jsx";
//Admin

//Redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./app/reducers/index.js";
import { useDispatch } from "react-redux";
//function
import { currentUser } from "./app/function/auth.js";
//route
import { UserRoute } from "./routes/UserRoute.jsx";

function App() {
  const dispatch = useDispatch();
  const idtoken = localStorage.token;
  if (idtoken) {
    currentUser(idtoken)
      .then((res) => {
        dispatch({
          type: "LOGIN",
          payload: {
            token: idtoken,
            username: res.data.username,
            firstname: res.data.firstname,
            lastname: res.data.lastname,
            email: res.data.email,
            role: res.data.role,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<MenuDocument />} />

        <Route
          path="/account"
          element={
            <UserRoute>
              <Account />
            </UserRoute>
          }
        />
        <Route path="/writereview" element={<WriteReview />} />
        <Route path="/readreview" element={<ReadReview />} />
        <Route path="/menudocument" element={<MenuDocument />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/coursebook" element={<CourseBook />} />
        <Route path="/coursesyllabus" element={<CourseSyllabus />} />
        <Route path="/peeone" element={<PeeOne />} />
        <Route path="/peetwo" element={<PeeTwo />} />
        <Route path="/peethree" element={<PeeThree />} />
        <Route path="/peefour" element={<PeeFour />} />
        <Route path="/topic" element={<Topic />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
        <Route path="/users/:id/verify/:tokens" element={<EmailVerify />} />
        <Route path="/rate" element={<Googleform />} />
      </Routes>
    </>
  );
}

const store = createStore(rootReducer, composeWithDevTools());
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

  // </React.StrictMode>
);
