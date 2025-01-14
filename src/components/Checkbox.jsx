import { BsCheckLg } from "react-icons/bs";

const Checkbox = ({ toggle, onClick = () => {}, text = "", color }) => {
  return (
    <div
      className="flex items-center hover:cursor-pointer w-fit gap-2"
      onClick={onClick}
      data-cy="checkbox"
    >
      <div
        data-cy="checkbox-bg"
        className={`w-4 h-4 rounded-sm border border-white !bg-transparent
        ${
          toggle
            ? `${color ? color : "bg-bear-teal/50"}`
            : "bg-hackathon-gray-100"
        } flex items-center justify-center`}
      >
        <BsCheckLg
          data-cy="checkmark"
          className={`${
            toggle ? "text-white" : "text-hackathon-gray-100 !opacity-0"
          } text-lg transition-opacity`}
        />
      </div>
      {text && <p className="my-0 pt-0 text-white">{text}</p>}
    </div>
  );
};

export default Checkbox;
