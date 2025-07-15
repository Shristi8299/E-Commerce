interface ButtonProps{
    buttonName :string,
    handleClick:()=>{}
}
export default function Button({buttonName, handleClick} :ButtonProps){
  return (
        <button className=" text-black p-1.5 mt-3 border-1 rounded-md hover:bg-black hover:text-white"  onClick={handleClick}>{buttonName}</button>
  )
}
