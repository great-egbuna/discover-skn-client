import Main from "../../components/general/main";
import Dashboard from "../../components/ui/Dashboard/Dashboard";
import { APPLICATION_ROUTES } from "../../config/routes";

const route = {
  path: APPLICATION_ROUTES.dashboard,
  element: (
    <Main>
      <Dashboard />
    </Main>
  ),
};

export default route;
