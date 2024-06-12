
const Button = ({label, iconURL, backgroundColor,
  borderColor, textColor, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center
    gap-2 px-7 py-4 border font-montserrat text-lg leading-none

    ${backgroundColor
    ? `${backgroundColor} ${borderColor} ${textColor}`
    :"bg-coral-red text-white border-coral-red"}
    rounded-full ${fullWidth && 'w-full'}"}`}>
        {label}
        
        {/* as if saying if icronURL exists render the image else don't show an image */}
        {iconURL && <img 
        src={iconURL}  
        alt="arrow right icon" 
        className="ml-2 rounded-full
        w-5 h-5"/>}
    </button>
  )
}

export default Button;