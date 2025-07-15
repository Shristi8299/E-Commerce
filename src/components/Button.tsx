interface ButtonProps {
  buttonName: string;
  handleClick?: () => void;
}

export default function Button({ buttonName, handleClick }: ButtonProps) {
  return (
    <button
      className=" text-black p-1.5 mt-3 border-1 rounded-md hover:bg-black hover:text-white"
      onClick={(e) => {
        e.preventDefault();
        if (handleClick) {
          handleClick(); //try to figure out why the if statement is there
        }
      }}
    >
      {buttonName}
    </button>
  );
}
