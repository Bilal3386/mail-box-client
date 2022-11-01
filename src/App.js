import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes,  Navigate } from "react-router-dom";
import Authentication from "./components/Authentication/Authentication";
import Header from "./components/Layout/Header";
import SentMailDetail from "./components/SentMailDetails/SentMailDetails";
import ComposePage from "./pages/ComposePage";
import HomePage from "./pages/HomePage";
import InboxPage from "./pages/InboxPage";
import MailDetailPage from "./pages/MailDetailPage";
import SentMailPage from "./pages/SentMailPage";
import { FetchingDataInbox, FetchingSentMail } from "./store/compose/compose-actions";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(FetchingDataInbox())
    dispatch(FetchingSentMail())
  },[dispatch])
  return (
    <Fragment>
      {isLoggedIn && <Header />}
      <main>
        <Routes>
          {!isLoggedIn && <Route path="/auth" element={<Authentication />} />}
          <Route path="/auth" element={<Navigate replace to="/" />} />
          {isLoggedIn && <Route path="/" element={<HomePage />} />}
          {isLoggedIn && <Route path="/compose" element={<ComposePage/>} />}
          {isLoggedIn && <Route path="/inbox" element={<InboxPage />} />}
          {isLoggedIn && <Route path="/sentMail" element={<SentMailPage />} />}
          {isLoggedIn && <Route path="/sentEmailDetails" element={<SentMailDetail />} />}
          {isLoggedIn && <Route path="/emailDetails" element={<MailDetailPage />} />}
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
