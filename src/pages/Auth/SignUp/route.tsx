import Main from "../../../components/general/main";
import SignUp from "../../../components/ui/Auth/SignUp/Signup";
import { APPLICATION_ROUTES } from "../../../config/routes";

const route = {
  path: APPLICATION_ROUTES.auth.signUp,
  element: (
    <Main>
      <SignUp />
    </Main>
  ),
};

export default route;
