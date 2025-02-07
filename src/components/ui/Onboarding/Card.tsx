import { IoMdCheckmark } from "react-icons/io";

interface Props {
  src: string;
  text: string;
  selected?: boolean;
  onClick?: () => void;
}

const OnboardingCard: React.FC<Props> = ({ src, text, selected, onClick }) => {
  return (
    <div role="button" onClick={onClick}>
      <div className="w-full  rounded-[20px] relative">
        <img
          src={src}
          alt="onboarding card image"
          className="h-full w-full object-cover "
        />

        {selected && (
          <div className="absolute z-20 inset-0 bg-[rgba(0,0,0,0.3)] flex justify-center items-center rounded-[20px]">
            <div
              className="w-[54px] h-[54px] rounded-[50%] flex items-center justify-center  bg-[rgba(255, 255, 255, 0.3)] backdrop-blur-sm
          "
            >
              <IoMdCheckmark color="white" />
            </div>
          </div>
        )}
      </div>

      <p className="capitalize font-medium text-[#333333] text-xs text-center">
        {text}
      </p>
    </div>
  );
};

export default OnboardingCard;
