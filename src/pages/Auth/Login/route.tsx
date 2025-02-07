import Main from "../../../components/general/main";
import Login from "../../../components/ui/Auth/Login/Login";
import { APPLICATION_ROUTES } from "../../../config/routes";

const route = {
  path: APPLICATION_ROUTES.auth.login,
  element: (
    <Main>
      <Login />
    </Main>
  ),
};

export default route;
