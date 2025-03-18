interface IMainButtonProps{
    buttonText: string,
    img?: string
    // ! hier um die funktionen für die buttons mitzugeben
    // function: () => void
}

const MainButton = ({buttonText, img}: IMainButtonProps) => {
    return ( 
        <>
        <button className="flex items-center justify-center gap-1 border-2 border-dark-blue rounded-full py-1 px-2 text-dark-blue bg-light-grey cursor-pointer transition ease-in-out hover:opacity-70">
            {buttonText}
            <img className="h-5" src={img}/>
            </button>
        </>
     );
}
 
export default MainButton;