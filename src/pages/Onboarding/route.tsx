import Main from "../../components/general/main";
import Onboarding from "../../components/ui/Onboarding/Onboarding";
import { APPLICATION_ROUTES } from "../../config/routes";

const route = {
  path: APPLICATION_ROUTES.onboarding,
  element: (
    <Main>
      <Onboarding />
    </Main>
  ),
};

export default route;
