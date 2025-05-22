import logo from "../../../../public/assets/images/logo.png"

export default function Header() {
    return(
        <header className="flex flex-col w-full items-start justify-start">
            <div className="flex flex-row items-start justify-between w-full">
                <div className="w-[20%]">
                    <img src={logo} alt="logo" className="w-full"/>
                </div>
                <div></div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div>
                <nav></nav>
            </div>
        </header>
    )
}