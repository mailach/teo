import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import { EventList } from "./components/EventList";
import { EventRegistration } from "./components/EventRegistration";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="events" element={<EventList />} />
        <Route path="events/:id/register" element={<EventRegistration />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
