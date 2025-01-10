import HomePage from "./pages/HomePage";
import NotePage from "./pages/NotePage";
import EditPage from "./pages/EditPage";

const routes = [
  { path: "/notes", element: <HomePage /> },
  { path: "/notes/:id", element: <NotePage /> },
  { path: "/notes/edit/:id", element: <EditPage /> },
];

export default routes;
