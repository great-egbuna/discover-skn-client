import { Formik } from "formik";
import React, { useState } from "react";
import SubHeader from "../../SubHeader";
import { LiaTimesSolid } from "react-icons/lia";
import Input from "../../../general/Input";
import Button from "../../../general/button";
import { Link } from "react-router-dom";
import { signUpValidationSchema } from "../../../../validation/auth";
import { authService } from "../../../../services/auth.service";
import { authToken, saveUser } from "../../../../store/user.atom";
import { useNavigate } from "react-router-dom";

const formInputs = [
  {
    name: "firstName",
    placeholder: "First name*",
    type: "text",
  },

  {
    name: "lastName",
    placeholder: "Last name*",
    type: "text",
  },

  {
    name: "email",
    placeholder: "Email Address*",
    type: "email",
  },
  {
    name: "password",
    placeholder: "Password (8+ characters)*",
    type: "password",
  },
];

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: any) => {
    try {
      setLoading(true);

      const payload = {
        name: `${values?.firstName} ${values?.lastName}`,
        email: values?.email,
        password: values?.password,
      };

      const res: any = await authService.signUp(payload);

      if (res instanceof Error) {
        setLoading(false);

        alert("Request Failed");

        return;
      }

      setLoading(false);

      if (res?.token)
        authToken.set({ token: res?.token, expiresAt: res?.expiresAt });

      saveUser(res?.user);
      navigate("/onboarding");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="w-full max-w-[400px] p-4">
      <div className="flex justify-between w-full items-start">
        <SubHeader
          header="Welcome to Exprience SKN"
          desc="Create a free account to unlock and explore the best of Saint Kitts and Nevis"
          className="w-full max-w-[350px]"
        />

        <button type="button">
          <LiaTimesSolid />
        </button>
      </div>

      <Formik
        onSubmit={handleSubmit}
        initialValues={{} as any}
        validationSchema={signUpValidationSchema}
      >
        {(props) => (
          <form
            onSubmit={props.handleSubmit}
            className="flex flex-col gap-4 mt-4"
          >
            {formInputs.map((qst) => (
              <Input
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                name={qst.name}
                type={qst.type}
                placeholder={qst.placeholder}
                error={props.errors[qst.name] as string}
              />
            ))}
            <Link
              to={"/auth/login"}
              className="text-[#0056b3] text-xs font-bold"
            >
              Forgot Password?
            </Link>
            <p className="text-[#333333] text-sm">
              By signing up you agree to our{" "}
              <span className="font-bold">Terms and Conditions</span> and
              therefore acknowledge the{" "}
              <span className="font-bold">Privacy Policy</span>
            </p>

            <Button
              text={loading ? "Please wait..." : "Get Started"}
              customClass="bg-[#006a61] text-white disabled:opacity-50"
              type="submit"
              disabled={!props.isValid || !props.dirty || props.isSubmitting}
            />

            <Link
              to="/auth/login"
              className="text-sm text-[#006a61] font-bold text-center"
            >
              Already have an account? Login
            </Link>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
