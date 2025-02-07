import Main from "../../components/general/main";
import Home from "../../components/ui/Home";
import { APPLICATION_ROUTES } from "../../config/routes";

const route = {
  path: APPLICATION_ROUTES.home,
  element: (
    <Main>
      <Home />
    </Main>
  ),
};

export default route;
