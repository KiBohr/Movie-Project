import MainButton from "../mainButton/MainButton";

const Header = () => {
    return ( 
        <header className="flex flex-col gap-2  items-start mb-10">
            <h1 className="uppercase text-red text-8xl font-semi-bold">Movies</h1>
            <p className="uppercase text-lg font-bold">sort by:</p>
            <nav className="flex items-center justify-center gap-2">
                <MainButton buttonText="Date" img="img/arrow-up.png"/>
                <MainButton buttonText="Date" img="img/arrow-down.png"/>
                <MainButton buttonText="Best Rate"/>
                <MainButton buttonText="A-Z"/>
                <MainButton buttonText="Z-A"/>
            </nav>
        </header>
     );
}
export default Header;