interface IMainButtonProps{
    buttonText: string,
    myFunction: () => void,
    img?: string,
}

const MainButton = ({buttonText, myFunction, img}: IMainButtonProps) => {
    return ( 
        <>
        <button onClick={()=> myFunction()} className="flex items-center justify-center gap-1 border-2 border-dark-blue rounded-full py-1 px-2 text-dark-blue bg-light-grey cursor-pointer transition ease-in-out hover:opacity-70 md:text-xl lg:text-2xl">
            {buttonText}
            <img className="h-5" src={img}/>
            </button>
        </>
     );
}
 
export default MainButton;