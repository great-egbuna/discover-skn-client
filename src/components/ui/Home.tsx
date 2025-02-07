import HomeImage from "../../assets/pages/home/home-image.jpg";
import Button from "../general/button";
import GoogleIcon from "../../assets/icons/google-social-icon.png";
import FbIcon from "../../assets/icons/fb-icon.png";
import DiscoverSKNLogo from "../../assets/discover-SKN-logo.png";
import { IoMdPerson } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className=" h-screen bg-cover bg-center "
      style={{ backgroundImage: `url(${HomeImage})` }}
    >
      <div className="flex w-full justify-end p-4">
        <button
          type="button"
          className="flex items-center gap-4 text-white text-sm underline"
        >
          <IoMdPerson color="white" />
          Continue as guest
        </button>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-end h-full">
        <div className="absolute inset-0 bottom-[0] bg-gradient-to-b from-transparent to-black opacity-50"></div>
        <div className="relative z-50 flex flex-col items-center gap-4 p-4">
          <img src={DiscoverSKNLogo} />
          <h1 className="text-white text-4xl font-bold text-center">
            Experience The Real Saint Kitts & Nevis
          </h1>
          <p className="text-base text-white text-center">
            Discover The Heart Of Saint Kitts & Nevis Through Authentic, Local
            Experiences
          </p>
          <Button
            text="Continue with Google"
            icon={<img src={GoogleIcon} alt="Google's company icon" />}
          />
          <Button
            text="Continue with Facebook"
            icon={
              <img
                src={FbIcon}
                alt="Facebooks's company logo"
                className="my-4"
              />
            }
          />
          <Button
            text="Continue with Email"
            customClass="text-white bg-[rgba(255, 255, 255, 0.4)] backdrop-blur-2xl"
            onClick={() => navigate("/auth/signup")}
          />
          <p className="text-white text-sm">
            By signing up you agree to our Terms and Conditions and Privacy
            Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
