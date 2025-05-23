import ErrorPage from "../../ErrorPage";
import Loading from "../../Loading";

export const MainPage = ({ status, children }) => {

  switch (status) {
    case "loading":
      return <Loading />;

    case "error":
      return <ErrorPage />;

    case "success":
      return children;

    case "initial":
      return null;

    default:
      throw new Error("Incorest status");
  }
};